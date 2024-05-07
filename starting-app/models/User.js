// we need to do schema of that use

import mongoose,{ Schema,model } from "mongoose";

const userSchema =  new Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
        minLength:8,
    },
    posts:[{ type: mongoose.Types.ObjectId, ref: "Post" }],

});
export default model("User",userSchema);
