import mongoose, { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true // Use 'timestamps' instead of 'time'
});

const PostModel = model('Post', PostSchema);
export default PostModel;
