
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import {  Task } from "@/models/task";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

connectDb()

export async function GET(){
    const findAllTask = await Task.find()


try {
    
    return NextResponse.json(findAllTask)
} catch (error) {
    
    return getResponseMessage("Error in getting data",false,404,)
}

   
}


export async function POST(request){



try {
    const {title,content,usersId,status}  = await request.json()
    const token = request.cookies.get("authToken")?.value
          
    const userData = jwt.verify(token,process.env.jwt_token)
    
    

    const task = new Task({
        title,content,usersId:userData._id ,status 
    })
    
    const createdTask =await  task.save()
    return NextResponse.json(task,{status:201})

}catch(error){
  
    console.log(error,'task error ')
   
// return getResponseMessage("Error in creating data",false,500,)
return  NextResponse.json({message:"Error in creating data !! ",status:false},{status:500})
}

}









