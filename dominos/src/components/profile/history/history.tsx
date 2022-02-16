import React from 'react';
import { IOrder } from '../../../common/types';
import style from './history.module.scss';
import DataService from '../../../services/DateService';

type HistoryProps = {
  orders: IOrder[];
};

export default function OrderAbout({ orders }: HistoryProps) {
  return (
    <div className={style.orderAbout}>
      { orders.length
        ? orders.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          }
          if (a.date < b.date) {
            return 1;
          }
          return 0;
        }).map((order) => {
          const id = order.id.slice(-12).match(/\d{3}/g)?.join('.') as string;
          return (
            <div className={style.history__item}>
              <div className={style.history__context}>
                <div className={style.history__header}>
                  <div className={style.history__title}>{`Заказ № ${id}`}</div>
                  <div className={style.history__text}>
                    {DataService.localString(order.date)}
                  </div>
                </div>
                <div className={style.history__footer}>
                  <div className={style.history__price}>{`${order.price} руб.`}</div>
                  <div className={style.history__text}>{`Товаров: ${order.products.length} шт.`}</div>
                </div>
              </div>
            </div>
          );
        }) : (
          <div className={style.history__message}>
            Кажется, вы еще ничего не заказывали...
          </div>
        )}
    </div>
  );
}
