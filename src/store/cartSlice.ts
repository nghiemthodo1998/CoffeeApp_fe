import {PriceProductType} from './../data/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from './type';
import {ProductType} from '../data/type';

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (!action.payload) return;

      const newProduct = action.payload;
      const listProductMap = new Map<string, ProductType>();

      state.products.forEach(product =>
        listProductMap.set(product.id, product),
      );

      if (listProductMap.has(newProduct.id)) {
        //product is exsist in cart
        let exsistProduct = listProductMap.get(newProduct.id)!;

        let listSizeMap = new Map<string, PriceProductType>();

        exsistProduct.prices.forEach(price =>
          listSizeMap.set(price.size, price),
        );

        let newProductPrice = newProduct.prices[0];

        if (listSizeMap.has(newProductPrice.size)) {
          //size is exsist in product
          let exsistSize = listSizeMap.get(newProductPrice.size)!;
          listSizeMap.set(newProductPrice.size, {
            ...exsistSize,
            quantity: (exsistSize.quantity || 0) + 1,
          });
          listProductMap.set(newProduct.id, {
            ...exsistProduct,
            prices: [...listSizeMap.values()],
          });
          state.products = [...listProductMap.values()];
        } else {
          // size not exsist in product
          let listNewSize = listSizeMap.set(newProductPrice.size, {
            ...newProduct.prices[0],
          });
          listProductMap.set(newProduct.id, {
            ...exsistProduct,
            prices: [...listNewSize.values()],
          });
          state.products = [...listProductMap.values()];
        }
      } else {
        state.products = [...state.products, newProduct];
      }
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
