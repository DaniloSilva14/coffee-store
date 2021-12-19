'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');

router.get('/', authService.authorize, controller.get)
router.post('/', authService.authorize, controller.post);
router.post('/change-status', controller.changeStatus);

module.exports = router;