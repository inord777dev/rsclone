const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const PizzaSchema = new Schema(
  {
    key: String,
    name: String,
    image: String,
    price: String,
    weight: String,
    hit: Boolean
  },
  { collection: 'pizza' }
);

addMethods(PizzaSchema);

module.exports = mongoose.model('Pizza', PizzaSchema);
