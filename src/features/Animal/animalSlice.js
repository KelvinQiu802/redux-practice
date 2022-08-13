import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {},
  status: 'dile',
};

export const fetchData = createAsyncThunk('animal/fetch', async () => {
  const result = await axios.get(
    'https://zoo-animal-api.herokuapp.com/animals/rand'
  );
  return result.data;
});

const animalSlice = createSlice({
  name: 'animal',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'fulfilled';
    });
  },
});

export default animalSlice.reducer;
export const { setData } = animalSlice.actions;
