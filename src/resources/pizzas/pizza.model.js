const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const PizzasSchema = new Schema(
  {
    key: String,
    name: String,
    components: String,
    image: String,
    price: String,
    weith: String,
    isHit: Boolean
  },
  { collection: 'pizzas' }
);

addMethods(PizzasSchema);

module.exports = mongoose.model('Pizzas', PizzasSchema);
