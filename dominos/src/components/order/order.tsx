import React, {
  FormEvent, useEffect, useState, useCallback,
} from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CookieService from '../../services/CookieService';
import style from './order.module.scss';
import Address from '../address/address';
import { useOutletContex } from '../main/main';
import Product from './product/product';
import { addProduct } from '../../store/action';

export default function Order() {
  const { currentUser } = useOutletContex();

  const dispatch: Dispatch<any> = useDispatch();

  const addPizzaCallback = useCallback(
    (item: IProduct) => dispatch(addProduct(item)),
    [dispatch],
  );

  const products: readonly IProduct[] = useSelector(
    (state: GlobalState) => state.order.products,
    shallowEqual,
  );
  // const products: IProduct[] = [
  //   {
  //     id: '61ea9104363cc72043f121f5',
  //     key: '4',
  //     name: 'Колбаски и опята',
  //     image: 'kolbaski_i_opyata_small-min.png',
  //     price: '26.89 руб.',
  //     weith: '600 гр',
  //     isHit: false,
  //     ingredients: 'Баварские колбаски, Опята, Сыр моцарелла, Соус Ранч, Горчица',
  //     count: 1,
  //   },
  // ];

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

  const onChangeUserSettings = (e: FormEvent<HTMLInputElement>) => {
    const settings : UserSettings = { ...userSettings };
    const input = e.target as HTMLInputElement;
    const prop = input.dataset.prop as string;
    settings[prop] = input.value;
    setUserSettings(settings);
  };

  const onDeleteProduct = (product: IProduct) => {
    addPizzaCallback(product);
  };

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
              Отправить
            </button>
          </div>
        </div>
        <div className={style.history}>
          <div className={style.header}>
            <div className={style.header__title}>Ваш заказ</div>
          </div>
          <div className={style.history__context}>
            { products.map((product) => (
              <Product product={product} onDeleteProduct={onDeleteProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
