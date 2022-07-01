import React, { useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { TrainMarker } from "./TrainMarker";
import { useSelector } from "react-redux";
const containerStyle = {
  width: "100%",
  height: "100%",
};

export const Map = ({ center }) => {
  const trains = useSelector((store) => store.train.train);
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="w-screen h-screen">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {trains.map((row) => (
          <TrainMarker
            key={row.id}
            position={{
              lat: +row.latitude,
              lng: +row.longitude,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
