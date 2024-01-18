const Customer = require('../Models/CustomerSchema')

exports.addCustomer =(req,res) =>{
    const cust = new Customer ({
        CustName:req.body.CustName,
        CustEmail:req.body.CustEmail,
        CustMobNo:req.body.CustMobNo,
        Custpassword:req.body.Custpassword,
        CustGender:req.body.CustGender,
        CustAge:req.body.CustAge
    })

    cust.save()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
}
exports.getallCustomer =(req,res) =>{
    Customer.find()
    .then((result) => {
        res.status(200).json(result)
        
    }).catch((err) => {
        res.status(500).json(err)
    });
}