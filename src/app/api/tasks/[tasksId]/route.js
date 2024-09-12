import { Task } from "@/models/task"
import { NextRequest, NextResponse } from 'next/server'


export async function GET(request,{params}){

    const {tasksId}  = params;
 

try {
    const getsingleuser = await Task.findById(tasksId)

    return NextResponse.json(getsingleuser)
} catch (error) {
   
    return NextResponse.json({message:"failed get single  task of user",success:false}) 
}
   
}



export async function PUT(request,{params}){

    const {tasksId}  = params;
    const {title,content,usersId} = await request.json()
  
 
try {
    const getsingleuser = await Task.findById(tasksId)
           getsingleuser.title = title
           getsingleuser.content = content
           getsingleuser.usersId = usersId

           


  const updateduser =  getsingleuser.save()


    return NextResponse.json(getsingleuser)
} catch (error) {
 
    return NextResponse.json({message:"failed to delete task of user",success:false}) 
}
   


}


export async function DELETE(request,{params}){

    const {tasksId}  = params;
    console.log(tasksId,tasksId,'tasksId')

try {
    const deleteTask = await Task.deleteOne({_id:tasksId})

    return NextResponse.json({message:"successfully delete task of user",success:true},{status:200})
} catch (error) {
   
    return NextResponse.json({message:"failed to delete task of user",success:false}) 
}
   


}

