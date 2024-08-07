import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderDetailType, OrderState} from './type';

const initialState: OrderState = {
  orderHistory: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    paymentOrder: (state, action: PayloadAction<OrderDetailType>) => {
      state.orderHistory = [action.payload, ...state.orderHistory];
    },
  },
});

export const {paymentOrder} = orderSlice.actions;

export default orderSlice.reducer;
