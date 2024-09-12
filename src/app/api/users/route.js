

import { connectDb } from "@/helper/db";
import { User } from "@/models/user";

import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


//url variable , body , query params

connectDb()
const users = [{name:'priyanka',email:'pk796395@gmail.com',phone:'9773583040',message:'paperbag'},
    {name:'harpareet',email:'aashwaani@gmail.com',phone:'9658741258',message:'slitting'},
    {name:'doli',email:'pk796395@gmail.com',phone:'9773583040',message:'rotograurve'}
]

export async function GET(request){
  try {
      const user = await User.find();
  
      return NextResponse.json(user)
  } catch (error){
      return NextResponse.json({message:"failed to get   user",status:false},{status:500})
  }
  
  }


export async function  POST(request){

  const {name,email,phone,yourrequirement,password} =await  request.json()


const user = new User({
    name,email,phone,yourrequirement,password
})
console.log(email,'email email')
  try{
    // if(!name||!email||!phone||!password||!yourrequirement){
    //   throw new Error("All fields are required. Please fill them in")
    // }
    if(user.name===""||user.email===""||user.phone===""||user.password===""||user.requirement===""){
      throw new Error("All fields are required. Please fill them in.")
    }


    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

    if(existingUser){
      if(existingUser.email===email){
        throw new Error("This email is already in use.");
       }
   if(existingUser.phone===phone){
    throw new Error("This phone is already in use.");
   }
    }
  

    user.password =  bcrypt.hashSync(password,parseInt(process.env.bcrypt_salt))
    const createdUser = await user.save()

    const response = NextResponse.json(user,{status:200})
    return response
  }catch(error){
  
  return  NextResponse.json({message:error.message,status:false},{status:500})
  }



}

// export async function  POST(request){

//     const {name,email,phone,message}  = request.json()

//   const user =   new User({
//         name,email,phone,message 
//     })


// try{
//     const createdUser = await user.save()

//     const response = NextResponse.json(user,{status:201})

//     return response
// }catch(error){
// console.log(error,'error failed to craete new user')

//     return NextResponse.json({message:"failed to create new user",status:false})
// }
//     //create user with new user modes
//     // const newuser = await request.json()
//     // users.push(newuser)
//     // return  NextResponse.json(users)
//     // const body = request.body
   
   
//     //    const method = request.method
//     //    const headers = request.headers
//     //    const cookies = request.cookies
//     //    const pathname = request.nextUrl.pathname
   

//     // // const jsonData = await request.json()
//     // // console.log( jsonData,' jsonData')
//     // const textData = await request.text()

//     // // console.log( textData,' textData')
//     // return  NextResponse.json({message:"created new user"})
// }


// export function PUT(){
    
// }

// export function DELETE(){
//     console.log('user deleted from our website')
//     return NextResponse.json({message:'user deleted from our website',status:true},{status:400,statusText:'status text will show on top of postman'})
// }