import React from "react";
import { Map } from "../components/map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { Loading } from "../components/UI/Loading";
const API_KEY = process.env.REACT_APP_API_KEY;

export const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const defaultCenter = {
    lat: 51.169392,
    lng: 71.449074,
  };

  return <div>{isLoaded ? <Map center={defaultCenter} /> : <Loading />}</div>;
};
