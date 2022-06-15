const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  group: {
    type: Number,
    required: true,
  },
  finished: {
    type: Number,
    default: 0,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
