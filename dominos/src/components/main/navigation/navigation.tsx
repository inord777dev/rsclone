import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './navigation.module.scss';

export default function Navigation() {
  const [price, setPrice] = useState(0);

  const products: readonly IProduct[] = useSelector(
    (state: GlobalState) => state.order.products,
    shallowEqual,
  );

  useEffect(() => {
    function priceUpdate() {
      setPrice(products.reduce((acc, item) => acc + parseFloat(item.price), 0));
    }
    priceUpdate();
  });

  return (
    <div className={style.navigation_container}>
      <nav className={style.navigation_pos}>
        <ul className={style.navigation}>
          <li><a className={style.text_nav} href="/">Пицца</a></li>
          <li><a className={style.text_nav} href="/">Курица</a></li>
          <li><a className={style.text_nav} href="/">Картофель</a></li>
          <li><a className={style.text_nav} href="/">Хлебцы</a></li>
          <li><a className={style.text_nav} href="/">Салаты</a></li>
          <li><a className={style.text_nav} href="/">Десерты</a></li>
          <li><a className={style.text_nav} href="/">Напитки</a></li>
          <li><a className={style.text_nav} href="/">Соусы</a></li>
          <li className={style.add}>|</li>
          <li><a className={style.text_nav} href="/">Акции</a></li>
          <li><a className={style.text_nav} href="/">Новости</a></li>
          <li><a className={style.text_nav} href="/">Работа в Domino</a></li>
          <li><a className={style.text_nav} href="/">Программа лояльности</a></li>
        </ul>
        <Link to="user/order" className={style.cart}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g><path d="M7.00001 18C5.90001 18 5.01001 18.9 5.01001 20C5.01001 21.1 5.90001 22 7.00001 22C8.10001 22 9.00001 21.1 9.00001 20C9.00001 18.9 8.10001 18 7.00001 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" /></g></svg>
          {`Корзина: ${price.toFixed(2)} руб.`}
        </Link>
      </nav>
    </div>
  );
}
