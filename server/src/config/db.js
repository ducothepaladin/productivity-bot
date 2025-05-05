import mongoose from "mongoose";

const connectDb = async(databaseUrl) => {
    try {
        await mongoose.connect(databaseUrl);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;