const mongoose = require("mongoose")
const BagSchema = mongoose.Schema({
Bag_Name: String,
Bag_Company: String,
Bag_Size: Number,
Bag_Rating: Number
})

module.exports = mongoose.model("Bag",
BagSchema)