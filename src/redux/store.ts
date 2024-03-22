import {configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './slices/favoriteSlice'; // Імпортуємо favoriteSlice

// Створення магазину
export const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer, // Використовуємо reducer з favoriteSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
