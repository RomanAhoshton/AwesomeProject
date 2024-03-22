import {Hero} from '../types/index';
import {
  addToFavorite,
  removeFromFavorite,
  clearAll,
} from '../redux/slices/favoriteSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export const useFavorite = () => {
  const dispatch = useDispatch();
  const male = useSelector((state: RootState) => state.favorite.male);
  const female = useSelector((state: RootState) => state.favorite.female);
  const other = useSelector((state: RootState) => state.favorite.other);
  const isFavorite = useSelector(
    (state: RootState) => state.favorite.isFavorite,
  );

  const addHeroToFavorite = (hero: Hero) => {
    dispatch(addToFavorite(hero));
  };
  const removeHeroFromFavorite = (hero: Hero) => {
    dispatch(removeFromFavorite(hero));
  };

  const cleanAll = () => {
    dispatch(clearAll());
  };

  return {
    male,
    female,
    other,
    addHeroToFavorite,
    removeHeroFromFavorite,
    cleanAll,
    isFavorite,
  };
};
