import React from 'react';
import style from './userInfo.module.scss';

export default function UserInfo(): JSX.Element {
  return (
    <div className={style.content}>
      <div className={style.content__title}>Личные данные</div>
    </div>
  );
}
