import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProductType} from '../../../data/type';
import {NavigationType} from '../../../common/type';
import {AppDispatch} from '../../../store';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../store/cartSlice';

export interface HomeItemProps {
  data: ProductType;
  isShowRating?: boolean;
}

const useHomeItem = (props: HomeItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const {data} = props;
  const price = data.prices[data.prices.length - 1];

  const handleNavigateDetail = () => {
    navigate('DetailScreen', {detailId: data.id});
  };

  const handleAddToCart = async () => {
    if (!data) return;
    dispatch(addToCart({...data, prices: [{...price, quantity: 1}]}));
    navigate('CartScreen');
  };

  return {
    ...props,
    price,
    handleNavigateDetail,
    handleAddToCart,
  };
};

export default useHomeItem;
