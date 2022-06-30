import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TrainIcon from "@mui/icons-material/Train";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrain } from "../features/trainSlice";

export const TrainList = () => {
  const dispatch = useDispatch();
  const trains = useSelector(store => store.train.train);
  console.log(trains);

  const deleteHandler = (id) => {
    dispatch(deleteTrain(id));
    console.log(trains);
  };
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff" }} align="center">
              id{" "}
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              <TrainIcon className="relative right-2" />
              Наименование{" "}
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              Серия
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              <EventSeatIcon className="relative right-2" /> Количество секции
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="center">
              <MyLocationIcon className="relative right-2" />
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
                <Box className="flex gap-4 justify-end">
                  <Tooltip
                    title="Редактировать"
                    enterDelay={500}
                    leaveDelay={200}
                  >
                    <EditIcon className="ml-7 text-green-400" />
                  </Tooltip>
                  <Tooltip title="Удалить" enterDelay={500} leaveDelay={200}>
                    <DeleteIcon
                      onClick={() => deleteHandler(row.id)}
                      className="text-red-600"
                    />
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};