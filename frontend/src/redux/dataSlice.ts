import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
  prices: any[];
  status: string;
}

const initialState: DataState = {
  prices: [],
  status: 'idle',
};

export const fetchPrices = createAsyncThunk(
  'data/fetchPrices',
  async (symbol: string) => {
    const response = await axios.get(`http://localhost:5000/api/data/${symbol}`);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPrices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.prices = action.payload;
      })
      .addCase(fetchPrices.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default dataSlice.reducer;
