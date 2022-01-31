import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { IPizza, ICurrentUser } from '../../common/types';
import style from './main.module.scss';
import Header from './header/header';
import Navigation from './navigation/navigftion';
import PizzaCatalog from './pizzaCatalog/pizzaCatalog';
import PizzaCard from './pizzaCatalog/pizzaCard/pizzaCard';

import Login from '../login/login';
import Profile from '../profile/profile';
// import CookieService from '../../services/CookieService';

export default function Main() {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [loginVisible, loginVisibleSet] = useState(false);
  const [profileVisible, profileVisibleSet] = useState(false);
  const [currentUser, setCurrentUser] = useState<ICurrentUser>({
    id: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get<IPizza[]>('https://rs-clone-pizza-service.herokuapp.com/pizzas')
        .then((response) => {
          setPizzas(response?.data);
        });
    }
    fetchData()
      .then(() => {})
      .catch(() => {});
    const localStorageUser = localStorage.getItem('currentUser');
    if (localStorageUser) {
      const user = JSON.parse(localStorageUser) as ICurrentUser;
      setCurrentUser(user);
    }
  }, []);

  const onLoginShow = () => {
    if (currentUser.id) {
      profileVisibleSet(true);
    } else {
      loginVisibleSet(true);
    }
  };

  const onLoginClose = () => {
    loginVisibleSet(false);
  };

  const onCurrentUserSet = (user: ICurrentUser) => {
    setCurrentUser(user);
  };

  const onProfileSave = () => {
    profileVisibleSet(false);
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
        {pizzas.map((item: IPizza) => (
          <PizzaCard pizza={item} />
        ))}
      </div>
      <Login
        loginVisible={loginVisible}
        currentUser={currentUser}
        onLoginClose={onLoginClose}
        onCurrentUserSet={onCurrentUserSet}
      />
    </div>
  );
}
