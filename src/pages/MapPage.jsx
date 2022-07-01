import React from "react";
import { Map } from "../components/map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { Backdrop, CircularProgress} from "@mui/material";
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
  const isLoading = (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );

  // const navigate = useNavigate();
  return <div>{isLoaded ? <Map center={defaultCenter} /> : isLoading}</div>;
};
