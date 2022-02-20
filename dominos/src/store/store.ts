import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import { GlobalState, GlobalAction, DispatchType } from '../common/types';
import reducer from './reducer';

const store: Store<GlobalState, GlobalAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

export default store;
