const { OK } = require('http-status-codes');
const router = require('express').Router();

const pizzaService = require('./pizza.service');
const { BAD_REQUEST_ERROR } = require('../../errors/appErrors');
const extractQueryParam = require('../../utils/getQueryNumberParameter');

router.route('/').get(async (req, res) => {
  const page = extractQueryParam(req.query.page, 0);
  const group = extractQueryParam(req.query.group, 0);

  if (isNaN(page) || isNaN(group)) {
    throw new BAD_REQUEST_ERROR(
      'Wrong query parameters: the group, page numbers should be valid integers'
    );
  }

  const pizzas = await pizzaService.getAll({
    page,
    group
  });
  res.status(OK).send(pizzas.map(pizza => pizza.toResponse()));
});

router.route('/:id').get(async (req, res) => {
  const pizza = await pizzaService.get(req.params.id);
  res.status(OK).send(pizza.toResponse());
});

module.exports = router;
