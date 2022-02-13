const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const statisticService = require('./statistic.service');

router.get('/orders', async (req, res) => {
  const orders = await statisticService.getOrders();
  res.status(OK).send(orders.map(x => x.toResponse()));
});

module.exports = router;
