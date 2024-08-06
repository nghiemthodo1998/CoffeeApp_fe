import {RouteProp, useRoute} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {ProductType} from '../../data/type';
import {toggleFavorite} from '../../store/productSlice';

type DetailScreenRouteProp = RouteProp<NavigationType, 'DetailScreen'>;

export interface DetailScreenProps {}

const useDetailScreen = (props: DetailScreenProps) => {
  const route = useRoute<DetailScreenRouteProp>();
  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector(
    (state: RootState) => state.products.products,
  );
  const {detailId} = route.params;

  const dataDetail = productList.find(item => item.id === detailId);

  const handleToggleFavorite = (productId?: string) => {
    if (!productId) return;
    dispatch(toggleFavorite({productId}));
  };
  return {
    ...props,
    data: dataDetail,
    handleToggleFavorite,
  };
};

export default useDetailScreen;
