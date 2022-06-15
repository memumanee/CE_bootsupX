const mongoose = require("mongoose");

const submitSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  questionID: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  creatAt: {
    type: Date,
  },
});

mongoose.model("submit", submitSchema);
