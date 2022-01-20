const Pizza = require('./pizza.model');
const { NOT_FOUND_ERROR } = require('../../errors/appErrors');
const ENTITY_NAME = 'pizza';

const getAll = async () => Pizza.find();

const get = async id => {
  const word = await Pizza.findOne({ _id: id });
  if (!word) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { id });
  }
  return word;
};

module.exports = { getAll, get };
