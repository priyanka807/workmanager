
import mongoose from "mongoose"
import { User } from "@/models/user";
import { Task } from "@/models/task";


export const connectDb = async()=>{
    const config = {isConnected:0}
// if(!config.isConnected){
//     console.error(config.isConnected,'...........config.isConnected')
//     console.error('this will execute only first time until does not get any value insid it ')
//     return 
// }
    try{
        const {connection} =await mongoose.connect(process.env.mongoodb_url,{  dbName : "work_manager"})
        config.isConnected = connection.readyState
    // console.warn(connection.readyState,'check i will gget readystate value it will whenever  any api url is hit')

// const usersave  = new User({
//     name:"kirti",
//     email:"kirti@gmail.com",
//     phone:9745581242,
//     password:"kirti",
//     message :'kirti'
// })
// await usersave.save()

    }catch(error){
        console.error("failed to connect db","failed to connect db")
        console.log(error,'error')
    }
}

