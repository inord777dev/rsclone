export const ADD_PIZZA = 'ADD_PIZZA';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function simulateHttpRequest(order: OrderAction) {
  return (dispatch: DispatchType) => {
    dispatch(order);
  };
}

export function addPizza(payload: IPizza) {
  const action: OrderAction = {
    type: ADD_PIZZA,
    payload,
  };
  return simulateHttpRequest(action);
}

export function addIngredient(payload: string) {
  const action: OrderAction = {
    type: ADD_INGREDIENT,
    payload,
  };
  return simulateHttpRequest(action);
}
