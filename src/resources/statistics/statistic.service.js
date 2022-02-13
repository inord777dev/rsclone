const statisticRepo = require('./statistic.db.repository');

const getOrders = async () => statisticRepo.getOrders();

module.exports = { getOrders };
