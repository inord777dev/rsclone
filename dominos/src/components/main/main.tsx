/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Outlet, useOutletContext, useNavigate } from 'react-router';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import style from './main.module.scss';
import Header from './header/header';
import Navigation from './navigation/navigation';
import Login from '../login/login';
import CookieService from '../../services/CookieService';
import Infographic from './infographic/infographic';
import Footer from './footer/footer';
import { initUser } from '../../store/action';
import * as types from '../../common/types';

export default function Main() {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState<types.IPizza[]>([]);
  const [loginVisible, loginVisibleSet] = useState(false);
  const [currentUser, setCurrentUser] = useState<types.ICurrentUser>({
    id: '',
    name: '',
    email: '',
  });

  const dispatch: Dispatch<any> = useDispatch();

  const initUserCallback = useCallback(
    (user: types.ICurrentUser) => dispatch(initUser(user)),
    [dispatch],
  );

  const onCurrentUserSet = (user: types.ICurrentUser) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    async function fetchData() {
      await axios
        .get<types.IPizza[]>('https://rs-clone-pizza-service.herokuapp.com/pizzas')
        .then((response) => {
          setPizzas(response?.data);
        });
    }
    fetchData()
      .then(() => {})
      .catch(() => {});
    const localStorageUser = localStorage.getItem('currentUser');
    if (localStorageUser !== null) {
      const user = JSON.parse(localStorageUser) as types.ICurrentUser;
      const userId = CookieService.getUserId();
      if (userId !== undefined) {
        user.id = CookieService.getUserId();
      }
      onCurrentUserSet(user);
      initUserCallback(user);
    }
  }, [initUserCallback]);

  const onLoginShow = () => {
    if (currentUser.id) {
      navigate('user');
    } else {
      loginVisibleSet(true);
    }
  };

  const onLoginClose = () => {
    loginVisibleSet(false);
  };

  return (
    <div className={style.wrapper}>
      <Header onLoginShow={onLoginShow} currentUser={currentUser} />
      <Navigation />
      <Outlet context={{ pizzas, currentUser }} />
      <Infographic />
      <Footer />
      <Login
        loginVisible={loginVisible}
        currentUser={currentUser}
        onLoginClose={onLoginClose}
        onCurrentUserSet={onCurrentUserSet}
      />
    </div>
  );
}

export function usePizzas() {
  return useOutletContext<types.IPizza[]>();
}

export function useOutletContex() {
  return useOutletContext<types.OutletContext>();
}
