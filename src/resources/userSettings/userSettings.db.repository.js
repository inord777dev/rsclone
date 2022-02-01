const userSettings = require('./userSettings.model');
const { NOT_FOUND_ERROR } = require('../../errors/appErrors');

const get = async userId => {
  const setting = await userSettings.findOne({ userId });
  if (!setting) {
    throw new NOT_FOUND_ERROR('Cannot find setting');
  }

  return setting;
};

const upsert = async (userId, setting) =>
  userSettings.findOneAndUpdate(
    { userId },
    { $set: setting },
    { upsert: true, new: true }
  );

const remove = async userId => userSettings.deleteOne({ userId });

module.exports = { get, upsert, remove };
