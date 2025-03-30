const CityModels = require("../models/CityModels");
const addCity = async(req,res)=>{
    try{
         const savedCity = await CityModels.create(req.body);
         res.status(201).json({
            message:"City added sucessfully",
            data:savedCity,
         })
    }
    catch(err){
        res.status(500).json({
            message: err,
        });
        
    }
};
    const getallCities = async(req,res)=>{
        try{
            const cities = await CityModels.find().populate("stateId");
        res.status(201).json({
            message:"City fetched sucessfully",
            data:cities,
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
};
const deleteCity = async(req,res)=>{

        const deleteCity = await CityModels.findByIdAndDelete(req.params.id);
        res.json({
            message:"City Deleted",
            data:deleteCity,
        })
};
const getCityByStateId = async(req,res)=>{
    try{
        const cities = await CityModels.find({stateId:req.params.stateId});
        res.status(200).json({
            message:"city found",
            data:cities,
        });
    }catch(err){
        res.status(500).json({
            message:"city not found"
        });
    }
};

module.exports = {
  addCity,
  getallCities,
  deleteCity,getCityByStateId
}