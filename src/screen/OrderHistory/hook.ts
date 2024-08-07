import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export interface OrderHistoryScreenProps {}

const useOrderHistoryScreen = (props: OrderHistoryScreenProps) => {
  const {orderHistory} = useSelector((state: RootState) => state.orderHistory);
  return {
    ...props,
    orderHistory,
  };
};

export default useOrderHistoryScreen;
