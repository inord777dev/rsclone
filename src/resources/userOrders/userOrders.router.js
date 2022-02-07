const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const userOrdersService = require('./userOrders.service');
const { userOrders } = require('../../utils/validation/schemas');
const { validator } = require('../../utils/validation/validator');

router.get('/', async (req, res) => {
  const orders = await userOrdersService.get(req.userId);
  res.status(OK).send(orders.map(x => x.toResponse()));
});

router.put('/:orderId', validator(userOrders, 'body'), async (req, res) => {
  const setting = await userOrdersService.upsert(
    req.userId,
    req.orderId,
    req.body
  );
  res.status(OK).send(setting.toResponse());
});

module.exports = router;
