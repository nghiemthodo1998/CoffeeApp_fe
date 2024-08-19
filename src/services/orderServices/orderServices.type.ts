import {ProductType} from '../../data/type';

export type OrderType = {
  id?: string;
  created_at: Date;
  listOrder: ProductType[];
  totalPrice: number;
};

export type OrderResponse = {
  id?: string;
  created_at: Date;
  list_order: string;
  total_price: number;
};
