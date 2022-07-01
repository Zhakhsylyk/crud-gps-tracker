import React, { useRef, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { v4 as uuidv4 } from "uuid";
import { TrainMarker } from "./TrainMarker";
import styles from './../../assets/styles/MapForm.module.scss';

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const MapForm = ({ center, passLatitude, passLongitude }) => {
  const mapRef = useRef(undefined);
  const [marker, setMarker] = useState([]);
  const [clicked, setClicked] = useState(false);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  if (clicked) {
    passLatitude(marker[0].lat);
    passLongitude(marker[0].lng);
  }

  return (
    <div className={styles['form-map']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(event) => {
          if (!clicked) {
            setClicked(true);
            setMarker((current) => [
              ...current,
              {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
              },
            ]);
          }
        }}
      >
        {marker.map((marker) => (
          <TrainMarker
            key={uuidv4()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};
