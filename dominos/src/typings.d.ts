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

type OrderState = {
  pizzas: IPizza[];
  ingredients: string[];
  price: number;
};

type OrderAction = {
  type: string
  payload: IPizza | string
};

type DispatchType = (args: OrderAction) => OrderAction;
