const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
//const middleware = require('../middlewares/authJWT');

//GET /viewUser
router.get('/viewUser', userController.viewUser);
//router.get('/viewUser', auth, userController.viewUser);

//GET /createForm
router.get('/createUser', userController.createForm);
//POST /createUser
router.post('/createUser', userController.createUser);

router.get('/editUser', userController.editForm);
router.post('/editUser', userController.editUser);

//GET /deleteUser
router.get('/deleteUser', userController.deleteUser);

module.exports = router;