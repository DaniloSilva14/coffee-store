'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', authService.isAdmin, controller.post);
//router.put('/:id', authService.isAdmin, controller.put);
router.put('/:id', controller.put);
router.put('/sell/:id', authService.authorize, controller.sellProduct);
// router.delete('/', authService.isAdmin, controller.delete);
router.delete('/', controller.delete);

module.exports = router;
