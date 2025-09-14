/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/controllers/question.controller.js
 * License: MIT (see LICENSE)
*/

import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

export const question = async (req, res) => {
    const { id } = req.params;
    const question = await Post.findOne({ urlID: id }).populate("author", "username name").populate({
        path: "comments",
        populate: {
            path: "author",
            select: "username name"
        }
    });
    res.json({ ...question._doc });
};

export const comment = async (req, res) => {
    const { postId } = req.params;
    const { content, authorId } = req.body;

    if (!content || !authorId) {
        return res.status(400).json({ message: "Content and author ID are required" });
    }

    const post = await Post.findOne({ urlID: postId }).select("_id");
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    const comment = await Comment.create({
        content,
        authorId,
        parentId: post._id
    });

    res.status(201).json(comment);
};