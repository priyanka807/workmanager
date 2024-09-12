import { getResponseMessage } from "@/helper/responseMessage"
import { Task } from "@/models/task"
import { NextResponse } from "next/server"


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