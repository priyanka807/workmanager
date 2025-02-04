import Tasks from "@/app/show-task/tasks"
import { connectDb } from "@/helper/db"
import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { User } from "@/models/user"
import { NextResponse } from "next/server"

connectDb()
export async function GET(request,{params}){

    const {usersId} = params
    try {
    
        const getTaskOfUser = await Task.find({usersId:usersId})

        return NextResponse.json(getTaskOfUser)

    } catch (error) {
        
        console.log(error,'getTaskOfUser')

        return  getResponseMessage("error in getting task through matching exact userId",false,404)
    }

}

export async function POST(request,{params}){

  const {title,usersId,status,content} = await  request.json()
  console.log(request,'obj return ')
    try {
    
       const newTask = new Task({title,usersId,status,content})
       console.log(newTask,'newTask')

       await newTask.save()

        return NextResponse.json(newTask)

    } catch (error) {
        
        console.log(error.message,'error')
      
        return  NextResponse.json({message:"faild to creating new task of specific login user",status:false},{status:500})
    }

}

