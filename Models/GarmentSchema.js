const mongoose = require('mongoose')

const GarmentSchema = mongoose.Schema({
    GarType:String,
    GarMaterial:String,
    GarPrice:Number,
    PurchaseDate:{type:Date , default:new Date},
    GarSize:{type:String , enum :['S' , 'M' ,'L','XL',]},
    PriceLimit:{type:Number,min:[200,'Garment not Available less than 200 price']}
})

{
    // "GarType":"Saree",
    // "GarMaterial":"Silk",
    // "GarPrice":20000,
    // "GarSize":"XL"
}


module.exports= mongoose.model('Garment',GarmentSchema)