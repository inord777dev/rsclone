import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCSESS = 'FETCH_USER_SUCSESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const USER_SING_OUT = 'USER_SING_OUT';

export const logoutUser = () => ({ type: 'USER_SING_OUT', payload: {} });

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSucsess = (data: any) => ({
  type: FETCH_USER_SUCSESS,
  payload: data,
});
export const fetchUserFailure = (error: any) => ({
  type: FETCH_USER_FAILURE,
  payload: error.message,
});

export const loginUser = (user: any) => (dispatch:Dispatch) => {
  dispatch(fetchUserRequest());
  axios
    .post('https://rs-clone-pizza-service.herokuapp.com/signin', { ...user })
    .then(({ data }) => {
      const userData = {
        userID: data.userId,
        token: data.token,
        name: data.name,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch(fetchUserSucsess(data));
    })
    .catch((error) => dispatch(fetchUserFailure(error)));
};

export const createUser = (user:any) => (dispatch:Dispatch) => {
  dispatch(fetchUserRequest());
  axios
    .post('https://rs-clone-pizza-service.herokuapp.com/users', { ...user })
    .then(({ data }) => dispatch(fetchUserSucsess(data)))
    .catch((error) => dispatch(fetchUserFailure(error)));
};
