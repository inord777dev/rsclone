import React, { FormEvent } from 'react';
import { UserSettings } from '../../common/types';
import style from './address.module.scss';

type AddressProps = {
  userSettings: UserSettings,
  onChangeUserSettings: (e: FormEvent<HTMLInputElement>) => void;
};

export default function Address({ userSettings, onChangeUserSettings }: AddressProps) {
  return (
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
          <label className={style.editItem__label} htmlFor="addressStreet">
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
  );
}
