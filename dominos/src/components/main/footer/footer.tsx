/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import style from './footer.module.scss';
import gitImage from '../../../assets/icons8-git.svg';
import rs from '../../../assets/rs.svg';

export default function Footer() {
  return (
    <div className={style.wrapper}>
      <ul className={style.container}>
        <li className={style.content}>
          <img src={gitImage} alt="no img" />
          <a className={style.text} href="https://github.com/inord777dev" target="_blank" rel="noreferrer">inord777dev</a>
        </li>
        <li className={style.content}>
          <img src={gitImage} alt="no img" />
          <a className={style.text} href="https://github.com/KrisKip123" target="_blank" rel="noreferrer">KrisKip123</a>
        </li>
        <li className={style.content}>
          <span className={style.text}>Год создания: 2022</span>
        </li>
        <li className={style.content}>
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer"><img className={style.size_image} src={rs} alt="no img" /></a>
        </li>
      </ul>
    </div>
  );
}
