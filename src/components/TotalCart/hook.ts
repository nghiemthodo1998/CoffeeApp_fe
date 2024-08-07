import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {paymentOrder} from '../../store/orderSlice';
import {clearCart} from '../../store/cartSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../common/type';

export interface TotalCartProps {}

const useTotalCart = (props: TotalCartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const {totalPrice, cart} = useSelector((state: RootState) => state.cart);

  const handlePayment = () => {
    dispatch(
      paymentOrder({
        created_at: new Date().toISOString(),
        listOrder: cart,
        totalPrice: totalPrice,
      }),
    );
    dispatch(clearCart());
    navigate('OrderHistory');
  };

  return {
    ...props,
    totalPrice,
    handlePayment,
  };
};

export default useTotalCart;
