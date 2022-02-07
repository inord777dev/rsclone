const userOrders = require('./userOrders.model');

const get = async userId => await userOrders.find({ userId });

const upsert = async (userId, orderId, order) =>
  userOrders.findOneAndUpdate(
    { userId, orderId },
    { $set: order },
    { upsert: true, new: true }
  );

const remove = async userId => userOrders.deleteOne({ userId });

module.exports = { get, upsert, remove };
