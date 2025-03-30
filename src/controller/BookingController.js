const BookingModels = require("../models/BookingModels");
const addbook = async(req,res)=>{
    try{
         const savedbook = await BookingModels.create(req.body);
         res.status(201).json({
            message:"added sucessfully",
            data:savedbook,
         })
    }
    catch(err){
        res.status(500).json({
            message: err,
        });
        
    }
};
    const getallBooking = async(req,res)=>{
        try{
            const book = await BookingModels
        res.status(201).json({
            message:" fetched sucessfully",
            data:book,
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
};
const getbookById = async(req,res)=>{
    const foundBooking = await BookingModels.findById(req.params.id).populate("userId Hoarding_Id");
    res.json({
         message:" get...",
         data: foundBooking,
    })
};

const deleteBook = async(req,res)=>{

        const deleteBooking = await BookingModels.findByIdAndDelete(req.params.id);
        res.json({
            message:" Deleted",
            data:deleteBooking,
        })
};
const getBookingByUserId = async (req, res) => {
    try {
      const getBookingByUserId = await BookingModels.find({userId: req.params.id,
      });
      res.status(200).json({
        message: "Booking Fetched Successfully",
        data: getBookingByUserId,
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
module.exports = {
  addbook,getallBooking,deleteBook,getbookById,getBookingByUserId
}