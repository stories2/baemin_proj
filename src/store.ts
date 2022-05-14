import { configureStore, createSlice } from "@reduxjs/toolkit";
import { OrderMenuModel } from "./interface/order.model";

// https://velog.io/@gsh723/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-Redux-Toolkit-%EC%9D%B4%EB%9E%80
// action + reduce = slice

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [] as OrderMenuModel[],
  },
  reducers: {
    addMenu: (state, action) => {
      state.orderList.push(action.payload);
    },
    modifyMenu: (state, action) => {
      state.orderList[action.payload.idx] = action.payload.data;
    },
    removeMenu: (state, action) => {
      state.orderList.splice(action.payload, 1);
    },
  },
});

export const { addMenu, modifyMenu, removeMenu } = orderSlice.actions;

export const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
