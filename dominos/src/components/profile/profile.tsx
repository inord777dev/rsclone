import React from 'react';
import History from './history/history';
import style from './profile.module.scss';
import UserInfo from './userInfo/userInfo';

export default function Profile() {
  return (
    <div className={style.content}>
      <UserInfo />
      <History />
    </div>
  );
}
