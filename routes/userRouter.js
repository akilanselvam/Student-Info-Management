const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const authController = require('../Controller/authController');

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router
  .route('/updatePassword')
  .patch(authController.protect, authController.updatePassword);
router
  .route('/')
  .get(authController.protect, userController.getallusers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
