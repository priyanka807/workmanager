import { NextResponse } from "next/server";

export function GET(request,{params}){

    const {usersId,postId } = params
    console.log("userid:",usersId)
    console.log("postId :",postId )
return  NextResponse.json(params)
}