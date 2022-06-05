const express = require('express');
const router = express.Router();
const studentController = require('./../Controller/studentController');
const authController = require('./../Controller/authController');
router
  .route('/')
  .get(studentController.getAllStudentsDetail)
  .post(authController.protect, studentController.createStudentDetail);
router
  .route('/:id')
  .get(studentController.getStudentDetail)
  .patch(studentController.updateStudentDetail)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    studentController.deleteStudentDetail
  );

module.exports = router;
