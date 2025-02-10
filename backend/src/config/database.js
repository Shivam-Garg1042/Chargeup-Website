import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB is connected ");
    } catch (error) {
        console.error("MongoDB connection Error",error);
        process.exit(1);    ////////////////////////////////////////////////
    }
    
};


export default connectDB;