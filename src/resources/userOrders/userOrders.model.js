const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const UserOrdersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    products: [
      {
        id: String,
        key: String,
        name: String,
        ingredients: String,
        image: String,
        price: String,
        weith: String,
        isHit: Boolean,
        count: Number,
        components: [
          {
            type: String
          }
        ]
      }
    ],
    date: Date,
    price: Number,
    payment: Number,
    userSettings: {
      userId: String,
      name: String,
      tel: String,
      bonusCount: String,
      city: String,
      street: String,
      home: String,
      flat: String,
      stage: String,
      gate: String,
      code: String
    }
  },
  { collection: 'userOrders' }
);

addMethods(UserOrdersSchema);

module.exports = mongoose.model('UserOrders', UserOrdersSchema);
