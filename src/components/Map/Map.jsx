import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, InfoWindow} from "@react-google-maps/api";
import { TrainMarker } from "./TrainMarker";
import { useSelector } from "react-redux";
import styles from "../../assets/styles/Map.module.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const Map = ({ center }) => {
  const trains = useSelector((store) => store.train.train);
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const mapRef = useRef(undefined);

  const float = "51.2434343434";
  console.log(+float);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={styles.map}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {isVisible &&
          trains.map((train) => (
            <TrainMarker
              key={train.id}
              position={{
                lat: +train.latitude,
                lng: +train.longitude,
              }}
              onSelected={() => {
                setSelected(train);
              }}
            />
          ))}
        {selected ? (
          <InfoWindow
            position={{ lat: +selected.latitude, lng: +selected.longitude }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Наименование :{selected.name}</h2>
              <p>Номер: {selected.number}</p>
              <p>Количество секции: {selected.sectionNumber}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};
