import * as actionTypes from './action';

const initialState: GlobalState = {
  currentUser: {
    id: '',
    name: '',
    email: '',
  },
  order: {
    products: [],
    ingredients: [],
    price: 0,
    userSettings: {
      userId: '',
      name: '',
      tel: '',
      bonusCount: '',
      city: '',
      street: '',
      home: '',
      flat: '',
      stage: '',
      gate: '',
      code: '',
    },
  },
};

const stateUpdated = <T>(payload: T,
  collection : T[],
  predicateHas: (item: T) => boolean,
  predicatHasNot: (item: T) => boolean) => (collection.some(predicateHas)
    ? collection.filter(predicatHasNot)
    : collection.concat(payload));

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: GlobalState = initialState,
  action: GlobalAction,
): GlobalState => {
  if (action.type === actionTypes.INIT_USER) {
    const payload = action.payload as ICurrentUser;
    return {
      ...state,
      currentUser: payload,
    };
  }
  if (action.type === actionTypes.ADD_PRODUCT) {
    const product = action.payload as IProduct;
    product.count = 1;
    const predicateHas = (item : IProduct) => item.id === product.id;
    const predicatHasNot = (item: IProduct) => item.id !== product.id;
    return {
      ...state,
      order: {
        ...state.order,
        products: stateUpdated(product, state.order.products, predicateHas, predicatHasNot),
      },
    };
  }
  if (action.type === actionTypes.ADD_INGREDIENT) {
    const payload = action.payload as string;
    const predicateHas = (item : string) => item === payload;
    const predicatHasNot = (item: string) => item !== payload;
    return {
      ...state,
      order: {
        ...state.order,
        ingredients: stateUpdated(payload, state.order.ingredients, predicateHas, predicatHasNot),
      },
    };
  }
  return state;
};

export default reducer;
