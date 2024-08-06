import {useDispatch} from 'react-redux';
import {ProductType} from '../../../data/type';
import {AppDispatch} from '../../../store';
import {
  decreaseProduct,
  increaseProduct,
  removeSizeProduct,
} from '../../../store/cartSlice';

export interface ItemMoreSizeProps {
  data: ProductType;
}

const useItemMoreSize = (props: ItemMoreSizeProps) => {
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
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleRemoveSizeProduct,
  };
};

export default useItemMoreSize;
