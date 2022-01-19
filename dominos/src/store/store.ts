/* eslint-disable import/extensions */
import {
  combineReducers, createStore, applyMiddleware, Store,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import SignUpReducer from './user/reducer';

const reducers = combineReducers({ user: SignUpReducer });

const middlewares = [thunk, logger];
export default function configureStore(initialState = {}): Store {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
}

export type RootState = ReturnType<typeof reducers>;
