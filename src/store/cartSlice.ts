import {PriceProductType} from './../data/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from './type';
import {ProductType} from '../data/type';

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (!action.payload) return;

      const newProduct = action.payload;
      const listProductMap = new Map<string, ProductType>();

      state.cart.forEach(product => listProductMap.set(product.id, product));

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
          state.cart = [...listProductMap.values()];
        } else {
          // size not exsist in product
          let listNewSize = listSizeMap.set(newProductPrice.size, {
            ...newProduct.prices[0],
          });
          listProductMap.set(newProduct.id, {
            ...exsistProduct,
            prices: [...listNewSize.values()],
          });
          state.cart = [...listProductMap.values()];
        }
      } else {
        state.cart = [...state.cart, newProduct];
      }
    },
    increaseProduct: (
      state,
      action: PayloadAction<{id: string; size: string}>,
    ) => {
      const payload = action.payload;
      const listProductMap = new Map<string, ProductType>();

      state.cart.forEach(product => listProductMap.set(product.id, product));

      if (listProductMap.has(payload.id)) {
        let currentProduct = listProductMap.get(payload.id)!;
        let listSizeCurrentMap = new Map<string, PriceProductType>();

        currentProduct.prices.forEach(price =>
          listSizeCurrentMap.set(price.size, price),
        );

        if (listSizeCurrentMap.has(payload.size)) {
          let currentSize = listSizeCurrentMap.get(payload.size)!;
          listSizeCurrentMap.set(payload.size, {
            ...currentSize,
            quantity: (currentSize.quantity || 0) + 1,
          });
          listProductMap.set(payload.id, {
            ...currentProduct,
            prices: [...listSizeCurrentMap.values()],
          });
          state.cart = [...listProductMap.values()];
        }
      }
    },
    decreaseProduct: (
      state,
      action: PayloadAction<{id: string; size: string}>,
    ) => {
      const payload = action.payload;
      const listProductMap = new Map<string, ProductType>();

      state.cart.forEach(product => listProductMap.set(product.id, product));

      if (listProductMap.has(payload.id)) {
        let currentProduct = listProductMap.get(payload.id)!;
        let listSizeCurrentMap = new Map<string, PriceProductType>();

        currentProduct.prices.forEach(price =>
          listSizeCurrentMap.set(price.size, price),
        );

        if (listSizeCurrentMap.has(payload.size)) {
          let currentSize = listSizeCurrentMap.get(payload.size)!;
          listSizeCurrentMap.set(payload.size, {
            ...currentSize,
            quantity: (currentSize.quantity || 0) - 1,
          });
          listProductMap.set(payload.id, {
            ...currentProduct,
            prices: [...listSizeCurrentMap.values()],
          });
          state.cart = [...listProductMap.values()];
        }
      }
    },
    removeSizeProduct: (
      state,
      action: PayloadAction<{id: string; size: string}>,
    ) => {
      const payload = action.payload;
      const listProductMap = new Map<string, ProductType>();

      state.cart.forEach(product => listProductMap.set(product.id, product));

      if (listProductMap.has(payload.id)) {
        let currentProduct = listProductMap.get(payload.id)!;

        if (currentProduct && currentProduct.prices.length === 1) {
          listProductMap.delete(payload.id);
          state.cart = [...listProductMap.values()];
          return;
        }
        let listSizeCurrentMap = new Map<string, PriceProductType>();

        currentProduct.prices.forEach(price =>
          listSizeCurrentMap.set(price.size, price),
        );

        if (listSizeCurrentMap.has(payload.size)) {
          listSizeCurrentMap.delete(payload.size);

          listProductMap.set(payload.id, {
            ...currentProduct,
            prices: [...listSizeCurrentMap.values()],
          });

          state.cart = [...listProductMap.values()];
        }
      }
    },
  },
});

export const {addToCart, increaseProduct, decreaseProduct, removeSizeProduct} =
  cartSlice.actions;

export default cartSlice.reducer;
