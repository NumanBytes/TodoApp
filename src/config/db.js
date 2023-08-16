import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() => {
    const uri = 'mongodb://127.0.0.1:27017/ToDoApp';        
    await mongoose.connect(uri, {
        autoCreate: true,
        autoIndex: true,
    })
    .then((res) => {
        console.log("Connected db Connection");
    })

        .catch((err) => {
        console.log("Error connecting db connection", err);
    });
};
export default connectDB;
