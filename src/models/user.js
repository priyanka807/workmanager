import mongoose ,{Schema } from "mongoose";

const UserSchema = new Schema({
    name:String,
    phone:{type:String,unique:true, required:[true,'Email Required !!']},
 email:{type:String,unique:true, required:[true,'Email Required !!']},
 password:{type:String, required:[true,'Password Required !!']},
  
   
 yourrequirement:String,
})


export const User = mongoose.models.users || mongoose.model("users" , UserSchema)