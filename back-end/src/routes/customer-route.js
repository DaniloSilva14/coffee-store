'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-service');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);
router.post('/change-permission', authService.isAdmin, controller.changePermission);
router.delete('/', authService.isAdmin, controller.delete);
router.get('/', authService.isAdmin, controller.get);
router.put('/:id', controller.put);

module.exports = router;