/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Pizza } from '../../common/types';
import style from './main.module.scss';
import Header from './header/header';
import Navigation from './navigation/navigftion';
import PizzaCatalog from './pizzaCatalog/pizzaCatalog';
import PizzaCard from './pizzaCatalog/pizzaCard/pizzaCard';
// import Login from '../login/login';
// import User from '../user/user';

export default function Main() {
  const pizzas: Pizza[] = [{
    id: '61ea74fb1c78865de913192b', key: '0', name: 'Изи Фризи', ingredients: 'Сыр моцарелла, Картофель фри, Соус Ранч, Сосиски куриные, Ветчина', image: 'izi_frizi_small.png', price: '28.89 руб.', weith: '705 гр', isHit: false,
  }, {
    id: '61ea8f79363cc72043f121f2', key: '1', name: 'Чеддерони', ingredients: 'Крем фреш, Чеддер, Ветчина, Пепперони, Сыр моцарелла', image: 'chedderoni_small.png', price: '28.89 руб.', weith: '670 гр', isHit: false,
  }, {
    id: '61ea906f363cc72043f121f3', key: '2', name: 'Говядина BURGER', ingredients: 'Шампиньоны, Телятина, Сыр моцарелла, Соус Бургер, Лук, Огурцы', image: 'govyadina_burger_small.png', price: '28.89 руб.', weith: '625 гр', isHit: false,
  }, {
    id: '61ea90c0363cc72043f121f4', key: '3', name: 'Биф BBQ', ingredients: 'Телятина, Шпинат, Сыр моцарелла, Черри, Соус барбекю, Баварские колбаски', image: 'Beef_BBQ_small-min.png', price: '32.89 руб.', weith: '620 гр', isHit: false,
  }, {
    id: '61ea9104363cc72043f121f5', key: '4', name: 'Колбаски и опята', ingredients: 'Баварские колбаски, Опята, Сыр моцарелла, Соус Ранч, Горчица', image: 'kolbaski_i_opyata_small-min.png', price: '26.89 руб.', weith: '600 гр', isHit: false,
  }, {
    id: '61ea9188363cc72043f121f7', key: '5', name: 'Карбонара', ingredients: 'Шампиньоны, Лук, Крем фреш, Бекон, Сыр моцарелла, Ветчина', image: 'carbonara.png', price: '28.89 руб.', weith: '565 гр', isHit: true,
  }, {
    id: '61ea91e6363cc72043f121f8', key: '6', name: 'Доминос Фирменная', ingredients: "Пармезан, Курица, Сыр моцарелла, Лук, Томатный соус Domino's, Бекон, Сладкий перец, Томаты, Буженина, Телятина, Шампиньоны", image: 'firmennaya.png', price: '34.89 руб.', weith: '805 гр', isHit: true,
  }, {
    id: '61ea9292363cc72043f121f9', key: '7', name: 'Чикен Ранч', ingredients: 'Соус Ранч, Томаты, Сыр моцарелла, Курица', image: 'chiken_fresh_small.png', price: '26.89 руб.', weith: '635 гр', isHit: false,
  }, {
    id: '61ea9304363cc72043f121fa', key: '8', name: 'Мексиканская', ingredients: 'Сыр моцарелла, Сладкий перец, Соус Бургер, Халапеньо, Курица, Кукуруза, Томаты', image: 'meksikanskaya_small.png', price: '28.89 руб.', weith: '610 гр', isHit: false,
  }, {
    id: '61ea9363363cc72043f121fb', key: '9', name: 'Прованс', ingredients: 'Томаты, Голубой сыр, Сыр моцарелла, Крем фреш, Пепперони, Ветчина', image: 'provence.png', price: '28.89 руб.', weith: '590 гр', isHit: false,
  }, {
    id: '61ea93eb363cc72043f121fd', key: '10', name: '5 Сыров', ingredients: 'Фета, Крем фреш, Голубой сыр, Пармезан, Чеддер, Сыр моцарелла', image: '5_syrov.png', price: '32.89 руб.', weith: '570 гр', isHit: false,
  }, {
    id: '61ea94c9363cc72043f121fe', key: '11', name: 'Мюнхенская', ingredients: 'Баварские колбаски, Томаты, Соус барбекю, Горчица, Сыр моцарелла, Мюнхенские колбаски, Ветчина', image: 'myunkhenskaya_small.png', price: '34.89 руб.', weith: '650 гр', isHit: false,
  }];

  const contex = pizzas.map((item:Pizza) => <PizzaCard pizza={item} />);

  return (
    <div className={style.wrapper}>
      <Header />
      <Navigation />
      <PizzaCatalog />
      <div className={style.container_pizza}>
        {contex}
      </div>
    </div>
    // <Login />
    // <User />
  );
}
