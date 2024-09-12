import { NextResponse } from "next/server";

export function POST(request){


const response = NextResponse.json({message:'Logout Successfully !!',status:200})

 response.cookies.set("authToken","",{expiresIn:new Date(0)})
 return response
}