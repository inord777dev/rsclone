export const INIT_USER = 'INIT_USER';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export function onDispatch(action: GlobalAction) {
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function initUser(user: ICurrentUser) {
  const action: GlobalAction = {
    type: INIT_USER,
    payload: user,
  };
  return onDispatch(action);
}

export function addProduct(payload: IProduct) {
  const action: GlobalAction = {
    type: ADD_PRODUCT,
    payload,
  };
  return onDispatch(action);
}

export function addIngredient(payload: string) {
  const action: GlobalAction = {
    type: ADD_INGREDIENT,
    payload,
  };
  return onDispatch(action);
}
