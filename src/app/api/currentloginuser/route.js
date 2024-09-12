import { NextResponse } from "next/server"
import { connectDb } from "@/helper/db";
import jwt from "jsonwebtoken"
import { User } from "@/models/user";

connectDb()
export  async function GET(request){

    try{
        const token = request.cookies.get("authToken")?.value
      
        const userData = jwt.verify(token,process.env.jwt_token)
        const user =await User.findById(userData._id).select("-password")
        // console.log(user,'due to await user')
        
        return NextResponse.json({message:user,token:token},{status:200})
    }catch(error){
        return NextResponse.json({message:error.message},{status:500})
    }


}