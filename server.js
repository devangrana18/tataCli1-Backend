

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const productsRoute = require("./routes/product.routes");
const userRouts = require("./routes/auth.routes")
const category = require("./routes/categories.routes")
const BagsRoutes = require("./routes/bag.routes")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
app.get("/",(req,res)=>{
  res.send("connected")
})
app.use("/api/products", productsRoute);
app.use("/api/auth",userRouts)
app.use("/categories", category)
app.use('/api/bag', BagsRoutes);
app.get('/api/products/search', async (req, res) => {
  const searchQuery = req.query.q;

  try {
    const products = await Product.find({
      name: { $regex: searchQuery, $options: 'i' },
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

