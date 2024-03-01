import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Hero} from '../../types';

export interface HeroState {
  male: Hero[];
  female: Hero[];
  other: Hero[];
  isFavorite: boolean;
}

const initialState: HeroState = {
  male: [],
  female: [],
  other: [],
  isFavorite: true,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Hero>) => {
      if (action.payload.gender === 'female') {
        state.female.push(action.payload);
      } else if (action.payload.gender === 'male') {
        state.male.push(action.payload);
      } else {
        state.other.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<Hero>) => {
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
      state.isFavorite = false;
    },
  },
});

export const {addToFavorite, removeFromFavorite, clearAll} =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
