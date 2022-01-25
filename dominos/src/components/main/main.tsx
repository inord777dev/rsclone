/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import style from './main.module.scss';
import Header from './header/header';
import Navigation from './navigation/navigftion';
import PizzaCatalog from './pizzaCatalog/pizzaCatalog';
import PizzaCard from './pizzaCatalog/pizzaCard/pizzaCard';

export default function Main() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Navigation />
      <PizzaCatalog />
      <div className={style.container_pizza}>
        <PizzaCard />
      </div>
    </div>
  );
}
