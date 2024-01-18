const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  stdRoll: Number,
  stdName: String,
  StdClass: Number,
  StdSec: String,
  StdMarks: Number,
  JoningDate:{type:String , default:new Date } ,
  StdGender:{type:String , enum :['Male' , 'Female']}
});

module.exports = mongoose.model("Student", StudentSchema);
