/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/routes/user.js
 * License: MIT (see LICENSE)
*/

import express from "express";

import asyncHandler from "../utils/asyncHandler.js";
import { signup } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", asyncHandler(signup));

export default router;