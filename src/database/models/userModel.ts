import mongoose, { Schema } from "mongoose";


const  userSchema = new Schema({
    email: {
        type:String,
        required: true, 
        unique:true,
        null:false
    },
    password:String
})

export const userModel = mongoose.model("Users", userSchema);