const mongoose = require('mongoose'); /* Requir This Package */
const validator = require('validator'); /*For validation Required */

// Create a Schema for Students
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 10,
    lowercase: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: [true, "Email Already Reister Try With Another Email"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email")
      }
    }
  },
  phone: {
    type: Number,
    min: 10,
    maxlength: 10,
    required: true,
    unique: [true, "Phone Number Already registered Try with Another"]
  },
  address: {
    type: String,
    required: true,
    lowercase: true
  }

})

// we Will Create a New Collection in database
const student = new mongoose.model('Student', studentSchema);
module.exports = student;
