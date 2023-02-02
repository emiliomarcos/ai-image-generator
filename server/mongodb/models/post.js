import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String, requiered: true },
  prompt: { type: String, requiered: true },
  photo: { type: String, requiered: true }
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
