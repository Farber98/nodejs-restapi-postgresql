'use strict'

var express = require('express');
var usersController = require('../controllers/usersController');
var router = express.Router();

router.get('/',usersController.getUsers);
router.get('/:id',usersController.getUserById);
router.post('/create',usersController.createUser);
router.delete('/delete/:id',usersController.deleteUser);
router.put('/update/:id',usersController.updateUser);

module.exports = router;