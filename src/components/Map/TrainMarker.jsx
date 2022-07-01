import { Marker } from "@react-google-maps/api";
import React from "react";

export const TrainMarker = ({ position, keyValue ,onSelected}) => {
  return <Marker position={position} key={keyValue} onClick={onSelected} />;
};
