const PaymentModels = require("../models/PaymentModels");
const addpayment = async(req,res)=>{
    try{
         const saved = await PaymentModels.create(req.body);
         res.status(201).json({
            message:"added sucessfully",
            data:saved,
         })
    }
    catch(err){
        res.status(500).json({
            message: err,
        });
        
    }
};
    const getallpayment = async(req,res)=>{
        try{
            const pay = await PaymentModels
        res.status(201).json({
            message:" fetched sucessfully",
            data:pay,
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
};
const getallpaymentbyId = async(req,res)=>{
    try{
        const pay = await PaymentModels
    res.status(201).json({
        message:" fetched sucessfully",
        data:pay,
    })
}
catch(err){
    res.status(500).json({
        message:err
    })
}
};

const deletePay = async(req,res)=>{

        const deletePay = await PaymentModels.findByIdAndDelete(req.params.id);
        res.json({
            message:" Deleted",
            data:deletePay,
        })
};

module.exports = {
 addpayment,getallpayment,deletePay,getallpaymentbyId
}