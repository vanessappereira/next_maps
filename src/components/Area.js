import { Circle } from "@react-google-maps/api";

import React from "react";

const Area = ({ report, zoom }) => {
  return (
    <>
      {zoom > 10 && (
        <Circle
          center={{ lat: report.lat, lng: report.lng }}
          radius={1500}
          options={closeOptions}
        />
      )}
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
  fillOpacity: 0.5,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};

export default Area;
