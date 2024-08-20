import {useCallback, useEffect, useState} from 'react';
import {orderServices} from '../../services';
import {OrderType} from '../../services/orderServices';
import {ProductType} from '../../data/type';
import {useFocusEffect} from '@react-navigation/native';

export interface OrderHistoryScreenProps {}

const useOrderHistoryScreen = (props: OrderHistoryScreenProps) => {
  const [orderList, setOrderList] = useState<{
    loading: boolean;
    data: OrderType[];
  }>({loading: true, data: []});

  const fetchOrderList = useCallback(async () => {
    try {
      setOrderList(prev => ({...prev, loading: true}));
      const response = await orderServices.getOrderList();
      const convertData = response.map(item => ({
        id: item.id,
        created_at: item.created_at,
        totalPrice: item.total_price,
        listOrder: JSON.parse(item.list_order) as ProductType[],
      }));
      setOrderList(prev => ({...prev, loading: false, data: convertData}));
    } catch (error) {
      console.log('error', error);
      setOrderList(prev => ({...prev, loading: false, data: []}));
    }
  }, []);

  useEffect(() => {
    fetchOrderList();
  }, [fetchOrderList]);

  return {
    ...props,
    orderList,
  };
};

export default useOrderHistoryScreen;
