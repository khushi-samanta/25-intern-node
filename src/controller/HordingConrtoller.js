const hordingModels = require("../models/HordingModels")
const multer = require("multer");
const path = require("path");
const cloudinaryUtil = require("../utils/CloudnaryUtil");


const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
}).single("image");

const addHording = async(req,res)=>{
    try{
        const savedHording = await hordingModels.create(req.body);
 res.status(201).json({
 message:"Hording added sucessfully",
 data:savedHording,
     })
    }
     catch(err){
          res.status(500).json({message: err,});             
     }
 };
 const getallHordingsByUserId = async(req,res)=>{
  try{
    const hording = await hordingModels
    .find({userId:req.params.userId})
    .populate("stateId cityId areaId userId");
    if(hording.length ===0){
      res.status(404).json({
        message:"No hordings found"
      });
    }else{
      res.status(200).json({
        message:"Hording found sucewssfuly",
        data: hording,
      });
  }
} catch(err){
  res.status(500).json({
    message:err.message
  });
}
};
     const getallHordings = async(req,res) => {
       try{
      const hordings = await hordingModels.find().populate("cityId stateId areaId userId");
      if(hordings.length === 0){
     res.status(404).json({
     message:"not hording found" });
     }else{
          res.status(200).json({
            message:"Hording found sucessfully",
            data: hordings,
          });
     }
    }
     catch(err){
         res.status(500).json({ message:err.message });
                }
            };
 

// const addHordingWithFile = async (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(500).json({
//         message: err.message,
//       });
//     }
//  else {
//       console.log(req.body);
//       res.status(200).json({
//         message: "File uploaded successfully",
//         data: req.file,
//       });
//     }
//   });
// };4
const updateHordingById = async(req,res) => {
  try{
 const updateHording = await hordingModels.findByIdAndUpdate(req.params.id ,req.body,{new:true});

     res.status(201).json({
       message:"Hording found sucessfully",
       data: updateHording,
     });
}catch(err){
  res.status(500).json({
    message:err.message
  })
}
};
            const addHordingWithFile = async (req, res) => {
                upload(req, res, async (err) => {
                 try{ if (err) {
                  console.log(err);
                    res.status(500).json({
                      message: err.message,
                    });
                  } else 
                  {   
                      const cloundinaryResponse = await cloudinaryUtil.uploadFileToCloudinary(req.file);
                       console.log(cloundinaryResponse);
                        console.log(req.body);
                      req.body.hordingURL = cloundinaryResponse.secure_url
          
  const savedHording = await hordingModels.create(req.body);
res.status(200).json({
 message: "hording saved successfully",
 data: savedHording
    });
    }
  }catch(err){
    console.log(err);
    res.status(500).json({
      message:err.message
    })
  }
 });
 };
             
 const getHordingById= async(req,res)=>{
  try {
    const hording = await hordingModels.findById(req.params.id).populate("areaId cityId stateId userId");
    if (!hording) {
      res.status(404).json({ message: "No hording found" });
    } else {
      res.status(200).json({
        message: "Hording found successfully",
        data: hording,
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const deleteHording = async(req,res)=>{

        const deleteHording = await hordingModels.findByIdAndDelete(req.params.id);
        res.json({
            message:"Hording Deleted",
            data:deleteHording,
        })
}

  module.exports = {addHording,getallHordings, deleteHording, updateHordingById,addHordingWithFile,getallHordingsByUserId,getHordingById};
    