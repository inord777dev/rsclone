export enum Payment {
  Сash,
  Card,
}

export enum OrderStatus {
  Created,
  Processed,
  Delivery,
  Completed,
}

export interface IPizza {
  id: string;
  key: string;
  name: string;
  components: string;
  image: string;
  price: string;
  weith: string;
  isHit: boolean;
}

export interface IProduct extends IPizza {
  count: number;
  size: string
  type: string
  price: string
  hasHotDogBoard: boolean,
  hasMazarella: boolean,
}

export interface ICurrentUser {
  id: string;
  name : string;
  email: string;
}

export interface IOrder {
  id: string;
  orderId: string;
  products: IProduct[];
  date: string;
  price: number;
  userSettings: UserSettings;
  payment: Payment;
  status: OrderStatus;
}

export interface UserSettings {
  [key: string]: string;
  userId: string;
  name: string;
  tel: string;
  bonusCount: string;
  city: string;
  street: string;
  home: string;
  flat: string;
  stage: string;
  gate: string;
  code: string;
}

export type GlobalState = {
  currentUser: ICurrentUser
  order: IOrder
};

export type GlobalAction = {
  type: string
  payload: IProduct | string | ICurrentUser | null | PizzaParams
};

export type DispatchType = (args: GlobalAction) => GlobalAction;

export type OutletContext = { pizzas: IPizza[], currentUser: ICurrentUser };

export type PizzaParams = {
  pizza: IPizza
  size: string
  type: string
  price: string
  hasHotDogBoard: boolean,
  hasMazarella: boolean,
};
