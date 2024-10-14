const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BagSchema = new Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Bag', BagSchema);
