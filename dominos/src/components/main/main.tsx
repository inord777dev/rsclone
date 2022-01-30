import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Pizza } from '../../common/types';
import style from './main.module.scss';
import Header from './header/header';
import Navigation from './navigation/navigftion';
import PizzaCatalog from './pizzaCatalog/pizzaCatalog';
import PizzaCard from './pizzaCatalog/pizzaCard/pizzaCard';

import Login from '../login/login';
import Profile from '../profile/profile';

export default function Main() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loginVisible, loginVisibleSet] = useState(false);
  const [profileVisible, profileVisibleSet] = useState(false);
  const [currentUser, currentUserSet] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get<Pizza[]>('https://rs-clone-pizza-service.herokuapp.com/pizzas')
        .then((response) => {
          setPizzas(response?.data);
        });
    }
    fetchData()
      .then(() => {})
      .catch(() => {});
  }, []);

  const onLoginShow = () => {
    if (currentUser) {
      profileVisibleSet(true);
    } else {
      loginVisibleSet(true);
    }
  };

  const onLoginClose = () => {
    loginVisibleSet(false);
  };

  const onCurrentUserSet = () => {
    currentUserSet('Andrei');
    if (!currentUser) {
      loginVisibleSet(false);
    }
  };

  const onProfileSave = () => {
    profileVisibleSet(false);
    console.log(1);
  };

  return profileVisible ? (
    <div className={style.wrapper}>
      <Header onLoginShow={onLoginShow} currentUser={currentUser} />
      <Navigation />
      <Profile onProfileSave={onProfileSave} currentUser={currentUser} />
    </div>
  ) : (
    <div className={style.wrapper}>
      <Header onLoginShow={onLoginShow} currentUser={currentUser} />
      <Navigation />
      <PizzaCatalog />
      <div className={style.container_pizza}>
        {pizzas.map((item: Pizza) => (
          <PizzaCard pizza={item} />
        ))}
      </div>
      <Login
        loginVisible={loginVisible}
        onLoginClose={onLoginClose}
        onCurrentUserSet={onCurrentUserSet}
      />
    </div>
  );
}
