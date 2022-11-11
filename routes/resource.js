var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Bag_controller = require('../controllers/Bag');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Bag ROUTES ///
// POST request for creating a Bag.
router.post('/Bag', Bag_controller.Bag_create_post);
// DELETE request to delete Bag.
router.delete('/Bag/:id', Bag_controller.Bag_delete);
// PUT request to update Bag.
router.put('/Bag/:id', Bag_controller.Bag_update_put);
// GET request for one Bag.
router.get('/Bag/:id', Bag_controller.Bag_detail);
// GET request for list of all Bag items.
router.get('/Bag', Bag_controller.Bag_list);
module.exports = router;
// GET request for one bag.

router.get('/Bag/:id', Bag_controller.Bag_detail);