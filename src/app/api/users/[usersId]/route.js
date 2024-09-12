
import { User } from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'

//create simple delete function by dynamanic id 
// export async function DELETE(request,{params}){
  
//     const userid = params.userId
// console.log(params,'params')
 
     
//     return NextResponse.json({
//         message:"delete user by dymanic id  ",
//         id:userid,
//     })


// }



//delete user by id 

export async function GET(request,{params}){
const {usersId} = params
    try {
     const singleuser =    await User.findById(usersId).select("-phon")
        return NextResponse.json(singleuser)
    } catch (error) {
       console.log(error,'error why is error comming')
      return   NextResponse.json({message:"failed to get single user by id",status:false})
    }


}

// export async function PUT(request,{params}){
//     const {usersId} = params
//     const {_id,name,email,phone,message}  = await request.json()
//         try {
//             const getUpdateUserId =    await User.findById(usersId)
//             // getUpdateUserId._id = _id
//             getUpdateUserId.name = name    
  
//             getUpdateUserId.email = email
//             getUpdateUserId.phone = phone
//             getUpdateUserId.message = message
 
//             const updatedUser = await getUpdateUserId.save()
//             return NextResponse.json(updatedUser)
//         } catch (error) {
//            console.log("faild to update user details",error)
//           return   NextResponse.json({message:"failed to get single user by id",status:false})
//         }
    
    
//     }
//  export async function DELETE(request,{params}){
  
// const {usersId} = params;
// console.log(usersId,'userId')
// try {
//    await User.deleteOne({
//     _id:usersId
//    }) 
//    return  NextResponse.json({message:"successfully delete user",status:true})

// } catch (error) {
//    console.log(error,'error')
//    return  NextResponse.json({message:"failed to delete user",status:false})
// }
     
//  }