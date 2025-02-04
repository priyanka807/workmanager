


import { connectDb } from "@/helper/db"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"

connectDb()
export async function PUT(request,{params}){
    const {tasksId} = params
    console.log(tasksId,'tasksId' )

    const {title,status,content,usersId} = await  request.json()
    console.log(title,status,content,usersId,'title,status,content' )
      try {  
        const getUserTask = await await Task.findById(tasksId)
           getUserTask.title = title
          getUserTask.usersId = usersId
            getUserTask.status = status
          getUserTask.content =   content
      
 const updateUserTask = await getUserTask.save()
 return  NextResponse.json(updateUserTask,{status:200})

      } catch (error) {
          
          console.log(error.message,'error')
        
          return  NextResponse.json({message:"faild to update new task of specific login user",status:false},{status:500})
      }
  
  }