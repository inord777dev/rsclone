import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import style from './login.module.scss';
import CookieService from '../../services/CookieService';
import { ICurrentUser } from '../../common/types';

type LoginProps = {
  loginVisible: boolean,
  currentUser: ICurrentUser,
  onLoginClose: () => void,
  onCurrentUserSet: (user: ICurrentUser) => void
};

type ReqData = {
  email: string,
  password: string,
};

type ResData = {
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
};

export default function Login({
  loginVisible, onLoginClose, onCurrentUserSet, currentUser,
}: LoginProps) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const onPasswordChaned = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const user = { ...currentUser };
    user.email = (e.target as HTMLInputElement).value;
    onCurrentUserSet(user);
  };

  async function Signin() {
    const reqData:ReqData = {
      email: currentUser.email,
      password,
    };

    await axios
      .post('https://rs-clone-pizza-service.herokuapp.com/signin', JSON.stringify(reqData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response?.data as ResData;
          const user = { ...currentUser };
          user.id = data.userId;
          user.name = data.name;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          CookieService.login(user.id, data.token);
          onCurrentUserSet(user);
          onLoginClose();
          navigate('/');
        }
      }).catch(() => {
      });
  }

  const onEnter = () => {
    Signin()
      .then(() => {})
      .catch(() => {});
  };

  return !loginVisible ? null : (
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
              onClick={onLoginClose}
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
                    value={currentUser.email}
                    onChange={onEmailChange}
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
                    value={password}
                    onChange={onPasswordChaned}
                  />
                </label>
              </div>
              <button className={style.login__btn} type="button" onClick={onEnter}>
                Boйти
              </button>
              {/* <div>
                <a
                  className={style.login__formEditLink}
                  href="/"
                >
                  Забыли пароль?
                </a>
              </div> */}
              <div>
                <a
                  className={style.login__formEditLink}
                  href="/"
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
