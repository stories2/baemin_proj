import { configureStore, createSlice } from "@reduxjs/toolkit";
import { OrderMenuModel } from "./interface/order.model";
import { recommendStoreList, storeList } from "./db";

// https://velog.io/@gsh723/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-Redux-Toolkit-%EC%9D%B4%EB%9E%80
// action + reduce = slice

// const IMP = (window as any).IMP;
// console.log("test", IMP);
// IMP.init("imp92079596");

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [] as OrderMenuModel[],
    IMP: (window as any).IMP,
    recommendStoreList: recommendStoreList,
    storeList: storeList,
    focusedStore: {},
  },
  reducers: {
    initPayment: (state: { IMP: any }, action: any) => {
      state.IMP.init("imp92079596");
    },
    requestPayment: (state: any, action: { payload: { cost: number } }) => {
      console.log("req pay", state.IMP);
      state.IMP.request_pay(
        {
          // param
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: "ORD20180131-0000014",
          name: "노르웨이 회전 의자",
          amount: action.payload.cost,
          buyer_email: "gildong@gmail.com",
          buyer_name: "홍길동",
          buyer_tel: "010-4242-4242",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181",
        },
        (rsp: any) => {
          // callback
          if (rsp.success) {
            console.log("ok", rsp);
          } else {
            console.log("fail", rsp);
          }
        }
      );
    },
    selectStoreInfo: (
      state: {
        focusedStore: any;
        recommendStoreList: any[];
        storeList: any[];
      },
      action: { payload: { idx: any } }
    ) => {
      // https://stackoverflow.com/a/68921009
      console.log(
        "state",
        state.recommendStoreList,
        JSON.parse(JSON.stringify(state.recommendStoreList))
      );
      const test =
        state.recommendStoreList.find(
          (store) => store.idx === action.payload.idx
        ) || state.storeList.find((store) => store.idx === action.payload.idx);
      console.log("test", JSON.parse(JSON.stringify(test)), action.payload.idx);
      // console.log(
      //   "asdf",
      //   state.recommendStoreList.find(
      //     (store) => store.idx === action.payload.idx
      //   )
      // );
      // console.log(
      //   "asdf",
      //   state.storeList.find((store) => store.idx === action.payload.idx)
      // );
      state.focusedStore = { ...test };
      return state.focusedStore;
    },
    addMenu: (state: { orderList: any[] }, action: { payload: any }) => {
      console.log("addMenu", action);
      state.orderList.push(action.payload);
      console.log("order", state.orderList, state.orderList.length);
    },
    modifyMenu: (
      state: { orderList: { [x: string]: any } },
      action: { payload: { idx: string | number; data: any } }
    ) => {
      state.orderList[action.payload.idx] = action.payload.data;
    },
    removeMenu: (state: { orderList: any[] }, action: { payload: any }) => {
      state.orderList.splice(action.payload, 1);
    },
  },
});

export const {
  initPayment,
  requestPayment,
  addMenu,
  modifyMenu,
  removeMenu,
  selectStoreInfo,
} = orderSlice.actions;

export const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
