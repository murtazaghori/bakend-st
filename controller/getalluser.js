import userModel from "../models/userSchema.js"

export const getalluser = async (req,res)=>{
    try {
       const data = await userModel.find({});
            res.status(200).json({
                message:"get all user succesfully",
                data,
            });
        
    } catch (error) {
        console.log(error);
        
    }
}