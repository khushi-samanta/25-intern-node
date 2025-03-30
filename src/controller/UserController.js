const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt");
const mailUtil = require("../utils/MailUtil");
const jwt = require("jsonwebtoken");
const secret = "secret";

const loginUser = async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const foundUserFromEmail = await userModel.findOne({email:email}).populate("roleID");
    console.log(foundUserFromEmail);
    if(foundUserFromEmail != null){
        const isMatch = bcrypt.compareSync(password,foundUserFromEmail.password);
        if(isMatch == true) {
            res.status(200).json({
                message:"login sucessfully",
                data: foundUserFromEmail,
            });
        }
        else {
            res.status(404).json({
                message:"invalid cred..",
            });
            }
    }
    else{
        res.status(404).json({
            message:"Email not found...",
        });
    }
};

const signup = async(req,res) =>{
try{
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password,salt);
    req.body.password = hashedPassword;

    const createdUser = await userModel.create(req.body);
    res.status(201).json({
        message:"user created..",
        data:createdUser
    })
    await mailUtil.sendingMail(createdUser.email,"welcome to eadvertisement","this is welcome mail")

}catch(err){
    console.log(err)
    res.status(500).json({
        message:"error",
        data:err
    })
}
}
const addRole = async(req,res) =>{
    const savedRole = await userModel.create(req.body)
    res.json({
        message:"role created...",
        data: savedRole,
    });
};
const getAllRoles = async(req,res) => {

    const user = await userModel.find().populate("roleID")

    res.json({
        message:"role fetches succesfully",
        data: user,
    });
};
const deleteRole = async(req,res)=>{
    const deleteRole = await userModel.findByIdAndDelete(req.params.id)
    res.json({
        message:"role deleted successfully..",
        data:deleteRole,
    });
};
const getRoleById = async(req,res)=>{
    const foundRole = await userModel.findById(req.params.id)
    res.json({
         message:"role get...",
         data: foundRole,
    })
};
const forgotPassword = async (req, res) => {
    const email = req.body.email;
    const foundUser = await userModel.findOne({ email: email });
  
    if (foundUser) {
      const token = jwt.sign(foundUser.toObject(), secret);
      console.log(token);
      const url = `http://localhost:5173/resetpassword/${token}`;
      const mailContent = `<html>
                            <a href ="${url}">rest password</a>
                            </html>`;
      //email...
      await mailUtil.sendingMail(foundUser.email, "reset password", mailContent);
      res.json({
        message: "reset password link sent to mail.",
      });
    } else {
      res.json({
        message: "user not found register first..",
      });
    }
  };
  
  const resetpassword = async (req, res) => {
    const token = req.body.token; //decode --> email | id
    const newPassword = req.body.password;
  
    const userFromToken = await jwt.verify(token, secret);
    //object -->email,id..
    //password encrypt...
    const salt = bcrypt.genSaltSync(10);
    const hashedPasseord = bcrypt.hashSync(newPassword,salt);
  
    const updatedUser = await userModel.findByIdAndUpdate(userFromToken._id, {
      password: hashedPasseord,
    });
    res.json({
      message: "password updated successfully..",
    });
  };
module.exports ={
    addRole,getAllRoles,getRoleById,deleteRole,signup,loginUser,resetpassword,forgotPassword
}