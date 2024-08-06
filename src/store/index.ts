// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
