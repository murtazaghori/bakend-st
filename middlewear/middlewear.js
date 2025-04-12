import jwt  from "jsonwebtoken";

export const tokenVerification = async (req,res,next)=>{
    try {
        if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded =jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(decoded){
            next()
        }
        
            
        } else {
            res.status(400).json({
                message:"token missing"
            })
            
        }
    } catch (error) {
        res.status(400).json({
            message:error
        })
        
    }
    
}