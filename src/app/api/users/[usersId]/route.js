
import { User } from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'



export async function GET(request,{params}){
const {usersId} = params
    try {
     const singleuser =    await User.findById(usersId).select("-phone")
        return NextResponse.json(singleuser)
    } catch (error) {
       console.log(error,'error why is error comming')
      return   NextResponse.json({message:"failed to get single user by id",status:false})
    }


}



 export async function DELETE(request,{params}){
  
const {usersId} = params;
console.log(usersId,'userId')
try {
   await User.deleteOne({
    _id:usersId
   }) 
   return  NextResponse.json({message:"successfully delete user",status:true})

} catch (error) {
   console.log(error,'error')
   return  NextResponse.json({message:"failed to delete user",status:false})
}
     
 }