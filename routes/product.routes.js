

const express = require('express');
const router = express.Router();
const Product = require('../models/product.models');
router.get('/:category', async (req, res) => {
  try {
      const category = req.params.category;
      const products = await Product.find({ category }); // Find products by category
      res.json(products);
      
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    discountedPrice:req.body.discountedPrice,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    category:req.body.category,
    brand:req.body.brand,
    stock:req.body.stock
  });
  try {
    const newProduct = await product.insertMany();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// router.post('/', async (req, res) => {
//   try {
//     const products = await Product.insertMany(req.body);
//     res.status(201).json(products);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });




module.exports = router;

