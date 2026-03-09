const express = require('express');
const { getUsers, deleteUser } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

router.get('/', protect, authorize('Admin'), getUsers);
router.delete('/:id', protect, authorize('Admin'), deleteUser);

module.exports = router;
