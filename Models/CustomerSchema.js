const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const CustomerSchema = moongoose.Schema({
    CustName:String,
    CustEmail:String,
    CustMobNo:Number,
    Custpassword:String,
    PurchaseDate:{type:Date,default:new Date},
    CustGender:{type:String,enum:['Male',"Female"]},
    CustAge:{type:Number,min:[18,'Age should me more than 18'],max:[35,'Age should me less than 35']}


})

module.exports = mongoose.model('Customer' , CustomerSchema)