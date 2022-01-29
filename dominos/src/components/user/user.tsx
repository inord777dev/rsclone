import React from 'react';
import style from './user.module.scss';

export default function User() {
  return (
    <div className={style.profile}>
      <div className={style.info}>
        <div className={style.header}>
          <div className={style.headerTitle}>Профиль</div>
          <div className={style.linkExit}>
            <a href="https://dominos.by/">Выйти</a>
          </div>
        </div>
        <div className={style.user}>
          <div className={style.title}>Личные данные</div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="userEmail">
              Email
              <input className={style.input} type="text" id="userEmail" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="userName">
              Имя
              <input className={style.input} type="text" id="userName" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="userTel">
              Телефон
              <input className={style.input} type="tel" id="userTel" />
            </label>
          </div>
        </div>
        <div className={style.bonus}>
          <div className={style.title}>Накоплено бонусов 0</div>
          <div className={style.title}>
            Узнайте, сколько бонусов у вас будет
            <input type="date" defaultValue="2022.02.01" />
            <span className={style.bonusCount}>0 бонусов</span>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="bonusPromo">
              Введите промокод на бонусы
              <span>
                <svg
                  className={style.bonusIcon}
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                </svg>
              </span>
              <input className={style.input} type="text" id="bonusPromo" />
            </label>
          </div>
        </div>
        <div className={style.address}>
          <div className={style.title}>Адрес доставки</div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressCity">
              Город
              <input className={style.input} type="text" id="addressCity" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressStreet">
              Улица
              <input className={style.input} type="text" id="addressStreet" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressHome">
              Дом
              <input className={style.input} type="text" id="addressHome" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressFlat">
              Квартира
              <input className={style.input} type="text" id="addressFlat" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressStage">
              Этаж
              <input className={style.input} type="text" id="addressStage" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressGate">
              Подъезд
              <input className={style.input} type="text" id="addressStage" />
            </label>
          </div>
          <div className={style.editItem}>
            <label className={style.label} htmlFor="addressCode">
              Код двери
              <input className={style.input} type="text" id="addressCode" />
            </label>
          </div>
        </div>
        <div className={style.save}>
          <button className={style.btnSave} type="button">
            Сохранить
          </button>
        </div>
      </div>
      <div className={style.history}>
        <div className={style.header}>
          <div className={style.headerTitle}>История заказов</div>
        </div>
        <div className={style.history__item}>Кажется, вы еще ничего не заказывали...</div>
        <button className={style.btnMenu} type="button">
          Посмотреть меню
        </button>
      </div>
    </div>
  );
}
