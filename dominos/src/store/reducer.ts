import * as actionTypes from './action';

const initialState: GlobalState = {
  currentUser: {
    id: '',
    name: '',
    email: '',
  },
  order: {
    pizzas: [],
    ingredients: [],
    price: 0,
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
  if (action.type === actionTypes.ADD_PIZZA) {
    const payload = action.payload as IPizza;
    const predicateHas = (item : IPizza) => item.id === payload.id;
    const predicatHasNot = (item: IPizza) => item.id !== payload.id;
    return {
      ...state,
      order: {
        ...state.order,
        pizzas: stateUpdated(payload, state.order.pizzas, predicateHas, predicatHasNot),
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
