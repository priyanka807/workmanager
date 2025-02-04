import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";
import jwt from "jsonwebtoken"
import { User } from "@/models/user";

connectDb()
export  async function GET(request){
    try{
        const token = request.cookies.get("authToken")?.value
      console.log(token,'token')
        const userData = jwt.verify(token,process.env.jwt_token)
        console.log(userData,'userData')
        const user =await User.findById(userData._id).select("-password")
       
        
        return NextResponse.json({message:user,token:token},{status:200})
    }catch(error){
        return NextResponse.json({message:error.message},{status:500})
    }


}