import mongoose , {Schema } from "mongoose";



const TaskSchema = new  Schema({
title:{type:String,required:[true,'Title Required !!']},
usersId:{type:mongoose.ObjectId,required:true},
addedDate:{type:Date,default:Date.now()},
status:{type:String,enum:["pending","completed","still working"],required:true},
content:{type:String,required:true},
})

export const Task = mongoose.models.tasks || mongoose.model("tasks",TaskSchema)

