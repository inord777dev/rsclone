/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {
  useCallback, useState, useEffect,
} from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import style from './pizzaCard.module.scss';

import cheeseBoard from '../../../../assets/front/cheeseBoard.png';
import mozarella from '../../../../assets/front/mozarella.png';
import { addProduct } from '../../../../store/action';
import {
  IPizza, PizzaParams,
} from '../../../../common/types';

type PizzaCardProps = {
  pizza: IPizza
};

export default function PizzaCard({ pizza } : PizzaCardProps) {
  const hotDogBoard = 'Хот-Дог борт';
  const hotDogBoardPrice = 5.9;
  const mazarellaPrice = 2.49;
  const [pizzaSize, setPizzaSize] = useState('Средняя');
  const [pizzaType, setPizzaType] = useState(hotDogBoard);
  const [pizzaPrice, setPizzaPrice] = useState(parseFloat(pizza.price));
  const [hasHotDogBoard, setHasHotDogBoard] = useState(pizzaType === hotDogBoard);
  const [hasMazarella, setHasMazarella] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();

  const getPizzaParamsCallback = useCallback(
    () => ({
      pizza,
      size: pizzaSize,
      type: pizzaType,
      price: pizzaPrice.toFixed(2),
      hasHotDogBoard,
      hasMazarella,
    }) as PizzaParams,
    [pizza, pizzaSize, pizzaType, pizzaPrice, hasHotDogBoard, hasMazarella],
  );

  const addPizzaCallback = useCallback(
    () => dispatch(addProduct(getPizzaParamsCallback())),
    [dispatch, getPizzaParamsCallback],
  );

  useEffect(() => {
    setHasHotDogBoard(pizzaType === hotDogBoard);
    let factor = 1;
    if (pizzaSize === 'Стандартная') {
      factor = 0.6;
    } else if (pizzaSize === 'Большая') {
      factor = 1.2;
    }
    setPizzaPrice(parseFloat(pizza.price) * factor
      + (hasHotDogBoard ? hotDogBoardPrice : 0)
      + (hasMazarella ? mazarellaPrice : 0));
  }, [pizza, pizzaSize, pizzaType, hasHotDogBoard, hasMazarella]);

  const onClickHotDogBoard = () => {
    setPizzaType(hotDogBoard);
  };

  const onClickMozarella = () => {
    setHasMazarella(!hasMazarella);
  };

  const onClickCart = () => {
    addPizzaCallback();
  };

  const onChangePizzaSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPizzaSize(e.target.value);
  };

  const onChangePizzaType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPizzaType(e.target.value);
  };

  return (
    <div className={style.pizza_card}>
      <img src={`${process.env.PUBLIC_URL || ''}/pizza/${pizza.image}`} alt={pizza.image} />
      <div className={style.pizza_card_info}>
        <div className={style.pizza_card_info_name}>
          {pizza.name}
        </div>
        <div className={style.pizza_card_info_text}>
          <div className={style.pizza_card_add}>
            {pizza.components}
          </div>
          <div className={style.type_pizza_select}>
            <select name="sizePizza" className={style.select_container} id="sizePizza" onChange={onChangePizzaSize} value={pizzaSize}>
              <option value="Стандартная">Стандартная</option>
              <option value="Средняя">Средняя</option>
              <option value="Большая">Большая</option>
            </select>
            <select name="typePizza" className={style.select_container} id="typePizza" onChange={onChangePizzaType} value={pizzaType}>
              <option value="Хот-Дог борт">Хот-Дог борт</option>
              <option value="Сырный борт">Сырный борт</option>
              <option value="Классика">Классика</option>
              <option value="Ультратонкое">Ультратонкое</option>
              <option value="Тонкое">Тонкое</option>
            </select>
          </div>
          <div className={style.add_with_pizza}>
            <div className={style.add_type_pizza} data-name="Хот-Дог борт" data-price="5.9" id="ingredient1">
              <svg className={style.container_add_pizza} width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)" onClick={onClickHotDogBoard}>
                <g>
                  <path d={hasHotDogBoard ? 'm10.5,13.88l6.59,-6.59l1.41,1.42l-8,8l-5,-5l1.41,-1.41l3.59,3.58z' : 'M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z'} />
                </g>
              </svg>
              <img className={style.img_size} src={cheeseBoard} alt="no img" />
              <div className={style.container_name_add}>
                {hotDogBoard}
              </div>
            </div>
            <div className={style.text_cash_add}>
              {`${hotDogBoardPrice.toFixed(2)} руб.`}
            </div>
          </div>
          <div className={style.add_with_pizza}>
            <div className={style.add_type_pizza} data-name="Моцарелла-mini" data-price="2.49" id="ingredient2">
              <svg className={style.container_add_pizza} width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)" onClick={onClickMozarella}>
                <g>
                  <path d={hasMazarella ? 'm10.5,13.88l6.59,-6.59l1.41,1.42l-8,8l-5,-5l1.41,-1.41l3.59,3.58z' : 'M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z'} />
                </g>
              </svg>
              <img className={style.img_size} src={mozarella} alt="no img" />
              <div className={style.container_name_add}>
                Моцарелла-mini
              </div>
            </div>
            <div className={style.text_cash_add}>
              {`${mazarellaPrice.toFixed(2)} руб.`}
            </div>
          </div>
          <div className={style.buy_card}>
            <div className={style.info_cash_and_gr}>
              <span className={style.info_cash_color}>{`${pizzaPrice.toFixed(2)} руб.`}</span>
              <span>{pizza.weith}</span>
            </div>
            <button type="button" className={style.button_buy} onClick={onClickCart}>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}
