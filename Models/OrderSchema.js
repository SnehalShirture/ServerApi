const { default: mongoose } = require('mongoose')
const Order = require('mongoose')

const OrderSchema = mongoose.Schema({
    OrderDate:{type:Date,default:new Date},
    OrderTotal:Number,
    OrderSize:Number,
    CustId:{type:mongoose.Schema.Types.ObjectId,ref:"Customer"},
    EmpId:{type:mongoose.Schema.Types.ObjectId,ref:"Employer"},
    OrderItems:[
        {
            ProdId:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
            Qty:Number
        }
    ]
    
})

module.exports = mongoose.model('Order',OrderSchema)