const Pizza = require('./pizza.model');
const { NOT_FOUND_ERROR } = require('../../errors/appErrors');
const ENTITY_NAME = 'pizza';

const getAll = async conditions => {
  const { group, page } = conditions;

  return Pizza.find({ group, page });
};

const get = async id => {
  const pizza = await Pizza.findOne({ _id: id });
  if (!pizza) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { id });
  }
  return pizza;
};

module.exports = { getAll, get };
