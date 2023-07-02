const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers');
const auth = require('../../middlewares/auth')
router.get(
    '/',
    UserController.getUsers
);

router.get(
    '/:userId',auth,
    UserController.getUserById
);

module.exports = router;