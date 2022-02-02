declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

interface IPizza {
  id: string
  key: string
  name: string
  ingredients: string
  image: string
  price: string
  weith: string
  isHit: boolean
}

interface ICurrentUser {
  id: string
  name : string
  email: string
}

interface IOrder {
  id: number;
  pizzaId: number;
  ingredients: string[];
  price: number;
}

type OrderState = {
  orders: IOrder[];
};

type OrderAction = {
  type: string
  order: IOrder
};

type DispatchType = (args: OrderAction) => OrderAction;
