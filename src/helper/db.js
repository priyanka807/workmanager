
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
    console.warn(connection.readyState,'check i will gget readystate value it will whenever  any api url is hit')
//testing and creating new user

// const usersave  = new User({
//     name:"harpareet kaur",
//     email:"pk796395+web@gmail.com",
//     phone:9745581240,
//     message :'can you explain me more about slitting machine'
// })
// await usersave.save()
// console.warn('created new user in database')
       
//         console.log("mongoose connected successfully")
//         console.log(connection.host,'connection hostname')


    }catch(error){
        console.error("failed to connect db","failed to connect db")
        console.log(error,'error')
    }
}