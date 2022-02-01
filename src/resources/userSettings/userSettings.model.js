const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const UserSettingsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    name: String,
    tel: String,
    bonusCount: String,
    city: String,
    street: String,
    home: String,
    flat: String,
    stage: String,
    code: String
  },
  { collection: 'userSettings' }
);

addMethods(UserSettingsSchema);

module.exports = mongoose.model('UserSettings', UserSettingsSchema);
