const express = require('express');
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').patch(updateUser).delete(deleteUser).get(getUser);
module.exports = router;
