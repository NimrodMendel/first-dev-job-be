const mongoose = require("mongoose");
const validator = require("validator");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job title is required"],
    maxlength: [255, "Can't be longer than 255 characters"],
  },
  description: {
    type: String,
    required: [true, "Job description is required"],
    maxlength: [255, "Can't be longer than 255 characters"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    enum: ["Remote", "Office"],
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Companies",
  },
  salary: {
    type: String,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = { Job };
