import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import { TrainList } from "../components/main/TrainList";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "../components/main/Form";
import MapIcon from '@mui/icons-material/Map';
import {useNavigate} from 'react-router-dom'
import styles from '../assets/styles/MainPage.module.scss';


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
      <Box className={styles.header}>
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
          onClick={() => navigate('/index/map')}
        >
          Карта
        </Button>
      </Box>
      <Box className={styles.container}>
        <TrainList />
      </Box>
    </Fragment>
  );
};
