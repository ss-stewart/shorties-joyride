const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/lists');

// GET /api/favorite
router.get('/favorite', ordersCtrl.favorite);
// POST /api/favorite/bikes/:id
router.post('/favorite/bikes/:id', favouritesCtrl.addToFavorite);
// POST /api/favorite/save
router.post('/favorite/save', favouritesCtrl.save);
// POST /api/favorite/qty
router.put('/favorite/qty', favouritesCtrl.setBikeQtyInFavorite);

module.exports = router;
