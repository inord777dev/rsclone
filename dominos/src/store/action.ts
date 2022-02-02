export const ADD_ORDER = 'ADD_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export function simulateHttpRequest(order: OrderAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(order);
    }, 500);
  };
}

export function addArticle(order: IOrder) {
  const action: OrderAction = {
    type: ADD_ORDER,
    order,
  };
  return simulateHttpRequest(action);
}

export function removeArticle(order: IOrder) {
  const action: OrderAction = {
    type: REMOVE_ORDER,
    order,
  };
  return simulateHttpRequest(action);
}
