const routes = require ('express').Router();
const BookingController = require('../controller/BookingController');
routes.post("/addbooking",BookingController.addbook);
routes.get("/getallbooking",BookingController.getallBooking);
routes.get("/getbook/:id",BookingController.getbookById);
routes.delete("/deletebook/:id",BookingController.deleteBook);
routes.get("/getBookingByUserId/:id", BookingController.getBookingByUserId);
module.exports = routes;