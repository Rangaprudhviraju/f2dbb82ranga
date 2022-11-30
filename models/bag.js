const mongoose = require("mongoose")
const BagSchema = mongoose.Schema({
    Bag_Name: {type: String,required: [true, 'Name of the Bag cannot be empty']},
    Bag_Company: {type: String,required: [true,'Company of the Bag cannot be empty']},
    Bag_Size:{type: String,required:[true,'Size of the Bag cannot be empty']},
    Bag_Rating:{type: String,required:[true,'Rating of the Bag cannot be empty']}
})

module.exports = mongoose.model("Bag",
BagSchema)