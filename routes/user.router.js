const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

//GET /viewUser
router.get('/viewUser', userController.viewUser);

//GET /createForm
router.get('/register', userController.createForm);
//POST /createUser
router.post('/register', userController.createUser);

module.exports = router;