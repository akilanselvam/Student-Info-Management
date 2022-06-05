const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Please enter your name'],
    minlength: [6, 'A Name must have minimum 6 Characters'],
    maxlength: [15, 'A name must have Maximum 15 Characters'],
    validate: [validator.isAlpha, 'A tour Name should Only Contain characters'],
  },
  studentAge: {
    type: String,
    required: [true, 'Age is Missing'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is Missing'],
  },
  city: {
    type: String,
    required: [true, 'Tell us your city'],
  },
  course: {
    type: String,
    required: [true, 'Course Field is Empty'],
  },
  duration: {
    type: String,
    required: [true, 'duration Field is Empty'],
  },
  collegeName: {
    type: String,
    required: [true, 'CollegeName Field is Empty'],
  },
  emailId: {
    type: String,
    required: [true, 'Please Enter your Email Id'],
    unique: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
