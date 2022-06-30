import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { TrainList } from "../Main/TrainList";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "../Main/Form";
import MapIcon from '@mui/icons-material/Map';
import {useNavigate} from 'react-router-dom'


export const MainPage = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const navigate = useNavigate();

  const showFormHandler = () => {
    setFormIsVisible(true);
  };
  const HideFormHandler = () => {
    setFormIsVisible(false);
  };
  return (
    <Fragment>
      {formIsVisible && <Form onClose={HideFormHandler} />}
      <Box className="flex gap-5 justify-end mt-5 mr-10">
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={showFormHandler}
        >
          Добавить
        </Button>
        <Button
          variant="contained"
          endIcon={<MapIcon />}
          onClick={() => navigate('/map')}
        >
          Карта
        </Button>
      </Box>
      <Box className="bg-containerColor text-white drop-shadow-2xl shadow-2xl shadow-slate-900 flex pt-5 justify-center mx-10 rounded-2xl my-7 h-box">
        <TrainList />
      </Box>
      {/* <button onClick={() => {navigate('/map')}}>Go to Map Page</button> */}
    </Fragment>
  );
};
