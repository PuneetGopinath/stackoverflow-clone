/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/models/Comment.js
 * License: MIT (see LICENSE)
*/

import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: null
    },
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;