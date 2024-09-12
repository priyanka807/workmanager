import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export function middleware(request) {

//   const authToken = request.cookies.get("authToken")?.value
//   const loggedUserNotAccessThisPath = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup"


//   if (request.nextUrl.pathname === "/api/login"||request.nextUrl.pathname === "/api/signup") {
//     return
//   }




//   if (loggedUserNotAccessThisPath) {

//     if (authToken) {
//       return NextResponse.redirect((new URL("/profile", request.url)))
//     } 

//   }else {
    
//       if (!authToken) {

//         if(request.nextUrl.pathname.startsWith("/api")){

//             return  NextResponse.json({message:"you can't access the api",success:false},{status:401})
//         }


//         return NextResponse.redirect((new URL("/login", request.url)))
//       } 



//     }




}




export const config = {
  matcher: ['/', '/add-task', '/show-task', "/login", "/signup", "/profile/:path*"],
}