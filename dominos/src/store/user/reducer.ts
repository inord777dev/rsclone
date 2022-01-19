/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { Reducer } from 'redux';

import { UserState } from './type';
import {
  FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCSESS, USER_SING_OUT,
} from './actions';

const initialState: UserState = {
  user: {
    name: '',
    password: '',
    email: '',
  },
  isLoading: false,
  error: '',
};

// eslint-disable-next-line default-param-last
const SignUpReducer: Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state, isLoading: true, user: {}, error: '',
      };
    case FETCH_USER_SUCSESS:
      return {
        ...state, isLoading: false, user: action.payload, error: '',
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: {},
        error: action.payload,
      };
    case USER_SING_OUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default SignUpReducer;
