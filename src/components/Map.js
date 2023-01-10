import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 39,
      lng: -9,
    },
    zoom: 9,
  };

  return (
    <div className="w-screen h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
