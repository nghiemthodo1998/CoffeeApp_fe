import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductState} from './type';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import {ProductType} from '../data/type';

const initialState: ProductState = {
  products: CoffeeData.concat(BeansData),
};

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<{productId: string}>) => {
      if (!action.payload.productId) return;
      const productId = action.payload.productId;
      const listFavoriteMap = new Map<string, ProductType>();

      state.products.forEach(product =>
        listFavoriteMap.set(product.id, product),
      );

      if (listFavoriteMap.has(productId)) {
        let currentProduct = listFavoriteMap.get(productId)!;
        listFavoriteMap.set(productId, {
          ...currentProduct,
          favourite: !currentProduct?.favourite,
        });
        state.products = [...listFavoriteMap.values()];
      } else {
        state.products = [...state.products];
      }
    },
  },
});

export const {toggleFavorite} = cartSlice.actions;

export default cartSlice.reducer;
