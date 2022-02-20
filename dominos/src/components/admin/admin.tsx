import React, { useEffect, useState } from 'react';
import axios from 'axios';

import style from './admin.module.scss';
import Statistics from './statistics/statistics';
import CookieService from '../../services/CookieService';
import DataService from '../../services/DateService';
import OrderService from '../../services/OrderService';
import {
  ICurrentUser, IOrder, OrderStatus, UserSettings,
} from '../../common/types';
import { useOutletContex } from '../main/main';

export default function Admin() {
  const { currentUser } = useOutletContex();
  const token = CookieService.getToken();

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [users, setUsers] = useState<ICurrentUser[]>([]);
  const [ordersVisible, setOrdersVisible] = useState(true);
  const [isAdmin, setIaAdmin] = useState(false);

  useEffect(() => {
    async function getOrders() {
      await axios
        .get<IOrder[]>(
        'https://rs-clone-pizza-service.herokuapp.com/statistics/orders',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            setOrders(response?.data.sort((a, b) => {
              if (a.date > b.date) {
                return -1;
              }
              if (a.date < b.date) {
                return 1;
              }
              return 0;
            }));
          }
        });
    }
    async function getUsers() {
      await axios
        .get<ICurrentUser[]>(
        'https://rs-clone-pizza-service.herokuapp.com/users',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          if (response.status === 200) {
            const data:ICurrentUser[] = response?.data;
            const findedUser = data.find((x) => x.id === currentUser.id);
            if (findedUser && findedUser.settings.role === 'admin') {
              setUsers(data);
              setIaAdmin(true);
            }
          }
        })
        .catch(() => {});
    }

    setIaAdmin(false);

    getOrders()
      .then(() => {})
      .catch(() => {
      });
    getUsers()
      .then(() => {})
      .catch(() => {});
  }, [token, currentUser]);

  const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOrdersVisible((e.target as HTMLElement).dataset.page === 'orders');
  };

  const onClickOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const parent = target.closest('tr');
    const userId = parent?.dataset.userId as string;
    const orderId = parent?.dataset.orderId as string;
    let currentOrder: IOrder | null = null;
    const ordersMap = orders.map((order) => {
      const orderMap = { ...order };
      if (orderMap.orderId === orderId) {
        currentOrder = orderMap;
        switch (orderMap.status) {
          case OrderStatus.Created:
            orderMap.status = OrderStatus.Processed;
            break;
          case OrderStatus.Processed:
            orderMap.status = OrderStatus.Delivery;
            break;
          case OrderStatus.Delivery:
            orderMap.status = OrderStatus.Completed;
            break;
          case OrderStatus.Completed:
            orderMap.status = OrderStatus.Created;
            break;
          default:
        }
      }
      return orderMap;
    });
    if (currentOrder) {
      await axios
        .put<IOrder>(
        `https://rs-clone-pizza-service.herokuapp.com/users/${userId}/orders/${orderId}`,
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
            setOrders(ordersMap);
          }
        });
    }
  };

  const isSA = (user:ICurrentUser) => user.email === 'sa@dominos.by';

  async function userSettingsSave(userSettings:UserSettings) {
    await axios
      .put<UserSettings>(
      `https://rs-clone-pizza-service.herokuapp.com/users/${userSettings.userId}/settings`,
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
          setUsers(users.map((user) => {
            const userMap = { ...user };
            if (user.id === userSettings.userId) {
              userMap.settings.role = userSettings.role;
            }
            return userMap;
          }));
        }
      });
  }

  const onChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    const parent = target.closest('tr');
    const userSettings:UserSettings = {
      userId: parent?.dataset.settingsUserId as string,
      name: parent?.dataset.settingsName as string,
      tel: parent?.dataset.settingsTel as string,
      bonusCount: parent?.dataset.settingsBonusCount as string,
      city: parent?.dataset.settingsCity as string,
      street: parent?.dataset.settingsStreet as string,
      home: parent?.dataset.settingsHome as string,
      flat: parent?.dataset.settingsFlat as string,
      stage: parent?.dataset.settingsStage as string,
      gate: parent?.dataset.settingsGate as string,
      code: parent?.dataset.settingsCode as string,
      role: target.value,
    };
    userSettingsSave(userSettings)
      .then(() => {})
      .catch(() => {});
  };

  const onUserDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const parent = target.closest('tr');
    const userId = parent?.dataset.userId as string;
    await axios
      .delete(
        `https://rs-clone-pizza-service.herokuapp.com/users/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        if (response.status === 204) {
          setUsers(users.filter((userFilter) => userFilter.id !== userId));
        }
      });
  };

  return (
    <div className={style.profile}>
      <div className={style.profile__wrap}>
        <div className={style.main} hidden={isAdmin}>
          <div className={style.header}>
            <div className={style.header__title}>Нет доступа</div>
          </div>
        </div>
        <div className={style.main} hidden={!isAdmin}>
          <div className={style.header}>
            <div className={style.header__title}>Администрирование</div>
            <div className={style.profile__pages}>
              <button
                type="button"
                className={style.profile__page}
                data-visible={ordersVisible}
                data-page="orders"
                onClick={onClickPage}
              >
                Заказы
              </button>
              <button
                type="button"
                className={style.profile__page}
                data-visible={!ordersVisible}
                data-page="users"
                onClick={onClickPage}
              >
                Пользователи
              </button>
            </div>
          </div>
          <div className={style.order} data-visible={ordersVisible}>
            <div className={style.order__title}>Заказы</div>
            <table className={style.order__table}>
              <thead>
                <tr>
                  <th>Статус</th>
                  <th>Номер</th>
                  <th>Дата</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    data-order-id={order.orderId}
                    data-user-id={order.userId}
                  >
                    <td>
                      <button
                        type="button"
                        className={style.order__status}
                        data-status={order.status}
                        onClick={onClickOrder}
                      >
                        {order.status}
                      </button>
                    </td>
                    <td>{OrderService.numberString(order)}</td>
                    <td>{DataService.localString(order.date)}</td>
                    <td>{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={style.users} data-visible={!ordersVisible}>
            <div className={style.users__title}>Пользователи</div>
            <table className={style.users__table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Электронная почта</th>
                  <th>Роль</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    data-user-id={user.id}
                    data-settings-user-id={user.settings.userId}
                    data-settings-name={user.settings.name}
                    data-settings-tel={user.settings.tel}
                    data-settings-bonus-count={user.settings.bonusCount}
                    data-settings-city={user.settings.city}
                    data-settings-street={user.settings.street}
                    data-settings-home={user.settings.home}
                    data-settings-flat={user.settings.flat}
                    data-settings-stage={user.settings.stage}
                    data-settings-gate={user.settings.gate}
                    data-settings-code={user.settings.code}
                    data-settings-role={user.settings.role}
                  >
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>
                      <select
                        value={user.settings.role}
                        disabled={isSA(user)}
                        onChange={onChangeRole}
                      >
                        <option value="admin">Администратор</option>
                        <option value="user">Пользователь</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type="button"
                        disabled={isSA(user)}
                        onClick={onUserDelete}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.statistics} hidden={!isAdmin}>
          <div className={style.header}>
            <div className={style.header__title}>Статистика</div>
          </div>
          <div className={style.statistics__context}>
            <Statistics orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
}
