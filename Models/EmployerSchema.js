const mongoose = require('mongoose')

const EmployerSchema = mongoose.Schema({
    EmpId:Number,
    EmpName:String,
    EmpJob:String,
    EmpPos:String,
    EmpSalary:Number,
    JoiningDate:{type:Date,default:new Date()},
    EmpGender:{type:String,enum:['Male','Female']},
    EmpAge:{type:Number , min:[18,"Age should be more than 18"]}
})

module.exports = mongoose.model('Employer',EmployerSchema)