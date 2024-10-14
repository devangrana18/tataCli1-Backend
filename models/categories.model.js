

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category: String,
    imageUrl: String,
});

module.exports = mongoose.model("category", categorySchema);

