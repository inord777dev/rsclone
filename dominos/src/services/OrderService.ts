import { IOrder } from '../common/types';

class OrderService {
  // eslint-disable-next-line class-methods-use-this
  numberString(order: IOrder): string {
    return order.id.slice(-12).match(/\S{3}/g)?.join('.') as string;
  }
}

export default new OrderService();
