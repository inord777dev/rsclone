const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const { MIN_PASSWORD_LENGTH } = require('../../common/config');

const schemas = {
  id: Joi.object({ id: Joi.objectId() }),
  wordId: Joi.object({ id: Joi.objectId(), wordId: Joi.objectId() }),
  pizzaId: Joi.object({ id: Joi.objectId(), pizzaId: Joi.objectId() }),
  user: Joi.object()
    .options({ abortEarly: false, allowUnknown: true })
    .keys({
      name: Joi.string().max(200),
      email: Joi.string().email({ tlds: { allow: false } }),
      password: Joi.string().min(MIN_PASSWORD_LENGTH)
    }),
  userSettings: Joi.object().options({
    abortEarly: false,
    allowUnknown: false
  }),
  userOrders: Joi.object().options({ abortEarly: false, allowUnknown: false })
};

module.exports = schemas;
