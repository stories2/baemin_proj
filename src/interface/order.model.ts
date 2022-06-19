export interface OrderMenuModel {
  name: string;
  description: string;
  cost: number;
  count: number;
  url: string;

  options: OrderMenuOptionModel[];
}

export interface OrderMenuOptionModel {
  name: string;
  cost: number;
  count: number;
}

export type FoodMenu = {
  name: string;
  cost: number;
  url: string;
};

export type FoodStore = {
  idx: string;
  storeName: string;
  score: number;
  deliveryMin: number;
  deliveryMax: number;
  imgUrl: string;
  menuList: FoodMenu[];
  crtfc_upso_mgt_sno: string;
};
