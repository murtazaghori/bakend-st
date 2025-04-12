import mongoose from "mongoose";

 export const connectDb = async()=>{
    try {
        const MONGO_DB = process.env.MONGO_DB

        mongoose.connect(MONGO_DB)
        mongoose.connection("connect",()=>{
            console.log("mongodb connected...")
        });
        mongoose.connection("error",(err)=>{
            console.log(err)
        })
    } catch (error) {
        
    }
}