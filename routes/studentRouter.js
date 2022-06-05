const express = require('express');
const router = express.Router();
const studentController = require('./../Controller/studentController');

router.param('id', studentController.quickcheck);
router
  .route('/')
  .get(studentController.getAllStudentsDetail)
  .post(studentController.createStudentDetail);
router
  .route('/:id')
  .get(studentController.getStudentDetail)
  .patch(studentController.updateStudentDetail)
  .delete(studentController.deleteStudentDetail);

module.exports = router;
