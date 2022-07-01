import { Button, Box, Typography, Stack, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Modal } from "../UI/Modal";
import AddIcon from "@mui/icons-material/Add";
import { MapForm } from "../map/MapForm";
import { useJsApiLoader } from "@react-google-maps/api";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTrain } from "../../features/trainSlice";
import styles from './../../assets/styles/Form.module.scss';

const API_KEY = process.env.REACT_APP_API_KEY;
const isEmpty = (value) => value.trim() === "";

export const Form = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formInputsValid, setFormInputsValid] = useState({
    name: true,
    number: true,
    sectionNumber: true,
    latitude: true,
    longitude:true,
  });
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const sectionNumberInputRef = useRef();
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('');

  

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;
    const sectionNumber = sectionNumberInputRef.current.value;
    let id = v4().slice(0,5);

    const nameIsValid = !isEmpty(name);
    const numberIsValid = !isEmpty(number);
    const sectionNumberIsValid = !isEmpty(sectionNumber);
    const latitudeIsValid = !isEmpty(latitude);
    const longitudeIsValid = !isEmpty(latitude);

    setFormInputsValid({
      name: nameIsValid,
      number: numberIsValid,
      sectionNumber: sectionNumberIsValid,
      latitude: latitudeIsValid,
      longitude:longitudeIsValid,

    });

    const formIsValid = nameIsValid && numberIsValid && sectionNumberIsValid && latitudeIsValid && longitudeIsValid;

    if (!formIsValid) {
      return;
    }
    
 

    
    dispatch(addTrain({
      id: id,
      name: name,
      number: number,
      sectionNumber:sectionNumber,
      latitude:latitude,
      longitude:longitude
    }));
    console.log(id, name, number, sectionNumber, latitude, longitude);

    onClose();
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const defaultCenter = {
    lat: 51.169392,
    lng: 71.449074,
  };

  return (
    <Modal onClose={onClose}>
      <Box className={styles['modal']}>
        <Box>
          {isLoaded ? <MapForm passLatitude={setLatitude} passLongitude={setLongitude} center={defaultCenter} /> : <p>Loading...</p>}
        </Box>
        <Box className={styles['form-container']}>
          <Typography variant="h6">Новая запись</Typography>
          <form>
            <Stack spacing={2} className={styles.input}>
              <TextField
                required
                error={formInputsValid.name ? false : true}
                id={
                  formInputsValid.name
                    ? "outlined-required"
                    : "standard-error-helper-text"
                }
                placeholder="Наименование"
                helperText={
                  formInputsValid.name ? false : "Заполните поле Наименование."
                }
                inputRef={nameInputRef}
              />
              <TextField
                required
                error={formInputsValid.number ? false : true}
                id={
                  formInputsValid.number
                    ? "outlined-required"
                    : "standard-error-helper-text"
                }
                placeholder="Серия"
                helperText={
                  formInputsValid.number ? false : "Заполните поле Серия."
                }
                inputRef={numberInputRef}
              />
              <TextField
                required
                error={formInputsValid.sectionNumber ? false : true}
                id={
                  formInputsValid.sectionNumber
                    ? "outlined-required"
                    : "standard-error-helper-text"
                }
                placeholder="Количество секции"
                helperText={
                  formInputsValid.sectionNumber
                    ? false
                    : "Заполните поле Количество секции."
                }
                inputRef={sectionNumberInputRef}
              />
              {!formInputsValid.latitude && !formInputsValid.longitude && <p className={styles['location-alert']}>Выберите местоположение!</p>}
            </Stack>
            <Box className={styles.button}>
              <Button
                onClick={confirmHandler}
                type="submit"
                variant="contained"
                color="success"
                endIcon={<AddIcon />}
              >
                Создать
              </Button>
              <Button
                sx={{
                  color: "red",
                  borderColor: "red",
                  marginLeft: 1,
                  "&:hover": { borderColor: "red" },
                }}
                variant="outlined"
                onClick={onClose}
              >
                Закрыть
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
