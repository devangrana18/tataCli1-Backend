

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discountedPrice: { type: Number},
  description: String,
  imageUrl: String,
  category:["String"],
  brand:String,
  stock:Number,
});

module.exports = mongoose.model('Product', productSchema);



