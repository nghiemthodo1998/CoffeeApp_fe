import axiosInstance from '../../lib/configureAxios';
import {OrderResponse, OrderType} from './orderServices.type';

export class OrderServices {
  async createOrder(body: OrderType): Promise<any> {
    const {created_at, listOrder, totalPrice} = body;
    return (
      await axiosInstance.post('/orders', {
        totalPrice,
        listOrder,
        created_at,
      })
    ).data;
  }

  async getOrderList(): Promise<OrderResponse[]> {
    return (await axiosInstance.get('/orders')).data;
  }
}
