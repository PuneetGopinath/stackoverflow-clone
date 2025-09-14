/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/models/Post.js
 * License: MIT (see LICENSE)
*/

import mongoose from "mongoose";

import { randomUUID } from "crypto";

const postSchema = new mongoose.Schema({
    urlID: {
        type: mongoose.Schema.Types.UUID,
        default: () => randomUUID(),
        unique: true
    },
    postType: {
        type: String,
        required: true,
        enum: ["question", "answer"]
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: null
    },
    children: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post",
        default: []
    },
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
        default: []
    }
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;