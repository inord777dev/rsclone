import {
  GlobalAction, DispatchType, ICurrentUser, IProduct, PizzaParams,
} from '../common/types';

export const INIT_USER = 'INIT_USER';
export const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const PLUS_COUNT = 'PLUS_COUNT';
export const MINUS_COUNT = 'MINUS_COUNT';
export const SET_COUNT = 'SET_COUNT';

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

export function clearProducts() {
  const action: GlobalAction = {
    type: CLEAR_PRODUCTS,
    payload: null,
  };
  return onDispatch(action);
}

export function addProduct(payload: PizzaParams) {
  const action: GlobalAction = {
    type: ADD_PRODUCT,
    payload,
  };
  return onDispatch(action);
}

export function deleteProduct(payload: IProduct) {
  const action: GlobalAction = {
    type: DELETE_PRODUCT,
    payload,
  };
  return onDispatch(action);
}

export function plusCount(payload: IProduct) {
  const action: GlobalAction = {
    type: PLUS_COUNT,
    payload,
  };
  return onDispatch(action);
}

export function minusCount(payload: IProduct) {
  const action: GlobalAction = {
    type: MINUS_COUNT,
    payload,
  };
  return onDispatch(action);
}

export function setCount(payload: IProduct) {
  const action: GlobalAction = {
    type: SET_COUNT,
    payload,
  };
  return onDispatch(action);
}
