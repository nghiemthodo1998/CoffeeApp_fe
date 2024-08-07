import {useDispatch} from 'react-redux';
import {ProductType} from '../../../data/type';
import {AppDispatch} from '../../../store';
import {
  decreaseProduct,
  increaseProduct,
  removeSizeProduct,
} from '../../../store/cartSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../../common/type';

export interface ItemOneSizeProps {
  data: ProductType;
}

const useItemOneSize = (props: ItemOneSizeProps) => {
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const dispatch = useDispatch<AppDispatch>();

  const handleIncreaseProduct = (id: string, size: string) => {
    dispatch(increaseProduct({id, size}));
  };

  const handleDecreaseProduct = (id: string, size: string) => {
    dispatch(decreaseProduct({id, size}));
  };

  const handleRemoveSizeProduct = (id: string, size: string) => {
    dispatch(removeSizeProduct({id, size}));
  };
  return {
    ...props,
    navigate,
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleRemoveSizeProduct,
  };
};

export default useItemOneSize;
