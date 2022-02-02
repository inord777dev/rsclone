import * as actionTypes from './action';

const initialState: OrderState = {
  orders: [],
};

const reducer = (
  state: OrderState = initialState,
  action: OrderAction,
): OrderState => {
  if (action.type === actionTypes.ADD_ORDER) {
    const newOrder: IOrder = {
      id: Math.random(), // not really unique
      pizzaId: 0,
      ingredients: [],
      price: 100
    };
    return {
      ...state,
      orders: state.orders.concat(newOrder),
    };
  }
  if (action.type === actionTypes.REMOVE_ORDER) {
    const newOrders: IOrder[] = state.orders.filter(
      (order) => order.id !== action.order.id,
    );
    return {
      ...state,
      orders: newOrders,
    };
  }
  return state;
};

export default reducer;
