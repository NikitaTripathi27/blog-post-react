const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers');

router.get(
    '/',
    UserController.getUsers
);

router.get(
    '/:userId',
    UserController.getUserById
);

module.exports = router;