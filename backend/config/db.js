import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) ;
        console.log(`Connected to MongoDB : ${conn.connection.host}`);
    }catch (error){
        console.log(`Error: ${error.message}`);
        process.exit(1); // process code 1 means exit the finction , 0 means success
    }
};    