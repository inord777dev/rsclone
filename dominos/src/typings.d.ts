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
  pizzas: IPizza[]
  ingredients: string[]
  price: number
}

type GlobalState = {
  currentUser: ICurrentUser;
  order: IOrder;
};

type GlobalAction = {
  type: string
  payload: IPizza | string | user | null
};

type DispatchType = (args: GlobalAction) => GlobalAction;

type UserSettings = {
  [key: string]: string,
  userId: string
  name: string
  tel: string
  bonusCount: string
  city: string
  street: string
  home: string
  flat: string
  stage: string
  gate: string
  code: string
};

type OutletContext = { pizzas: IPizza[], currentUser: ICurrentUser };
