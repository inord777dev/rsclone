const userOrdersRepo = require('./userOrders.db.repository');

const get = async userId => userOrdersRepo.get(userId);

const upsert = async (userId, settings) =>
  userOrdersRepo.upsert(userId, { ...settings, userId });

const remove = async userId => userOrdersRepo.remove(userId);

module.exports = { get, upsert, remove };
