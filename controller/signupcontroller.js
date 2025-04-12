import userModel from "../models/userSchema.js";
import bcrypt from "bcryptjs";
 export const signupcontroller = async (req,res)=>{
    try {
        const {firstName,lastName,email,password}=req.body;
        if(!firstName ||!lastName ||!email|| !password){
            res.status(400).json({
                message:"required filled are miising"
            });
        }
        const emailExist = await userModel.findOne({email});
        if(emailExist ===!null){
            res.status(404).json({
                message:"email already exist"
            });
        }
        const passwordCheck =await  bcrypt.hash(password,10)
        console.log(passwordCheck);
        let userObj ={
            firstName,
            lastName,
            email,
            password:passwordCheck
        };
      
        
        const saveData = await userModel.create(userObj);
        console.log(saveData);
        res.status(200).json({
            message:"signup succesfully",
            saveData
        });
        
    } catch (error) {
        console.log(error);
        
    }
    
}