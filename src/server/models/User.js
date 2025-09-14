/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/models/User.js
 * License: MIT (see LICENSE)
*/

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;