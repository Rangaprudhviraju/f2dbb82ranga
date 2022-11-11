var Bag = require('../models/Bag');
// List of all Bag
exports.Bag_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Bag list');
};

exports.Bag_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Bag.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

// Handle bag update form on PUT.

exports.Bag_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Bag.findById( req.params.id)
        // Do updates of properties
        if(req.body.Bag_Name)
               toUpdate.Bag_Name = req.body.Bag_Name;
        if(req.body.Bag_Company) toUpdate.Bag_Company = req.body.Bag_Company;      
        if(req.body.Bag_Size) toUpdate.Bag_Size = req.body.Bag_Size;
        if(req.body.Bag_Rating) toUpdate.Bag_Rating = req.body.Bag_Rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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