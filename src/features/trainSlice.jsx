import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
      state.map(state => console.log(state.id))
      state.splice(index, 1);
    },
  },
});

export const { addTrain, deleteTrain, editTrain } = trainSlice.actions;

export default trainSlice.reducer;
