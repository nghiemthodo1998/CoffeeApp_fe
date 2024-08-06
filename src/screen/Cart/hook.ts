import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export interface CartScreenProps {}

const useCartScreen = (props: CartScreenProps) => {
  const cartList = useSelector((state: RootState) => state.cart.cart);

  return {
    ...props,
    cartList,
  };
};

export default useCartScreen;
