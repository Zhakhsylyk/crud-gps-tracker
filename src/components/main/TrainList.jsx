import React, { Fragment } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Tooltip
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TrainIcon from "@mui/icons-material/Train";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrain } from "../../features/trainSlice";
import { Link } from "react-router-dom";
import styles from './../../assets/styles/TrainList.module.scss';


export const TrainList = () => {
  const dispatch = useDispatch();
  const trains = useSelector((store) => store.train.train);
  console.log(trains);

  const deleteHandler = (id) => {
    dispatch(deleteTrain(id));
  };

  const renderList = () => <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff" }} align="center">
              id{" "}
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              <TrainIcon className={styles['train-icon']} />
              Наименование{" "}
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              Серия
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              <EventSeatIcon className={styles['train-icon']} /> Количество секции
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              <MyLocationIcon className={styles['train-icon']} />
              Координаты
            </TableCell>
            <TableCell sx={{ color: "#fff" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trains.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child th,&:last-child td": { border: 0 } }}
            >
              <TableCell sx={{ color: "#fff" }} align="center">
                {row.id}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                {row.number}
              </TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                {row.sectionNumber}
              </TableCell>
              <TableCell
                sx={{ color: "#fff" }}
                align="center"
              >{`${row.latitude} , ${row.longitude}`}</TableCell>
              <TableCell>
                <Box className={styles['button-container']}>
                  <Tooltip
                    title="Редактировать"
                    enterDelay={500}
                    leaveDelay={200}
                  >
                  <Link to={`edit-train/${row.id}`}>
                    <EditIcon className={styles['edit-icon']} />
                  </Link>
                  </Tooltip>
                  <Tooltip title="Удалить" enterDelay={500} leaveDelay={200}>
                    <DeleteIcon
                      onClick={() => deleteHandler(row.id)}
                      className={styles['delete-icon']}
                    />
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

  return (
   <Fragment>
    {trains.length ? renderList() : <p>Train data not found.</p>}
   </Fragment>
  );
};
