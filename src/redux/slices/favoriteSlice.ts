import {createSlice, PayloadAction} from '@reduxjs/toolkit'; // Імпортуйте createSlice з того ж самого місця

import {Hero} from 'types/index';

// Оголошення інтерфейсу та початкового стану
export interface HeroState {
  male: Hero[];
  female: Hero[];
  other: Hero[];
  isFavorite: Hero[];
}

const initialState: HeroState = {
  male: [],
  female: [],
  other: [],
  isFavorite: [],
};

// Створення slice
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Hero>) => {
      state.isFavorite.push(action.payload);
      if (action.payload.gender === 'female') {
        state.female.push(action.payload);
      } else if (action.payload.gender === 'male') {
        state.male.push(action.payload);
      } else {
        state.other.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<Hero>) => {
      state.isFavorite = state.isFavorite.filter(
        item => item.name !== action.payload.name,
      );
      if (action.payload.gender === 'female') {
        state.female = state.female.filter(
          item => item.name !== action.payload.name,
        );
      } else if (action.payload.gender === 'male') {
        state.male = state.male.filter(
          item => item.name !== action.payload.name,
        );
      } else {
        state.other = state.other.filter(
          item => item.name !== action.payload.name,
        );
      }
    },
    clearAll: state => {
      state.female = [];
      state.male = [];
      state.other = [];
      state.isFavorite = [];
    },
  },
});

// Експорт редуктору та дій
export const {addToFavorite, removeFromFavorite, clearAll} =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
