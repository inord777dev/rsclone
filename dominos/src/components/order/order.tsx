import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CookieService from '../../services/CookieService';
import style from './order.module.scss';
import Address from '../address/address';

// type OrderProps = {

// };

export default function Order() {
  // const [bonusDate, bonusDateSet] = useState('2022-02-21');
  const [userSettings, setUserSettings] = useState<UserSettings>({
    userId: '',
    name: '',
    tel: '',
    bonusCount: '',
    city: '',
    street: '',
    home: '',
    flat: '',
    stage: '',
    gate: '',
    code: '',
  });

  // const token = CookieService.getToken();

  async function userSettingsSave() {
    // await axios
    //   .put<UserSettings>(
    //   `https://rs-clone-pizza-service.herokuapp.com/users/${currentUser.id}/settings`,
    //   JSON.stringify(userSettings),
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    // )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setUserSettings(response?.data);
    //     }
    //   });
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     await axios
  //       .get<UserSettings>(
  //       `https://rs-clone-pizza-service.herokuapp.com/users/${currentUser.id}/settings`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     )
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setUserSettings(response?.data);
  //         }
  //       });
  //   }
  //   fetchData()
  //     .then(() => {})
  //     .catch(() => {});
  // }, [currentUser, token]);

  const onChangeUserSettings = (e: FormEvent<HTMLInputElement>) => {
    // const settings : UserSettings = { ...userSettings };
    // const input = e.target as HTMLInputElement;
    // const prop = input.dataset.prop as string;
    // settings[prop] = input.value;
    // setUserSettings(settings);
  };

  const onProfileSave = () => {};

  return (
    <div className={style.profile}>
      <div className={style.profile__wrap}>
        <div className={style.main}>
          <div className={style.header}>
            <div className={style.header__title}>Оформление заказа</div>
            <div>
              <Link to="/" className={style.linkExit}>
                Выйти
              </Link>
            </div>
          </div>
          <Address userSettings={userSettings} onChangeUserSettings={onChangeUserSettings} />
          <div className={style.save}>
            <button
              className={style.btnSave}
              type="button"
              onClick={userSettingsSave}
            >
              Сохранить
            </button>
          </div>
        </div>
        <div className={style.history}>
          <div className={style.header}>
            <div className={style.header__title}>Ваш заказ</div>
          </div>
          <div className={style.history__context}>
            <div className={style.history__item}>
              Кажется, вы еще ничего не заказывали...
            </div>
          </div>
          <button
            className={style.btnMenu}
            type="button"
            onClick={onProfileSave}
          >
            Посмотреть меню
          </button>
        </div>
      </div>
    </div>
  );
}
