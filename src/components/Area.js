import { Marker, Circle } from "@react-google-maps/api";

import React from "react";

const Area = ({ report }) => {
  return (
    <>
      <Marker
        position={{ lat: report.lat, lng: report.lng }}
        clickable={true}
        onClick={() => console.log("hey")}
      />
      <Circle
        position={{ lat: report.lat, lng: report.lng }}
        radius={15000}
        options={closeOptions}
      />
    </>
  );
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};

export default Area;
