/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import style from './pizzaCard.module.scss';
import cheeseBoard from '../../../../assets/front/cheeseBoard.png';
import mozarella from '../../../../assets/front/mozarella.png';
import { IPizza } from '../../../../common/types';

type PizzaCardProps = {
  pizza: IPizza
};

export default function PizzaCard(props:PizzaCardProps) {
  const { pizza } = props;

  return (
    <div className={style.pizza_card}>
      <img src={`${process.env.PUBLIC_URL || ''}/pizza/${pizza.image}`} alt={pizza.image} />
      <div className={style.pizza_card_info}>
        <div className={style.pizza_card_info_name}>
          {pizza.name}
        </div>
        <div className={style.pizza_card_info_text}>
          <div className={style.pizza_card_add}>
            {pizza.ingredients}
          </div>
          <div className={style.type_pizza_select}>
            <select name="sizePizza" className={style.select_container}>
              <option value="22">22 см</option>
              <option value="30">30 см</option>
              <option value="36">36 см</option>
            </select>
            <select name="typePizza" className={style.select_container}>
              <option value="1">Хот-Дог борт</option>
              <option value="2">Классика</option>
              <option value="3">Ультратонкое</option>
              <option value="4">Сырный борт</option>
              <option value="5">Тонкое</option>
            </select>
          </div>
          <div className={style.add_with_pizza}>
            <div className={style.add_type_pizza}>
              <svg className={style.container_add_pizza} width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z" /></g></svg>
              <img className={style.img_size} src={cheeseBoard} alt="no img" />
              <div className={style.container_name_add}>
                Хот-Дог борт
              </div>
            </div>
            <div className={style.text_cash_add}>
              5.90 руб.
            </div>
          </div>
          <div className={style.add_with_pizza}>
            <div className={style.add_type_pizza}>
              <svg className={style.container_add_pizza} width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z" /></g></svg>
              <img className={style.img_size} src={mozarella} alt="no img" />
              <div className={style.container_name_add}>
                Моцарелла-mini
              </div>
            </div>
            <div className={style.text_cash_add}>
              2.49 руб.
            </div>
          </div>
          <div className={style.buy_card}>
            <div className={style.info_cash_and_gr}>
              <span className={style.info_cash_color}>{pizza.price}</span>
              <span>{pizza.weith}</span>
            </div>
            <div className={style.button_buy}>
              В корзину
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
