const AreaModels = require("../models/AreaModels");
const addArea = async(req,res)=>{
    try{
         const savedArea = await AreaModels.create(req.body);
         res.status(201).json({
            message:"Area added sucessfully",
            data:savedArea,
         })
    }
    catch(err){
        res.status(500).json({
            message: err,
        });
        
    }
};
    const getallAreas = async(req,res)=>{
        try{
            const areas = await AreaModels.find(req.body).populate("cityId").populate("stateId");
        res.status(200).json({
            message:"Area fetched sucessfully",
            data:areas,
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
};
const deleteArea = async(req,res)=>{

        const deleteArea = await AreaModels.findByIdAndDelete(req.params.id);
        res.json({
            message:"Area Deleted",
            data:deleteArea,
        })
}
const getAreaBycityId = async(req,res)=>{
    try{
        const areas = await AreaModels.find({cityId:req.params.cityId});
        res.status(200).json({
            message:"area found",
            data:areas,
        });
    }catch(err){
        res.status(500).json({
            message:err,
        });
    }
};

module.exports = {
  addArea,
  getallAreas,
  deleteArea,getAreaBycityId
}