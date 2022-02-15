import React, { useEffect, useState } from 'react';
import axios from 'axios';

import style from './admin.module.scss';
import Statistics from './statistics/statistics';
import CookieService from '../../services/CookieService';
import DataService from '../../services/DateService';
import OrderService from '../../services/OrderService';
import { ICurrentUser, IOrder, OrderStatus } from '../../common/types';

export default function Admin() {
  const token = CookieService.getToken();

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [users, setUsers] = useState<ICurrentUser[]>([]);
  const [ordersVisible, setOrdersVisible] = useState(true);

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
            setUsers(response?.data);
          }
        });
    }
    getOrders()
      .then(() => {})
      .catch(() => {});
    getUsers()
      .then(() => {})
      .catch(() => {});
  }, [token]);

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
            console.log(currentOrder?.status);
            setOrders(ordersMap);
          }
        });
    }
  };

  return (
    <div className={style.profile}>
      <div className={style.profile__wrap}>
        <div className={style.main}>
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
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>
                      <select value={user.settings?.role}>
                        <option value="admin">Администратор</option>
                        <option value="user">Пользователь</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type="button"
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
        <div className={style.statistics}>
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
