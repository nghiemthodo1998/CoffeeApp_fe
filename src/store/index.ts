// src/app/store.ts
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import orderReducer from './orderSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    orderHistory: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
