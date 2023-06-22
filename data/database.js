import mongoose from "mongoose";
import { config } from 'dotenv';

config(); 

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URL, {dbName: "API", useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Error connecting to database:", error));
};
