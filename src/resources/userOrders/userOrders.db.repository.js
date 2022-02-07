const userOrders = require('./userOrders.model');
const { NOT_FOUND_ERROR } = require('../../errors/appErrors');

const get = async userId => {
  const setting = await userOrders.findOne({ userId });
  if (!setting) {
    throw new NOT_FOUND_ERROR('Cannot find orders');
  }

  return setting;
};

const upsert = async (userId, setting) =>
  userOrders.findOneAndUpdate(
    { userId },
    { $set: setting },
    { upsert: true, new: true }
  );

const remove = async userId => userOrders.deleteOne({ userId });

module.exports = { get, upsert, remove };
