import React from 'react';

import style from './admin.module.scss';
import Statistics from './statistics/statistics';

export default function Profile() {
  return (
    <div className={style.profile}>
      <div className={style.profile__wrap}>
        <div className={style.main}>
          <div className={style.header}>
            <div className={style.header__title}>Администрирование</div>
            <div>
              <a className={style.linkExit} href="/">
                Выйти
              </a>
            </div>
          </div>
          <div className={style.user}>
            <div className={style.user__title}>Заказы</div>
            <div className={style.user__content} />
          </div>
          <div className={style.user}>
            <div className={style.user__title}>Пользователи</div>
            <div className={style.user__content} />
          </div>
        </div>
        <div className={style.history}>
          <div className={style.header}>
            <div className={style.header__title}>Статистика</div>
          </div>
          <div className={style.history__context}>
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}
