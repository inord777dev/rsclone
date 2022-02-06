import React from 'react';
import style from './pizzaCatalog.module.scss';
import PizzaCard from './pizzaCard/pizzaCard';

export default function PizzaCatalog(props : { pizzas: IPizza[] }) {
  const { pizzas } = props;

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
          <ul className={style.type_sort}>
            <li>популярности</li>
            <li>категориям</li>
          </ul>
        </div>
      </div>
      <div className={style.container_pizza}>
        {pizzas.map((item: IPizza) => (
          <PizzaCard key={item.id} pizza={item} />
        ))}
      </div>
    </div>
  );
}
