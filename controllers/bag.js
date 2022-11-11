var Bag = require('../models/Bag');
// List of all Bag
exports.Bag_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Bag list');
};
// for a specific Bag.
exports.Bag_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Bag detail: ' + req.params.id);
};
// Handle Bag create on POST.
exports.Bag_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Bag create POST');
};
// Handle Bag delete form on DELETE.
exports.Bag_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Bag delete DELETE ' + req.params.id);
};
// Handle Bag update form on PUT.
exports.Bag_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Bag update PUT' + req.params.id);
};
// VIEWS

   // List of all Bag
exports.Bag_list = async function(req, res) {
    try{
    theBag = await Bag.find();
    res.send(theBag);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Bag_view_all_Page = async function(req, res) {
    try{
    theBag = await Bag.find();
    res.render('Bag', { title: 'Bag Search Results', results: theBag });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Bag_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bag();
    document.Bag_Name = req.body.Bag_Name;
    document.Bag_Company = req.body.Bag_Company;
    document.Bag_Size = req.body.Bag_Size;
    document.Bag_Rating = req.body.Bag_Rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}