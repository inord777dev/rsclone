const UserOrders = require('../userOrders/userOrders.model');

const getOrders = async () => {
  const now = new Date();
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1, 0, 1);
  start.setHours(0, 0, 0, 0);
  return await UserOrders.find({ date: { $gt: start, $lt: now } });
};

module.exports = { getOrders };
