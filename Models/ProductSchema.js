const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
   
    ProdName:String,
    ProdPrice:String,
    ProdType:String,
    ProdImg:String,
    ProdPurchDate:{type:Date,Default:new Date}



})
module.exports = mongoose.model('Product',ProductSchema)