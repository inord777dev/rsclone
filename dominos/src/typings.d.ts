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
  id: string;
  key: string;
  name: string;
  ingredients: string;
  image: string;
  price: string;
  weith: string;
  isHit: boolean;
}

interface IProduct extends IPizza {
  count: number = 0;
}

interface ICurrentUser {
  id: string = ''
  name : string = ''
  email: string = ''
}

interface IOrder {
  products: IProduct[] = []
  ingredients: string[] = []
  userSettings: UserSettings
  price: number = 0
}

interface UserSettings {
  [key: string]: string;
  userId: string = ''
  name: string = ''
  tel: string = ''
  bonusCount: string = ''
  city: string = ''
  street: string = ''
  home: string = ''
  flat: string = ''
  stage: string = ''
  gate: string = ''
  code: string = ''
}

type GlobalState = {
  currentUser: ICurrentUser
  order: IOrder
};

type GlobalAction = {
  type: string
  payload: IProduct | string | user | null
};

type DispatchType = (args: GlobalAction) => GlobalAction;

type OutletContext = { pizzas: IPizza[], currentUser: ICurrentUser };
