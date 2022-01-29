import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Pizza } from '../../common/types';
import style from './main.module.scss';
import Header from './header/header';
import Navigation from './navigation/navigftion';
import PizzaCatalog from './pizzaCatalog/pizzaCatalog';
import PizzaCard from './pizzaCatalog/pizzaCard/pizzaCard';

import Login from '../login/login';
// import User from '../user/user';

export default function Main() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get<Pizza[]>('https://rs-clone-pizza-service.herokuapp.com/pizzas')
        .then((response) => {
          setPizzas(response?.data);
        });
    }
    fetchData().then(() => {}).catch(() => {});
  }, []);

  const onModalShow = () => {
    setIsModal(true);
  };

  const onModalClose = () => {
    setIsModal(false);
  };

  return (
    <div className={style.wrapper}>
      <Header onModalClick={onModalShow} />
      <Navigation />
      <PizzaCatalog />
      <div className={style.container_pizza}>
        {pizzas.map((item: Pizza) => (
          <PizzaCard pizza={item} />
        ))}
      </div>
      <Login isModal={isModal} onModalClick={onModalClose} />
    </div>

  // <User />
  );
}
