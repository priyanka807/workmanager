
import mongoose , {Schema } from "mongoose";

const LoginUserSchema = new Schema({
  
 email:{type:String, required:[true,'Email Required !!']},
 password:{type:String, required:[true,'Password Required !!']},
  

})


export const LoginUser = mongoose.models.loginusers || mongoose.model("loginusers" , LoginUserSchema)


