const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  input: {
    type: Object,
    required: true,
  },
  output: {
    type: Object,
    required: true,
  },
  issuer: {
    type: String,
    default: "",
  },
  detail: {
    type: String,
    default: "",
  },
  detail_input: {
    type: String,
    default: "",
  },
  detail_output: {
    type: String,
    default: "",
  },
  note: {
    type: String,
    default: "",
  },
  image: {
    type: String,
  },
  pdfLink: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  ex_input: {
    type: Object,
    default: "",
  },
  ex_output: {
    type: Object,
    default: "",
  },
  status: {
    type: Boolean,
    default: 0,
  },
  finished: {
    type: Number,
    default: 0,
  },
});

mongoose.model("question", questionSchema);
