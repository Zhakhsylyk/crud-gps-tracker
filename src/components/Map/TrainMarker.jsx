import { Marker } from "@react-google-maps/api";
import React from "react";

export const TrainMarker = ({ position, keyValue }) => {
  return <Marker position={position} key={keyValue} />;
};
