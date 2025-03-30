const routes = require ('express').Router();
const PaymentController = require('../controller/PaymentController');
routes.post("/addpayment",PaymentController.addpayment);
routes.get("/getallpayment",PaymentController.getallpayment);
routes.get("/getallpayment/:id",PaymentController.getallpaymentbyId);
// routes.delete("/deletepay/:id",PaymentController.deletePay);
module.exports = routes;