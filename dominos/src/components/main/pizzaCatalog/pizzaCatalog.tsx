/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './pizzaCatalog.module.scss';

type PropsSort = {
  onClick: (a:React.MouseEvent) => void
};

export default function PizzaCatalog({ onClick }:PropsSort) {
  return (
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
          onClick={(event) => onClick(event)}
        >
          <li id="name">по названию</li>
          <li id="price">по цене</li>
        </ul>
      </div>
    </div>
  );
}
