const express = require('express');
const router = express.Router();
const bikesCtrl = require('../../controllers/api/bikes');

// GET /api/bikes
router.get('/', bikesCtrl.index);
// GET /api/bikes/:id
router.get('/:id', bikesCtrl.show);

module.exports = router;
