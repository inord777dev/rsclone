const User = require('./user.model');
const UserSettings = require('../userSettings/userSettings.model');
const { NOT_FOUND_ERROR, ENTITY_EXISTS } = require('../../errors/appErrors');
const ENTITY_NAME = 'user';
const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

const getUserByEmail = async email => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { email });
  }

  return user;
};

const getAllSettings = async () => {
  const users = await User.find().populate('settings');
  return users;
};

const get = async id => {
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { id });
  }

  return user;
};

const save = async user => {
  try {
    const createdUser = await User.create(user);
    UserSettings.create({
      userId: createdUser._id,
      name: '',
      tel: '',
      bonusCount: '',
      city: '',
      street: '',
      home: '',
      flat: '',
      stage: '',
      gate: '',
      code: ''
    });
    return createdUser;
  } catch (err) {
    if (err.code === MONGO_ENTITY_EXISTS_ERROR_CODE) {
      throw new ENTITY_EXISTS(`${ENTITY_NAME} with this e-mail exists`);
    } else {
      throw err;
    }
  }
};

const update = async (id, user) =>
  User.findOneAndUpdate({ _id: id }, { $set: user }, { new: true });

const remove = async id => User.deleteOne({ _id: id });

module.exports = { get, getUserByEmail, getAllSettings, save, update, remove };
