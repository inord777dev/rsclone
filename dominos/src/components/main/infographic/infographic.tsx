/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import style from './infographic.module.scss';
import people from '../../../assets/info/people.svg';
import country from '../../../assets/info/country.svg';
import earth from '../../../assets/info/earth.svg';
import clock from '../../../assets/info/clock.svg';
import play from '../../../assets/info/play.svg';

export default function Infographic() {
  return (
    <div className={style.wrapper}>
      <ul className={style.container}>
        <li className={style.border_left}>
          <img className={style.size_image} src={people} alt="no img" />
          <span className={style.text_top}>270 000</span>
          <span className={style.text_bottom}>Клиентов в месяц</span>
        </li>
        <li className={style.content}>
          <img className={style.size_image} src={country} alt="no img" />
          <span className={style.text_top}>31</span>
          <span className={style.text_bottom}>Пиццерия в Беларуси</span>
        </li>
        <li className={style.content}>
          <img className={style.size_image} src={earth} alt="no img" />
          <span className={style.text_top}>93</span>
          <span className={style.text_bottom}>Страны</span>
        </li>
        <li className={style.content}>
          <img className={style.size_image} src={play} alt="no img" />
          <span className={style.text_top}>24/7</span>
          <span className={style.text_bottom}>Доставляем</span>
        </li>
        <li className={style.content}>
          <img className={style.size_image} src={clock} alt="no img" />
          <span className={style.text_top}>11:00-23:00</span>
          <span className={style.text_bottom}>Время работы пиццерий</span>
        </li>
      </ul>
    </div>
  );
}
