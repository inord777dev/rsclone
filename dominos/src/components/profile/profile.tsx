import React, { FormEvent, useState } from 'react';
import style from './profile.module.scss';

type ProfileProps = {
  currentUser: string | null;
  onProfileSave: () => void
};

export default function Profile({ onProfileSave, currentUser }:ProfileProps) {
  const [bonusDate, bonusDateSet] = useState('2022-02-21');
  const [bonusCount] = useState(0);

  const onChangeBonusDate = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    bonusDateSet(target.value);
  };

  return (
    <div className={style.profile}>
      <div className={style.main}>
        <div className={style.header}>
          <div className={style.header__title}>Профиль</div>
          <div>
            <a className={style.linkExit} href="/">Выйти</a>
          </div>
        </div>
        <div className={style.user}>
          <div className={style.user__title}>Личные данные</div>
          <div className={style.user__content}>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="userEmail">
                Email
                <input className={`${style.editItem__input} ${style.input__disabled}`} type="text" id="userEmail" value="inord777@gmail.com" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="userName">
                Имя
                <input className={style.editItem__input} type="text" id="userName" value={currentUser == null ? '' : currentUser} />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="userTel">
                Телефон
                <input className={style.editItem__input} type="tel" id="userTel" />
              </label>
            </div>
          </div>
        </div>
        <div className={style.bonus}>
          <div className={style.bonus__title}>Накоплено бонусов 0</div>
          <div className={style.bonus__content}>
            <div className={style.bonus__text}>
              Узнайте, сколько бонусов у вас будет
              <input type="date" className={style.bonus__date} value={bonusDate} onChange={onChangeBonusDate} />
              <span className={style.bonus__count}>{`${bonusCount} бонусов`}</span>
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
                <input className={style.editItem__input} type="text" id="bonusPromo" />
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
                <input className={style.editItem__input} type="text" id="addressCity" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="addressStreet">
                Улица
                <input className={style.editItem__input} type="text" id="addressStreet" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="addressHome">
                Дом
                <input className={style.editItem__input} type="text" id="addressHome" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="addressFlat">
                Квартира
                <input className={style.editItem__input} type="text" id="addressFlat" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="addressStage">
                Этаж
                <input className={style.editItem__input} type="text" id="addressStage" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="addressGate">
                Подъезд
                <input className={style.editItem__input} type="text" id="addressStage" />
              </label>
            </div>
            <div className={style.editItem}>
              <label className={style.editItem__label} htmlFor="addressCode">
                Код двери
                <input className={style.editItem__input} type="text" id="addressCode" />
              </label>
            </div>
          </div>
        </div>
        <div className={style.save}>
          <button className={style.btnSave} type="button" onClick={onProfileSave}>
            Сохранить
          </button>
        </div>
      </div>
      <div className={style.history}>
        <div className={style.header}>
          <div className={style.header__title}>История заказов</div>
        </div>
        <div className={style.history__context}>
          <div className={style.history__item}>Кажется, вы еще ничего не заказывали...</div>
        </div>
        <button className={style.btnMenu} type="button" onClick={onProfileSave}>
          Посмотреть меню
        </button>
      </div>
    </div>
  );
}
