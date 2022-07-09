import { configureStore, createSlice } from "@reduxjs/toolkit";
import { FoodMenu, FoodStore, OrderMenuModel } from "./interface/order.model";
import { recommendStoreList, storeList } from "./db";
import { AddressLatLong } from "./interface/geo.model";

// https://velog.io/@gsh723/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-Redux-Toolkit-%EC%9D%B4%EB%9E%80
// action + reduce = slice

// const IMP = (window as any).IMP;
// console.log("test", IMP);
// IMP.init("imp92079596");
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [] as OrderMenuModel[],
    IMP: (window as any).IMP,
    recommendStoreList: [] as FoodStore[],
    storeList: storeList,
    focusedStore: {} as FoodStore,
    lastEnteredStoreName: "",
    lastEnteredStoreID: 0,
    userGeoData: {} as AddressLatLong,
  },
  reducers: {
    setUserGeoData: (
      state: { userGeoData: AddressLatLong },
      action: { payload: { geoData: AddressLatLong } }
    ) => {
      state.userGeoData = action.payload.geoData;
    },
    setLastEnteredStoreName: (
      state: { lastEnteredStoreName: string; lastEnteredStoreID: number },
      action: { payload: { storeName: string; storeID: number } }
    ) => {
      state.lastEnteredStoreName = action.payload.storeName;
      state.lastEnteredStoreID = action.payload.storeID;
    },
    setFocusedStore: (
      state: { focusedStore: FoodStore },
      action: { payload: { storeData: FoodStore } }
    ) => {
      state.focusedStore = {
        ...action.payload.storeData,
      };
    },
    setStoreList: (state: any, action: { payload: { storeListData: any } }) => {
      console.log("cost", action.payload.storeListData);
      state.recommendStoreList.length = 0;
      Object.keys(action.payload.storeListData).forEach((key: string) => {
        const store = action.payload.storeListData[key];
        const deliveryMin = getRandomInt(0, 50) * 100;
        state.recommendStoreList.push({
          idx: guid(),
          crtfc_upso_mgt_sno: store.crtfc_upso_mgt_sno,
          storeName: store.upso_nm,
          score: Number(getRandomArbitrary(0, 5).toFixed(2)),
          deliveryMin: deliveryMin,
          deliveryMax: deliveryMin + getRandomInt(0, 50) * 100,
          imgUrl:
            "https://picsum.photos/200/200?_t=" + getRandomInt(0, 1000000),
          menuList: (store.food_menu || "").split(",").map((name: string) => {
            return {
              name: name || "Untitled",
              cost: getRandomInt(0, 50) * 100,
            } as FoodMenu;
          }),
          lat: store.y_dnts,
          long: store.x_cnts,
        } as FoodStore);
      });
      console.log("len", state.recommendStoreList.length);
      // state.storeList = action.payload.storeListData.map(
      //   (store: { upso_nm: string; food_menu: string }) => {
      //     return {
      //       idx: guid(),
      //       storeName: store.upso_nm,
      //       score: getRandomArbitrary(0, 5),
      //       deliveryMin: getRandomInt(0, 5000),
      //       deliveryMax: getRandomInt(0, 5000),
      //       imgUrl:
      //         "https://byline.network/wp-content/uploads/2020/01/baemin-300x300.png",
      //       menuList: (store.food_menu || "").split(","),
      //     };
      //   }
      // );
    },
    initPayment: (state: { IMP: any }, action: any) => {
      state.IMP.init("imp92079596");
    },
    requestPayment: (
      state: any,
      action: { payload: { cost: number; storeName: string } }
    ) => {
      console.log("req pay", state.IMP);
      state.IMP.request_pay(
        {
          // param
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: guid(),
          name: `[${action.payload.storeName}] 배달의 민족 주문`,
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
      state.orderList.push({ ...action.payload, guid: guid() });
      console.log("order", state.orderList, state.orderList.length);
    },
    modifyMenu: (
      state: { orderList: { [x: string]: any } },
      action: { payload: { idx: string | number; data: any } }
    ) => {
      state.orderList[action.payload.idx] = action.payload.data;
    },
    removeMenu: (state: { orderList: any[] }, action: any) => {
      console.log("del idx", action.payload.id);
      const orderItem = state.orderList.find(
        (item: any) => item.guid == action.payload.id
      );
      if (orderItem) {
        console.log(
          "exist",
          JSON.stringify(orderItem),
          state.orderList.indexOf(orderItem)
        );
        const idx = state.orderList.indexOf(orderItem);
        state.orderList.splice(idx, 1);
      }
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
  setStoreList,
  setFocusedStore,
  setLastEnteredStoreName,
  setUserGeoData,
} = orderSlice.actions;

export const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
