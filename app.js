import dotenv from"dotenv"
import express from "express"
import userRoutes from "./router/route.js";
import { connectDb } from "./databse/dataConfig.js";
 
dotenv.config()
const app =express();
const port = process.env.PORT

app.use(express.json());
app.use("/faraz", userRoutes);

connectDb()

app.listen(port,()=>{
    console.log("server is running",port);
    
})