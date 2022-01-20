const pizzaRepo = require('./pizza.db.repository');

const getAll = async conditions => pizzaRepo.getAll(conditions);

const get = async pizzaId => {
  const pizza = await pizzaRepo.get(pizzaId);

  return pizza;
};

module.exports = { getAll, get };
