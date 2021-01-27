const mongoose = require("mongoose");
const validator = require("validator");

const companySchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: [validator.isEmail, "Must be a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be minimum 6 characters long"],
  },
  name: {
    type: String,
    required: [true, "Company name is required"],
    minlength: [2, "Name must be at least two characters long"],
    maxlength: [20, "Name cannot be longer than two characters long"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    validate: [validator.isAlpha, "Location cannot contain numbers"],
    minlength: [2, "Location must be at least two characters long"],
    maxlength: [20, "Location cannot be longer than two characters long"],
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      default: null,
    },
  ],
  logo: {
    type: String,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = { Company };
