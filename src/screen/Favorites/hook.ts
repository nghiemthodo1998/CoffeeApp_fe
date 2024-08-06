import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {toggleFavorite} from '../../store/productSlice';

export interface FavoritesScreenProps {}

const useFavoritesScreen = (props: FavoritesScreenProps) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(
    (state: RootState) => state.products.products,
  ).filter(product => product.favourite);

  const handleToggleFavorite = (productId?: string) => {
    if (!productId) return;
    dispatch(toggleFavorite({productId}));
  };
  return {
    ...props,
    favoriteList,
    handleToggleFavorite,
  };
};

export default useFavoritesScreen;
