import {useDispatch} from 'react-redux';
import {ProductType} from '../../data/type';
import {increaseProduct} from '../../store/cartSlice';

export interface CartItemProps {
  item: ProductType;
}

const useCartItem = (props: CartItemProps) => {
  return {
    ...props,
  };
};

export default useCartItem;
