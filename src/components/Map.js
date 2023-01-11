import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { useReportContext } from "../hooks/useReportContext";
import { PlacesAutocomplete } from "./Places";
import Area from "./Area";

const Map = () => {
  const [center, setCenter] = useState({ lat: 39.69478, lng: -8.13027 });
  const [zoom, setZoom] = useState(9);
  const [libraries] = useState(["places"]);
  const defaultProps = {
    center: center,
    zoom: zoom,
    mapId: "f91f236cf111997a",
    disableDefaultUI: true,
    clickableIcons: false,
    setCenter: setCenter,
    setZoom: setZoom,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return <ActualMap props={defaultProps} />;
};

function ActualMap({ props }) {
  const { reports, dispatch } = useReportContext();
  const mapRef = useRef();

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch("http://localhost:5000/api/report");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_REPORTS", payload: json });
      }
    };

    fetchReports();
  }, [dispatch]);

  const onLoad = (map) => {
    map.addListener("zoom_changed", () => {
      props.setZoom(map.zoom);
    });
  };

  return (
    <>
      <div className="absolute top-10 left-1/2 w-300 z-10 transform translate-x-50%">
        <PlacesAutocomplete
          dispatch={dispatch}
          setCenter={props.setCenter}
          setZoom={props.setZoom}
        />
      </div>
      <GoogleMap
        zoom={props.zoom}
        center={props.center}
        mapContainerClassName="w-screen h-screen"
        mapTypeId="terrain"
        disableDefaultUI={true}
        onLoad={onLoad}
      >
        {reports &&
          reports.map((report) => (
            <Area report={report} zoom={props.zoom} key={report._id} />
          ))}
      </GoogleMap>
    </>
  );
}

export default Map;
