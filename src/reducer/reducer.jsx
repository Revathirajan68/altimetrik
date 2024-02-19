import { createSlice } from '@reduxjs/toolkit';

const reducerData = createSlice({
  name: 'carDetail',
  initialState: {
    carReducerData: [],
  },
  reducers: {
    updateCarData: (state, action) => {
        state.carReducerData = action.payload;
      },
  },
});


export const { updateCarData } = reducerData.actions;

export default reducerData.reducer;