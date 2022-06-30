import { createSlice } from "@reduxjs/toolkit";

const initialState = [
//   {
//     id: 1,
//     name: "Agnese",
//     number: "Clohessy",
//     sectionNumber: "aclohessy0@51.la",
//     latitude: "Female",
//     longitude: "237.129.93.152",
//   },
//   {
//     id: 2,
//     name: "Agnese",
//     number: "Clohessy",
//     sectionNumber: "aclohessy0@51.la",
//     latitude: "Female",
//     longitude: "237.129.93.152",
//   },
//   {
//     id: 3,
//     name: "Agnese",
//     number: "Clohessy",
//     sectionNumber: "aclohessy0@51.la",
//     latitude: "Female",
//     longitude: "237.129.93.152",
//   },
];

export const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    addTrain: (state, action) => {
      state.push(action.payload);
    },
    deleteTrain: (state, action) => {
      state = state.filter((row) => row.id !== action.payload);
    },
  },
});

export const { addTrain, deleteTrain } = trainSlice.actions;

export default trainSlice.reducer;
