/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/routes/question.js
 * License: MIT (see LICENSE)
*/

import express from "express";

import asyncHandler from "../utils/asyncHandler.js";
import { question, comment } from "../controllers/question.controller.js";

const router = express.Router();

router.get("/:id", asyncHandler(question));
router.post("/:postId/comment", asyncHandler(comment));

export default router;