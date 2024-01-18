const Student = require("../Models/StudentSchema");

exports.addStudent = (req, res) => {
  const std = new Student({

    stdRoll: req.body.stdRoll,
    stdName: req.body.stdName,
    StdClass: req.body.StdClass,
    StdSec: req.body.StdSec,
    StdMarks: req.body.StdMarks,
    StdGender:req.body.StdGender
     
  });

  std
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
exports.getallStudent = (req, res) => {
  Student.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};

exports.getStdByClass = (req, res) => {
  Student.find({ StdClass: req.body.StdClass })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getStudentsBetweenMarks = (req, res) => {
  Student.find()
    .where("StdMarks")
    .gte(40)
    //.gte(req.body.minmarks)
    .lte(60)
    //.lte(req.body.maxmarks)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Delete
exports.DeleteStd =(req,res)=>{
  Student.deleteOne({_id:req.body._id})
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).send(err)
    
  });
}
//Update 

exports.updatStdClass =(req,res)=>{
  Student.findByIdAndUpdate(
    {_id:req.body._id},
    {StdClass: req.body.StdClass}
  )
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).send(err)
  });
}