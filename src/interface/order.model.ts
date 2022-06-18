export interface OrderMenuModel {
  name: string;
  description: string;
  cost: number;
  count: number;

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
};

export type FoodStore = {
  idx: string;
  storeName: string;
  score: number;
  deliveryMin: number;
  deliveryMax: number;
  imgUrl: string;
  menuList: FoodMenu[];
};
