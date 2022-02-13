const UserOrders = require('../userOrders/userOrders.model');

const getOrders = async () => {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);

  function filter() {
    return this.date >= start;
  }

  return await UserOrders.$where(filter);
};

module.exports = { getOrders };
