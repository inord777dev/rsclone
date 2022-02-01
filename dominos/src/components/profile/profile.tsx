import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

import { ICurrentUser } from '../../common/types';
import CookieService from '../../services/CookieService';
import style from './profile.module.scss';

type ProfileProps = {
  currentUser: ICurrentUser
  onProfileSave: () => void
};

type UserSettings = {
  [key: string]: string,
  userId: string
  name: string
  tel: string
  bonusCount: string
  city: string
  street: string
  home: string
  flat: string
  stage: string
  gate: string
  code: string
};

export default function Profile({ onProfileSave, currentUser }: ProfileProps) {
  const [bonusDate, bonusDateSet] = useState('2022-02-21');
  const [userSettings, setUserSettings] = useState<UserSettings>({
    userId: currentUser.id,
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

  const token = CookieService.getToken();

  async function userSettingsSave() {
    await axios
      .put<UserSettings>(
      `https://rs-clone-pizza-service.herokuapp.com/users/${currentUser.id}/settings`,
      JSON.stringify(userSettings),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          setUserSettings(response?.data);
        }
      });
  }

  useEffect(() => {
    async function fetchData() {
      await axios
        .get<UserSettings>(
        `https://rs-clone-pizza-service.herokuapp.com/users/${currentUser.id}/settings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            setUserSettings(response?.data);
          }
        });
    }
    fetchData()
      .then(() => {})
      .catch(() => {});
  }, [currentUser, token]);

  const onChangeBonusDate = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    bonusDateSet(target.value);
  };

  const onChangeUserSettings = (e: FormEvent<HTMLInputElement>) => {
    const settings : UserSettings = { ...userSettings };
    const input = e.target as HTMLInputElement;
    const prop = input.dataset.prop as string;
    settings[prop] = input.value;
    setUserSettings(settings);
  };

  return (
    <div className={style.profile}>
      <div className={style.profile__wrap}>
        <div className={style.main}>
          <div className={style.header}>
            <div className={style.header__title}>Профиль</div>
            <div>
              <a className={style.linkExit} href="/">
                Выйти
              </a>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.user__title}>Личные данные</div>
            <div className={style.user__content}>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="userEmail">
                  Email
                  <input
                    className={`${style.editItem__input} ${style.input__disabled}`}
                    type="text"
                    id="userEmail"
                    value={currentUser.email}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="userName">
                  Имя
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="userName"
                    value={userSettings.name}
                    data-prop="name"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="userTel">
                  Телефон
                  <input
                    className={style.editItem__input}
                    type="tel"
                    id="userTel"
                    value={userSettings.tel}
                    data-prop="tel"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={style.bonus}>
            <div className={style.bonus__title}>Накоплено бонусов 0</div>
            <div className={style.bonus__content}>
              <div className={style.bonus__text}>
                Узнайте, сколько бонусов у вас будет
                <input
                  type="date"
                  className={style.bonus__date}
                  value={bonusDate}
                  onChange={onChangeBonusDate}
                />
                <span
                  className={style.bonus__count}
                >
                  {`${userSettings.bonusCount} бонусов`}

                </span>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="bonusPromo">
                  Введите промокод
                  <span className={style.bonus__mark}> на бонусы</span>
                  <span>
                    <svg
                      className={style.bonus__icon}
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                    </svg>
                  </span>
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="bonusPromo"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className={style.address}>
            <div className={style.address__title}>Адрес доставки</div>
            <div className={style.bonus__content}>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="addressCity">
                  Город
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressCity"
                    value={userSettings.city}
                    data-prop="city"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label
                  className={style.editItem__label}
                  htmlFor="addressStreet"
                >
                  Улица
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressStreet"
                    value={userSettings.street}
                    data-prop="street"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="addressHome">
                  Дом
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressHome"
                    value={userSettings.home}
                    data-prop="home"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="addressFlat">
                  Квартира
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressFlat"
                    value={userSettings.flat}
                    data-prop="flat"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="addressStage">
                  Этаж
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressStage"
                    value={userSettings.stage}
                    data-prop="stage"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="addressGate">
                  Подъезд
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressGate"
                    value={userSettings.gate}
                    data-prop="gate"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
              <div className={style.editItem}>
                <label className={style.editItem__label} htmlFor="addressCode">
                  Код двери
                  <input
                    className={style.editItem__input}
                    type="text"
                    id="addressCode"
                    value={userSettings.code}
                    data-prop="code"
                    onChange={onChangeUserSettings}
                  />
                </label>
              </div>
            </div>
          </div>
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
            <div className={style.header__title}>История заказов</div>
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
