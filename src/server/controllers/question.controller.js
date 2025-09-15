/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/controllers/question.controller.js
 * License: MIT (see LICENSE)
*/

import User from "../models/User.js";
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
    const { content, username } = req.body;

    if (!content || !username) {
        return res.status(400).json({ message: "Content and username are required" });
    }

    const user = await User.findOne({ username }).select("_id");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const post = await Post.findOne({ urlID: postId });
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    const comment = await Comment.create({
        content,
        author: user._id,
        parentId: post._id
    });

    await comment.populate("author", "username name");

    post.comments.push(comment._id);
    await post.save();

    res.status(201).json({ ...comment._doc });
};