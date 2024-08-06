import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export interface TotalCartProps {}

const useTotalCart = (props: TotalCartProps) => {
  const {totalPrice} = useSelector((state: RootState) => state.cart);

  return {
    ...props,
    totalPrice,
  };
};

export default useTotalCart;
