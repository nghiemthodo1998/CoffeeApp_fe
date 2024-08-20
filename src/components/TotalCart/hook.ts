import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {clearCart} from '../../store/cartSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import {orderServices} from '../../services';

export interface TotalCartProps {}

const useTotalCart = (props: TotalCartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const {totalPrice, cart} = useSelector((state: RootState) => state.cart);

  const handlePayment = async () => {
    try {
      await orderServices.createOrder({
        created_at: new Date(),
        listOrder: cart,
        totalPrice: totalPrice,
      });

      dispatch(clearCart());
      navigate('OrderHistory');
    } catch (error) {
      console.log('error', error);
    }
  };

  return {
    ...props,
    totalPrice,
    handlePayment,
  };
};

export default useTotalCart;
