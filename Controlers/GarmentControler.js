const Garment = require('../Models/GarmentSchema')

exports.addGarment =(req,res) =>{
    const gar = new Garment ({
        GarType:req.body.GarType,
        GarMaterial:req.body.GarMaterial,
        GarPrice:req.body.GarPrice,
        GarSize:req.body.GarSize,
        SizeAvail:req.body.SizeAvail,
        PriceLimit:req.body.PriceLimit
    });

    gar
    .save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(200).json(err);
    });
};
exports.getallGarments =(req, res) =>{
    Garment.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
};
 // Garment By Type
exports.getGarByType = (req,res)=>{
    Garment.find({GarType: req.body.GarType})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
// Garment By Price 
exports.getGarByPrice =(req,res)=>{
    Garment.find()
    .where("GarPrice")
    .gte(1000)
    .lte(20000)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}

// Delete

exports.deleteGarments = (req,res)=>{
    Garment.deleteOne({_id:req.body._id})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}

//Update

exports.updateGarment =(req,res)=>{
    Garment.findByIdAndUpdate(
        {_id:req.body.cid},
        {GarPrice:req.body.updatePrice},
        {new:true}
    )
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).json(err)

    });
}