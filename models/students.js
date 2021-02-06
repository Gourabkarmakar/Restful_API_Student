const mongoose = require('mongoose'); /* Requir This Package */
const validator = require('validator'); /*For validation Required */

// Create a Schema for Students
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
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
  }

})

// we Will Create a New Collection in database
const student = new mongoose.model('Student', studentSchema);
module.exports = student;
