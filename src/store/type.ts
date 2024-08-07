import {ProductType} from '../data/type';

type CartState = {
  cart: ProductType[];
  totalPrice: number;
};

type ProductState = {
  products: ProductType[];
};

type OrderDetailType = {
  created_at: string;
  totalPrice: number;
  listOrder: ProductType[];
};

type OrderState = {
  orderHistory: OrderDetailType[];
};

export type {CartState, ProductState, OrderDetailType, OrderState};
