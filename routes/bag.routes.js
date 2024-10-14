const express = require('express');
const router = express.Router();
const Bag = require('../models/bag.model');

router.get('/', async (req, res) => {  
    try {
      const bag = await Bag.find().populate('products');
      console.log(bag)
      if (!bag) {
        return res.status(200).json({ products: [] });
      }
      res.status(200).json(bag);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bag', error });
    }
  });
  
router.post('/', async (req, res) => {
  const  productId  = req.body.productId;
  const bag = new Bag({
    products:productId
  })
  console.log(productId)
  try {
    const newBag = await bag.save(productId);
    res.status(200).json({ message: 'Product added to bag successfully', newBag });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to bag', error });
  }
});

module.exports = router;
