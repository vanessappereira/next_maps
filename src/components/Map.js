import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

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
  const [selected, setSelected] = useState([]);

  return (
    <>
      <div className="absolute top-10 left-1/2 w-300 z-10 transform translate-x-50%">
        <PlacesAutocomplete setSelected={setSelected} selected={selected} />
      </div>
      <GoogleMap
        zoom={props.zoom}
        center={props.center}
        mapContainerClassName="w-screen h-screen"
      >
        {selected.map((selection, index) => (
          <Marker position={selection} key={index} />
        ))}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected, selected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected([...selected, { lat, lng }]);
    console.log(selected);
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="w-100 p-1"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Map;
