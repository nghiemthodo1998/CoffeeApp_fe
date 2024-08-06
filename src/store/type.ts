import {ProductType} from '../data/type';

type CartState = {
  cart: ProductType[];
  totalPrice: number;
};

type ProductState = {
  products: ProductType[];
};

export type {CartState, ProductState};
