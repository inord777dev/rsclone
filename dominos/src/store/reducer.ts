import {
  GlobalState, OrderStatus, Payment, GlobalAction, ICurrentUser, IProduct,
  PizzaParams,
} from '../common/types';
import * as actionTypes from './action';

const initialState: GlobalState = {
  currentUser: {
    id: '',
    name: '',
    email: '',
  },
  order: {
    id: '',
    orderId: '',
    products: [],
    date: '',
    price: 0,
    status: OrderStatus.Created,
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
    payment: Payment.Сash,
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
  const updateProducts = (product: IProduct) => {
    const predicateHas = (item : IProduct) => item.id === product.id;
    const predicatHasNot = (item: IProduct) => item.id !== product.id;
    return stateUpdated(product, state.order.products, predicateHas, predicatHasNot)
      .map((item) => ({
        ...item,
        originalPrice: parseFloat(item.price),
      }));
  };

  const addProduct = (pizzaParams: PizzaParams) => {
    const product = pizzaParams.pizza as IProduct;
    product.count = 1;
    product.size = pizzaParams.size;
    product.type = pizzaParams.type;
    product.price = pizzaParams.price;
    product.hasHotDogBoard = pizzaParams.hasHotDogBoard;
    product.hasMazarella = pizzaParams.hasMazarella;
    return updateProducts(product);
  };

  if (action.type === actionTypes.INIT_USER) {
    const payload = action.payload as ICurrentUser;
    return {
      ...state,
      currentUser: payload,
    };
  }

  if (action.type === actionTypes.CLEAR_PRODUCTS) {
    return {
      ...state,
      order: { ...state.order, products: [] },
    };
  }

  if (action.type === actionTypes.ADD_PRODUCT) {
    return {
      ...state,
      order: {
        ...state.order,
        products: addProduct(action.payload as PizzaParams),
      },
    };
  }

  if (action.type === actionTypes.DELETE_PRODUCT) {
    return {
      ...state,
      order: {
        ...state.order,
        products: updateProducts(action.payload as IProduct),
      },
    };
  }

  const changeCount = (diff: number) => {
    const product = action.payload as IProduct;
    const products = state.order.products.map((item) => {
      let { count } = item;
      if (item === product && count + diff > 0) {
        count += diff;
      }
      return {
        ...item,
        count,
      };
    });
    return {
      ...state,
      order: {
        ...state.order,
        products,
      },
    };
  };

  if (action.type === actionTypes.PLUS_COUNT) {
    return changeCount(1);
  }

  if (action.type === actionTypes.MINUS_COUNT) {
    return changeCount(-1);
  }

  if (action.type === actionTypes.SET_COUNT) {
    const product = action.payload as IProduct;
    const products = state.order.products.map((item) => ({
      ...item,
      count: item.id === product.id && product.count > 0 ? product.count : item.count,
    }));
    return {
      ...state,
      order: {
        ...state.order,
        products,
      },
    };
  }

  return state;
};

export default reducer;
