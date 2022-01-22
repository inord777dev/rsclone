import React from 'react';
import style from './user.module.scss';
import History from './history/history';
import UserInfo from './userInfo/userInfo';

export default function User() {
  return (
    <div className={style.content}>
      <UserInfo />
      <History />
    </div>
  );
}
