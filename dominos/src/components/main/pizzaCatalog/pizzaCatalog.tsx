/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import style from './pizzaCatalog.module.scss';
import PizzaCard from './pizzaCard/pizzaCard';
import { IPizza } from '../../../common/types';

type PropsSort = {
  pizzas: IPizza[]
};

export default function PizzaCatalog({ pizzas }:PropsSort) {
  const sortingTypes = new Map();
  sortingTypes.set('none', (a:IPizza, b:IPizza): number => 0);
  sortingTypes.set('name', (a:IPizza, b:IPizza): number => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  sortingTypes.set('reverseName', (a:IPizza, b:IPizza): number => {
    if (b.name < a.name) {
      return -1;
    }
    if (b.name > a.name) {
      return 1;
    }
    return 0;
  });
  sortingTypes.set('price', (a:IPizza, b:IPizza): number => parseFloat(a.price) - parseFloat(b.price));
  sortingTypes.set('reversePrice', (a:IPizza, b:IPizza): number => parseFloat(b.price) - parseFloat(a.price));
  const [sortingName, setSortingName] = useState<boolean | null>(null);
  const [sortingPrice, setSortingPrice] = useState<boolean | null>(null);
  const pizzasSort = (e:React.MouseEvent):void => {
    const target = e.target as Element;
    if (target.id === 'name') {
      setSortingName(sortingName === null ? true : !sortingName);
      setSortingPrice(null);
    }
    if (target.id === 'price') {
      setSortingPrice(!sortingPrice === null ? true : !sortingPrice);
      setSortingName(null);
    }
    console.log(sortingName, sortingPrice);
  };

  return (
    <div>
      <div className={style.container_catalog}>
        <div className={style.pizza}>
          <h2 className={style.tittle}>Пицца</h2>
          <span className={style.add}>|</span>
          <ul className={style.type_pizza}>
            <li>Классические</li>
            <li>Любимые</li>
            <li>Премиум</li>
            <li>Легенды</li>
            <li>Красная цена</li>
          </ul>
        </div>
        <div className={style.sort}>
          Сортировка по:
          <ul
            className={style.type_sort}
            onClick={pizzasSort}
          >
            <li id="name">По названию</li>
            <li id="price">По цене</li>
          </ul>
        </div>
      </div>
      <div className={style.container_pizza}>
        {pizzas
          .sort(sortingTypes.get(sortingName == null ? 'none' : sortingName ? 'name' : 'reverseName') as (a: IPizza, b: IPizza) => number)
          .sort(sortingTypes.get(sortingPrice == null ? 'none' : sortingPrice ? 'price' : 'reversePrice') as (a: IPizza, b: IPizza) => number)
          .map((item: IPizza) => (
            <PizzaCard key={item.id} pizza={item} />
          ))}
      </div>
    </div>
  );
}
