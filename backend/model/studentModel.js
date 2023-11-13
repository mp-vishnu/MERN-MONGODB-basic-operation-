const mongoose = require("mongoose");

// First Schema
const firstSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  }
});

// Second Schema
const secondSchema = mongoose.Schema({
  totalmark: {
    type: Number,
    required: [true, "Please Enter Total Marks"],
    //trim: true,
  }
});

// Export Models with collection names
const firstModel = mongoose.model("table1", firstSchema);
const secondModel = mongoose.model("table2", secondSchema);

module.exports = {
  firstModel,
  secondModel,
};
