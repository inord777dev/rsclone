import React from 'react';
import style from './login.module.scss';

type LoginProps = {
  isModal: boolean;
  onModalClick: () => void;
};

export default function Login({ isModal, onModalClick }: LoginProps) {
  return !isModal ? null : (
    <div>
      <div className={style.login__overlay} />
      <div className={style.login__outer}>
        <div className={style.login__inner}>
          <div className={style.login__banner}>
            <div className={style.login__bannerImage} />
          </div>
          <div className={style.login__form}>
            <button
              className={style.login__formClose}
              type="button"
              onClick={onModalClick}
            >
              <span>
                <svg focusable="false" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </span>
            </button>
            <div className={style.login__formEdit}>
              <div className={style.login__formEditTitle}>
                Войдите в аккаунт Domino&apos;s
              </div>
              <div className={style.login__formEditItem}>
                <label className={style.login__label} htmlFor="loginEMail">
                  Email
                  <input
                    className={style.login__input}
                    type="text"
                    id="loginEMail"
                  />
                </label>
              </div>
              <div className={style.login__formEditItem}>
                <label className={style.login__label} htmlFor="loginPass">
                  Пароль
                  <input
                    className={style.login__input}
                    type="password"
                    id="loginPass"
                  />
                </label>
              </div>
              <button className={style.login__btn} type="button">
                Boйти
              </button>
              <div>
                <a
                  className={style.login__formEditLink}
                  href="https://dominos.by/"
                >
                  Забыли пароль?
                </a>
              </div>
              <div>
                <a
                  className={style.login__formEditLink}
                  href="https://dominos.by/"
                >
                  Зарегистрироваться?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
