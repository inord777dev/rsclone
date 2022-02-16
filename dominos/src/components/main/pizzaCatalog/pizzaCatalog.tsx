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
  sortingTypes.set('name', (a:IPizza, b:IPizza): number => b.name.localeCompare(a.name));
  sortingTypes.set('reverseName', (a:IPizza, b:IPizza): number => a.name.localeCompare(b.name));
  sortingTypes.set('price', (a:IPizza, b:IPizza): number => parseFloat(a.price) - parseFloat(b.price));
  sortingTypes.set('reversePrice', (a:IPizza, b:IPizza): number => parseFloat(b.price) - parseFloat(a.price));
  const [sortingName, setSortingName] = useState(false);
  const [sortingPrice, setSortingPrice] = useState(false);
  const pizzasSort = (e:React.MouseEvent):void => {
    const target = e.target as Element;
    if (target.id === 'name') {
      setSortingName(!sortingName);
    }
    if (target.id === 'price') {
      setSortingPrice(!sortingPrice);
    }
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
          .sort(sortingTypes.get(sortingName ? 'name' : 'reverseName') as (a: IPizza, b: IPizza) => number)
          .sort(sortingTypes.get(sortingPrice ? 'price' : 'reversePrice') as (a: IPizza, b: IPizza) => number)
          .map((item: IPizza) => (
            <PizzaCard key={item.id} pizza={item} />
          ))}
      </div>
    </div>
  );
}
