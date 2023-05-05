//Library
const express = require('express');
//Logic
const homeController = require('../controllers/home.controller');
//Function
const router = express.Router();

router.get('/', homeController.home);

module.exports = router;