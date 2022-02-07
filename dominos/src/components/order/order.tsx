import React, {
  FormEvent, useState, useCallback, useEffect,
} from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';

import CookieService from '../../services/CookieService';
import style from './order.module.scss';
import Address from '../address/address';
import { useOutletContex } from '../main/main';
import Product from './product/product';
import { addProduct, clearProducts } from '../../store/action';
import {
  GlobalState, IOrder, IProduct, UserSettings,
} from '../../common/types';

export default function Order() {
  const { currentUser } = useOutletContex();

  const order: IOrder = useSelector(
    (state: GlobalState) => state.order,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const aclearProductsCallback = useCallback(
    () => dispatch(clearProducts()),
    [dispatch],
  );

  const addPizzaCallback = useCallback(
    (item: IProduct) => dispatch(addProduct(item)),
    [dispatch],
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

  useEffect(() => {
    async function getSettings() {
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
    getSettings()
      .then(() => {})
      .catch(() => {});
  }, [currentUser, token]);

  async function userOrderSend() {
    const currentOrder = { ...order, userSettings };
    const now = new Date();
    currentOrder.date = now.toJSON();
    currentOrder.orderId = nanoid();
    await axios
      .put<IOrder>(
      `https://rs-clone-pizza-service.herokuapp.com/users/${currentUser.id}/orders/${currentOrder.orderId}`,
      JSON.stringify(currentOrder),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then((response) => {
        if (response.status === 200) {
          aclearProductsCallback();
        }
      });
  }

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
              onClick={userOrderSend}
              disabled={!order.products.length}
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
            { order.products.map((product) => (
              <Product product={product} onDeleteProduct={onDeleteProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
