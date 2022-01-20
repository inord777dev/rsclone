const { OK } = require('http-status-codes');
const router = require('express').Router();

const pizzaService = require('./pizza.service');

router.route('/').get(async (req, res) => {
  const arr = await pizzaService.getAll();
  res.status(OK).send(arr.map(value => value.toResponse()));
});

router.route('/:id').get(async (req, res) => {
  const value = await pizzaService.get(req.params.id);
  res.status(OK).send(value.toResponse());
});

module.exports = router;
