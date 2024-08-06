import {ProductType} from '../data/type';

type CartState = {
  cart: ProductType[];
};

type ProductState = {
  products: ProductType[];
};

export type {CartState, ProductState};
