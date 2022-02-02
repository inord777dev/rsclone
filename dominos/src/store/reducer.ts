import * as actionTypes from './action';

const initialState: OrderState = {
  pizzas: [],
  ingredients: [],
  price: 0,
};

const stateUpdated = <T>(payload: T,
  collection : T[],
  predicateHas: (item: T) => boolean,
  predicatHasNot: (item: T) => boolean) => (collection.some(predicateHas)
    ? collection.filter(predicatHasNot)
    : collection.concat(payload));

const reducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: OrderState = initialState,
  action: OrderAction,
): OrderState => {
  if (action.type === actionTypes.ADD_PIZZA) {
    const payload = action.payload as IPizza;
    const predicateHas = (item : IPizza) => item.id === payload.id;
    const predicatHasNot = (item: IPizza) => item.id !== payload.id;
    return {
      ...state,
      pizzas: stateUpdated(payload, state.pizzas, predicateHas, predicatHasNot),
    };
  }
  if (action.type === actionTypes.ADD_INGREDIENT) {
    const payload = action.payload as string;
    const predicateHas = (item : string) => item === payload;
    const predicatHasNot = (item: string) => item !== payload;
    return {
      ...state,
      ingredients: stateUpdated(payload, state.ingredients, predicateHas, predicatHasNot),
    };
  }
  return state;
};

export default reducer;
