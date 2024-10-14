

const express = require('express');
const categoriesModel = require('../models/categories.model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const categories = await categoriesModel.find();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  router.post('/', async (req, res) => {
    const { category, imageUrl } = req.body; 
    const newImage = new categoriesModel({
      category,
      imageUrl,
    });
    
    try {
      const savedImage = await newImage.save();
      res.status(201).json(savedImage); 
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  module.exports = router;
  
  
  