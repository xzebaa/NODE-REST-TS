import { Schema, model } from "mongoose";
import { Stream } from "stream";
const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, lowercase: true },
  content: { type: String, required: true },
  image: { type: String },
  createAt: { type: Date, defaul: Date.now },
  updateDate: Date
});

export default model("Post", PostSchema);
