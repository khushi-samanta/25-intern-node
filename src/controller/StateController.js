const stateModel = require("../models/StateModel");
const addState = async(req,res)=>{
    try{
         const savedState = await stateModel.create(req.body);
         res.status(201).json({
            message:"State added sucessfully",
            data:savedState,
         })
    }
    catch(err){
        res.status(500).json({
            message:err,
        });
        
    }
};
    const getallState = async(req,res)=>{
        try{
            const states = await stateModel.find();
        res.status(201).json({
            message:"State fetched sucessfully",
            data:states,
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
};
const deleteState = async(req,res)=>{

        const deleteState = await stateModel.findByIdAndDelete(req.params.id);
        res.json({
            message:"State Deleted",
            data:deleteState,
        })
}

module.exports = {
    addState,
    getallState,
    deleteState
}
