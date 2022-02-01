const userSettingsRepo = require('./userSettings.db.repository');

const get = async userId => userSettingsRepo.get(userId);

const upsert = async (userId, settings) =>
  userSettingsRepo.upsert(userId, { ...settings, userId });

const remove = async userId => userSettingsRepo.remove(userId);

module.exports = { get, upsert, remove };
