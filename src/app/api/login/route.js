import { connectDb } from "@/helper/db";
import { LoginUser } from "@/models/loginUser";
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs';
import { User } from "@/models/user";
import jwt from 'jsonwebtoken'
connectDb()


export async function GET(request){
try {
    const loginuser = await LoginUser.find();

    return NextResponse.json(loginuser)
} catch (error){
    return NextResponse.json({message:"failed to get  login user",status:false},{status:500})
}

}


export async function POST(request) {
    const { email, password } = await request.json();

    try {
        const user = await User.findOne({ email });
        console.log(user,'user')
        if (!user) {
            throw new Error("User Not Found");
        }

        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            throw new Error("Password Not Matched");
        }

        const token = jwt.sign({ _id: user._id }, process.env.jwt_token, {
            expiresIn: '1d'  
        });
        
        const response = NextResponse.json({ token: token, status: true });
      
        response.cookies.set("authToken", token, {
            maxAge: 24 * 60 * 60, 
            httpOnly: false,      
            path: '/'        
        });
      

        
        const login = new LoginUser({ email, password,token:token });
        console.log(login,'can we send token here also')
        await login.save();

        return response
    } catch (error) {
        // console.log(error, 'login error');
        return NextResponse.json({ message: error.message, status: false }, { status: 500 });
    }
}