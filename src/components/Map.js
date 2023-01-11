import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { useReportContext } from "../hooks/useReportContext";
import { PlacesAutocomplete } from "./Places";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 39.69478,
      lng: -8.13027,
    },
    zoom: 9,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading ...</div>;
  return <ActualMap props={defaultProps} />;
};

function ActualMap({ props }) {
  const { reports, dispatch } = useReportContext();

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

  return (
    <>
      <div className="absolute top-10 left-1/2 w-300 z-10 transform translate-x-50%">
        <PlacesAutocomplete dispatch={dispatch} />
      </div>
      <GoogleMap
        zoom={props.zoom}
        center={props.center}
        mapContainerClassName="w-screen h-screen"
      >
        {reports &&
          reports.map((report) => (
            <Marker
              position={{ lat: report.lat, lng: report.lng }}
              key={report._id}
            />
          ))}
      </GoogleMap>
    </>
  );
}

export default Map;
