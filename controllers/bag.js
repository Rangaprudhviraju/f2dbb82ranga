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
   // Handle bag create on POST.
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
// Handle bag delete on DELETE. 
exports.Bag_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Bag.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 // Handle a show one view with id specified by query 
 exports.Bag_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
    result = await Bag.findById( req.query.id) 
    res.render('Bagdetail',  
    { title: 'Bag Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};   

//Handle a show one view with id specified by query 
exports.Bag_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Bag.findById( req.query.id) 
        res.render('Bagdetail',  
{ title: 'Bag Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a Bag.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Bag_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Bagcreate', { title: 'Bag Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   //Handle building the view for updating a Bag. 
// query provides the id 
exports.Bag_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Bag.findById(req.query.id) 
        res.render('Bagupdate', { title: 'Bag Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Bag_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Bag.findById(req.query.id) 
        res.render('Bagdelete', { title: 'Bag Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 