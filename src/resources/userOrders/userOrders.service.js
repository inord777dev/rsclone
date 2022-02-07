const userOrdersRepo = require('./userOrders.db.repository');

const get = async userId => userOrdersRepo.get(userId);

const upsert = async (userId, orderId, order) =>
  userOrdersRepo.upsert(userId, orderId, { ...order, userId, orderId });

const remove = async userId => userOrdersRepo.remove(userId);

module.exports = { get, upsert, remove };
