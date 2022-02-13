const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const UserOrdersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    orderId: {
      type: String,
      required: true
    },
    date: Date,
    status: String,
    price: Number,
    payment: String,
    products: [
      {
        type: Object
      }
    ],
    userSettings: Object
  },
  { collection: 'userOrders' }
);

addMethods(UserOrdersSchema);

module.exports = mongoose.model('UserOrders', UserOrdersSchema);
