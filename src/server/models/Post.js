import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
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