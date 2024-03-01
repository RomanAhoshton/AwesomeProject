import {Hero} from '../types';
import {
  addToFavorite,
  removeFromFavorite,
  clearAll,
} from '../redux/slices/favoriteSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useState} from 'react';

export const useFavorite = () => {
  const dispatch = useDispatch();
  const male = useSelector((state: RootState) => state.favorite.male);
  const female = useSelector((state: RootState) => state.favorite.female);
  const other = useSelector((state: RootState) => state.favorite.other);

  const [isFavorites, setIsFavorites] = useState(false);

  const addHeroToFavorite = (hero: Hero) => {
    setIsFavorites(!isFavorites);

    dispatch(addToFavorite(hero));
  };
  const removeHeroFromFavorite = (hero: Hero) => {
    setIsFavorites(!isFavorites);
    dispatch(removeFromFavorite(hero));
  };

  const cleanAll = () => {
    dispatch(clearAll());
    setIsFavorites(false);
  };

  return {
    male,
    female,
    other,
    addHeroToFavorite,
    removeHeroFromFavorite,
    cleanAll,
    isFavorites,
  };
};
