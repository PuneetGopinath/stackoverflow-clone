/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/controllers/user.controller.js
 * License: MIT (see LICENSE)
*/

import User from "../models/User.js";

export const signup = async (req, res) => {
    const { username, name } = req.body;

    if (!username || !name) {
        return res.status(400).json({ message: "Username and name are required" });
    }

    const exists = await User.findOne({ username });
    if (exists) {
        return res.status(409).json({ message: "Username already exists" });
    }

    const user = await User.create({ username, name });
    res.status(201).json({ ...user._doc });
};