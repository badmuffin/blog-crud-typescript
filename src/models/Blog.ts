import mongoose, { Document, Schema } from "mongoose";

// interface for the blog model, extending to Document to adheres to the structure MongoDB expects
export interface IBlog extends Document {
  title: string,
  content: string
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String, 
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

// IBlog is used to specify the types of the model
export default mongoose.model<IBlog>("Blog", BlogSchema);