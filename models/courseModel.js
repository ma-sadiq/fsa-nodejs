const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const courseSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  duration: { type: String, required: true },
  rating: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("courses", courseSchema);
