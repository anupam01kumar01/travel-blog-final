import mongoose from "mongoose";
import { Schema,model } from "mongoose";
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,

    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },

});
export default model("Post",postSchema);
