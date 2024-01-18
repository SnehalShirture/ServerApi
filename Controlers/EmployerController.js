const Employer = require("../Models/EmployerSchema");

exports.addEmployer = (req, res) => {
  const emp = new Employer({
    EmpId: req.body.EmpId,
    EmpName: req.body.EmpName,
    EmpJob: req.body.EmpJob,
    EmpPos: req.body.EmpPos,
    EmpSalary: req.body.EmpSalary,
    EmpGender:req.body.EmpGender,
    EmpAge:req.body.EmpAge
  });

  emp
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};
exports.getallEmployer = (req, res) => {
  Employer.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(result);
    });
};
//Get Employess By Position
exports.getEmpByPosition = (req, res) => {
  Employer.find({ EmpPos: req.body.EmpPos })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
//Get Employer By Salary
exports.getEmpBySalary =(req,res) =>{
  Employer.find()
  .where("EmpSalary")
  .gte(60000)
  .lte(1500000)
  .then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).json(err);
  });
}

//Delete 
exports.DeleteEmp=(req,res)=>{
  Employer.deleteOne({_id:req.body.cid})
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).send(result)
  });
}
// Update

exports.updateSalary =(req,res)=>{
  Employer.findByIdAndUpdate(
    {_id:req.body._id},
    {EmpSalary: req.body.EmpSalary},
    {new:true}

  )
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).json(err)
  });
}

