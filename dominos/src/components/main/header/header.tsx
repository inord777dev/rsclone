/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import style from './header.module.scss';
import companyLogo from '../../../assets/front/logo_header.png';
import { ICurrentUser } from '../../../common/types';

type HeaderProps = {
  currentUser: ICurrentUser;
  onLoginShow: () => void
};

export default function Header({ onLoginShow, currentUser }:HeaderProps) {
  return (
    <div className={style.content_header_bg}>
      <div className={style.content_header}>
        <div className={style.content_header_logo}>
          <a href="/"><img className={style.content_header_logo_img} src={companyLogo} alt="no img" /></a>
        </div>
        <div className={style.content_header_information}>
          <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#e31837"><g><path d="m14.01512,0.75l-4.27794,0c-0.58821,0 -1.06947,0.48126 -1.06947,1.06947c0,0.58821 0.48126,1.06947 1.06947,1.06947l4.27794,0c0.58821,0 1.06947,-0.48126 1.06947,-1.06947c0,-0.58821 -0.48126,-1.06947 -1.06947,-1.06947zm-2.139,13.90306c0.58821,0 1.06947,-0.48126 1.06947,-1.06947l0,-4.27786c0,-0.58821 -0.48126,-1.06947 -1.06947,-1.06947c-0.58821,0 -1.06947,0.48126 -1.06947,1.06947l0,4.27786c0,0.58821 0.48126,1.06947 1.06947,1.06947zm7.51842,-7.06917l0.8021,-0.8021c0.4064,-0.4064 0.41709,-1.08016 0,-1.49725l-0.01069,-0.01069c-0.41709,-0.41709 -1.08016,-0.4064 -1.49725,0l-0.8021,0.8021c-1.65767,-1.32614 -3.74313,-2.11754 -6.01047,-2.11754c-5.13344,0 -9.49686,4.23509 -9.62519,9.36852c-0.13903,5.43289 4.2137,9.88187 9.62519,9.88187c5.32601,0 9.62527,-4.30995 9.62527,-9.62519c0,-2.26727 -0.7914,-4.35273 -2.10685,-5.9997zm-7.51842,13.48597c-4.13883,0 -7.48626,-3.34743 -7.48626,-7.48626c0,-4.13883 3.34743,-7.48626 7.48626,-7.48626c4.1389,0 7.48633,3.34743 7.48633,7.48626c0,4.13883 -3.34743,7.48626 -7.48633,7.48626z" /></g></svg>
          <div className={style.content_header_information_text}>
            <div className={style.text_info}>
              30 минут доставка
            </div>
            <a className={style.text_info_additionally_type} href="/">подробнее</a>
          </div>
        </div>
        <div className={style.content_header_info_telephone}>
          <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00537a"><g><path d="m13.02024,4.48316c3.46937,0.4364 6.18599,3.15302 6.62239,6.62243c0.06546,0.55642 0.5346,0.96009 1.0801,0.96009c0.04364,0 0.08728,0 0.13092,-0.01091c0.60006,-0.07637 1.02555,-0.62188 0.94918,-1.22193c-0.55642,-4.46223 -4.05856,-7.96438 -8.52075,-8.52079c-0.60006,-0.06546 -1.14556,0.36003 -1.21102,0.96009c-0.07637,0.60006 0.34912,1.14556 0.94918,1.21102zm0.41458,2.30203c-0.57824,-0.15274 -1.17829,0.19638 -1.33103,0.78553c-0.15274,0.58915 0.19638,1.17829 0.78553,1.33103c1.14552,0.29457 2.04015,1.1892 2.34563,2.34567c0.13092,0.49095 0.56733,0.81826 1.05828,0.81826c0.08728,0 0.18547,-0.01091 0.27275,-0.03273c0.57824,-0.15274 0.92736,-0.7528 0.78553,-1.33103c-0.51277,-1.93109 -2.00746,-3.42577 -3.91668,-3.91673zm6.51329,8.83719l-2.77117,-0.31639c-0.66552,-0.07637 -1.32012,0.15274 -1.78926,0.62188l-2.00742,2.00746c-3.08756,-1.57106 -5.6187,-4.09129 -7.18976,-7.18976l2.01837,-2.01837c0.46913,-0.46913 0.69825,-1.12374 0.62188,-1.78926l-0.31639,-2.74935c-0.13092,-1.10192 -1.05828,-1.93109 -2.17111,-1.93109l-1.88745,0c-1.23284,0 -2.25839,1.02555 -2.18202,2.25839c0.57824,9.31723 8.02984,16.75792 17.33611,17.33616c1.23284,0.07637 2.25839,-0.94918 2.25839,-2.18202l0,-1.88745c0.01091,-1.10192 -0.81826,-2.02928 -1.92018,-2.1602z" /></g></svg>
          <a className={style.telephone_size} href="tel:7717">7717</a>
        </div>
        <div className={style.content_header_buttons}>
          <select name="languages" className={style.languages}>
            <option value="RUS">Русский</option>
            <option value="ENG">Английский</option>
          </select>
          <select name="city" className={style.city}>
            <option value="RUS">Минск</option>
            <option value="ENG">Гомель</option>
            <option value="RUS">Брест</option>
            <option value="ENG">Солигорск</option>
            <option value="RUS">Витебск</option>
            <option value="ENG">Барановичи</option>
            <option value="RUS">Могилев</option>
            <option value="ENG">Гродно</option>
            <option value="ENG">Бобруйск</option>
          </select>
          <button type="button" className={style.button_show} onClick={onLoginShow}>
            {currentUser.id === '' ? 'Войти' : 'Профиль'}
          </button>
        </div>
      </div>
    </div>
  );
}
