var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
 res.render('bag', { title: 'Search Results bag' });
});

var express = require('express');
const bag_controllers= require('../controllers/bag');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET bags */
router.get('/', bag_controllers.Bag_view_all_Page);
module.exports = router;

/* GET detail Bag page */ 
router.get('/detail', bag_controllers.Bag_view_one_Page);

 /* GET create costume page */ 
router.get('/create', secured, bag_controllers.Bag_create_Page);

/* GET create update page */ 
router.get('/update', secured, bag_controllers.Bag_update_Page); 


// GET delete costume page */ 
router.get('/delete', secured, bag_controllers.Bag_delete_Page);