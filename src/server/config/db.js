/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/config/db.js
 * License: MIT (see LICENSE)
*/

import mongoose from "mongoose";

let connected = false;
const connectDB = async () => {
    if (connected) return true;

    if (!process.env.MONGO_URI) {
        console.error("[ ERROR ] MONGO_URI is not defined in environment variables");
        return false;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("[ INFO ] MongoDB connected successfully");
        connected = true;
    } catch (error) {
        console.error("[ ERROR ] MongoDB connection failed:", error);
    }

    return connected;
};

export default connectDB;