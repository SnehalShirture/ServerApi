const Product = require('../Models/ProductSchema');

exports.addProduct = (req, res) => {
  const prod = new Product({
    ProdName: req.body.ProdName,
    ProdPrice: req.body.ProdPrice,
    ProdType: req.body.ProdType,
    ProdImg: req.body.ProdImg,
    
  });

  /*
    {
        
   " ProdName":"Samsung Galaxy",
    "ProdPrice":"20000",
    "ProdType":"Mobile",
    "ProdImg":""
    }

   */

  prod
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getallProduct = (req, res) => {
  Product.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
