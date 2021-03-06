import { TextField, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTrain } from "../../features/trainSlice";
import styles from "../../assets/styles/EditTrain.module.scss";

export const EditTrain = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const trains = useSelector((store) => store.train.train);
  const navigate = useNavigate();
  const existingTrain = trains.filter((train) => train.id === params.id);
  const { name, number, sectionNumber } = existingTrain[0];
  const [values, setValues] = useState({
    name: name,
    number: number,
    sectionNumber: sectionNumber,
  });
  const editHandler = () => {
    dispatch(
      editTrain({
        id: params.id,
        name: values.name,
        number: values.number,
        sectionNumber: values.sectionNumber,
      })
    );
    navigate("/");
  };
  return (
    <Box className={styles.form}>
      <Typography variant="h6">Редактировать</Typography>
      <Box className={styles["form-input__container"]}>
        <TextField
          sx={{ input: { color: "white" }, label: { color: "#a9acb0" } }}
          color="primary"
          className={styles.input}
          label="Наименование"
          id="outlined-size-small"
          defaultValue={values.name}
          size="small"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          type="text"
        />
        <TextField
          sx={{ input: { color: "white" }, label: { color: "#a9acb0" } }}
          color="primary"
          className={styles.input}
          label="Серия"
          id="outlined-size-small"
          defaultValue={values.number}
          onChange={(e) => setValues({ ...values, number: e.target.value })}
          size="small"
        />
        <TextField
          sx={{ input: { color: "white" }, label: { color: "#a9acb0" } }}
          color="primary"
          className={styles.input}
          label="Количество секции"
          id="outlined-size-small"
          defaultValue={values.sectionNumber}
          onChange={(e) =>
            setValues({ ...values, sectionNumber: e.target.value })
          }
          size="small"
        />
      </Box>
      <Box className={styles.button}>
        <Button
          variant="contained"
          endIcon={<ModeEditIcon />}
          onClick={editHandler}
        >
          Изменить
        </Button>
      </Box>
    </Box>
  );
};
