export const INIT_USER = 'INIT_USER';
export const ADD_PIZZA = 'ADD_PIZZA';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function simulateHttpRequest(action: GlobalAction) {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function initUser(user: ICurrentUser) {
  const action: GlobalAction = {
    type: INIT_USER,
    payload: user,
  };
  return simulateHttpRequest(action);
}

export function addPizza(payload: IPizza) {
  const action: GlobalAction = {
    type: ADD_PIZZA,
    payload,
  };
  return simulateHttpRequest(action);
}

export function addIngredient(payload: string) {
  const action: GlobalAction = {
    type: ADD_INGREDIENT,
    payload,
  };
  return simulateHttpRequest(action);
}
