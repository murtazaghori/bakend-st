import userModel from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import  jwt from "jsonwebtoken";
export const logincontroller = async (req,res)=>{
    try {
        const {email,password} = req.body;
      if(!email ||!password){
        res.status(400).json({
            message:"requird filled are missing"
        });
       
      }
      const emailExist = await userModel.findOne({email})
      if(!emailExist){
          res.status(400).json({
              message:"invalid email&password"
          });
      }
      console.log(emailExist);
      const comparePassword = await bcrypt.compare(password,emailExist.password);
      if(!comparePassword){
        res.status(400).json({
            message:"password not match"
        });
      }
      
      let token = jwt.sign({email:emailExist.email},process.env.JWT_SECRET_KEY)
      console.log("token",token);
      res.status(200).json({
        message:"login succesfully"
      })
    } catch (error) {
        console.log(error)    
    }
};