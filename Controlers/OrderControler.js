const Order = require("../Models/OrderSchema");

exports.addOrder = (req, res) => {
  const ord = new Order({
   
    OrderTotal: req.body.OrderTotal,
    OrderSize: req.body.OrderSize,
    CustId: req.body.CustId,
    EmpId: req.body.EmpId,
    OrderItems:req.body.OrderItems

  });

  // "OrderTotal": "54121",
  //   "OrderSize": "2",
  //   "CustId": "65a8fd7b46a57648db559c66" ,""

  ord.save()
  .then((result) => {
   res.status(200).json(result) 
  }).catch((err) => {
    res.status(500).json(err) 
  });
};

exports.getallorders = (req , res ) => {
    Order.find()
    .populate('CustId' ,"CustName CustMobNo")
    .populate('EmpId' ,"EmpName  EmpPos")
    .populate('OrderItems.ProdId' ,"ProdName  ProdType")
  
  
    .then((result) => {
        res.status(200).json(result) 
       }).catch((err) => {
         res.status(500).json(err) 
       });
}