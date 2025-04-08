import mongoose from "mongoose";

const connectDB = async () => {
    console.log(process.env.DATABASE_URL)
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Mongodb connection failed: ${error}`);
        process.exit(1);
    }
};

export { connectDB };