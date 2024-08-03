// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice'; // Adjust the import according to your file structure

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
