import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Agnese",
    number: "Clohessy",
    sectionNumber: "aclohessy0@51.la",
    latitude: "Female",
    longitude: "237.129.93.152",
  },
  {
    id: 2,
    name: "Agnese",
    number: "Clohessy",
    sectionNumber: "aclohessy0@51.la",
    latitude: "Female",
    longitude: "237.129.93.152",
  },
  {
    id: 3,
    name: "Agnese",
    number: "Clohessy",
    sectionNumber: "aclohessy0@51.la",
    latitude: "Female",
    longitude: "237.129.93.152",
  },
];

export const trainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    addTrain: (state, action) => {
      state.push(action.payload);
    },
    editTrain: (state,action) => {
      const {id, name, number, sectionNumber } = action.payload;
      const existingTrain = state.find(state => state.id === id);
      if(existingTrain){
        existingTrain.name = name;
        existingTrain.number = number;
        existingTrain.sectionNumber = sectionNumber;
      }
    },
    deleteTrain: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((state) => state.id !== id);
      state.splice(index, 1);
    },
  },
});

export const { addTrain, deleteTrain, editTrain } = trainSlice.actions;

export default trainSlice.reducer;
