const express = require("express");
const router = express.Router();
//Customer
const CustConstroller = require("../Controlers/CustomerController");
router.post("/addcustomer", CustConstroller.addCustomer);
router.get("/getallcustomer", CustConstroller.getallCustomer);

// Employer
const EmployerController = require("../Controlers/EmployerController");

router.post("/addEmployer", EmployerController.addEmployer);
router.get("/getallEmployer", EmployerController.getallEmployer);
router.post("/getEmpByPos", EmployerController.getEmpByPosition);
router.post("/getEmpBySalary", EmployerController.getEmpBySalary);
router.post("/DeleteEmp", EmployerController.DeleteEmp);
router.post("/updateSalary", EmployerController.updateSalary);



//Students 
const  StudentController = require("../Controlers/StudentControllers")

router.post("/addStudent" , StudentController.addStudent)
router.get("/getallStudent" , StudentController.getallStudent)
router.post("/getStdByClass",StudentController.getStdByClass)
router.post("/addStdByMarks",StudentController.getStudentsBetweenMarks)
router.post("/DeleteStd",StudentController.DeleteStd)
router.post("/updatStdClass",StudentController.updatStdClass)




// Garments

const  GarmentController = require("../Controlers/GarmentControler");

router.post("/addGarment" , GarmentController.addGarment)
router.get("/getallgarments",GarmentController.getallGarments)
router.post("/getGarByType",GarmentController.getGarByType)
router.post("/getGarByPrice",GarmentController.getGarByPrice)
router.post("/deleteGarments",GarmentController.deleteGarments)
router.post("/updateGarment",GarmentController.updateGarment)

// Orders
const OrderControler = require("../Controlers/OrderControler");


router.post("/addOrder",OrderControler.addOrder);
router.get("/getallorder",OrderControler.getallorders);




// Product 

const ProductControler = require ("../Controlers/ProductControler");

router.post ("/addProduct" , ProductControler .addProduct);
router.get ("/getallProduct" , ProductControler .getallProduct);

module.exports = router;