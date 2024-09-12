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
        const response = NextResponse.json({ message: "Logged Success !!", status: true });
        
        // Set the cookie with correct attributes
        response.cookies.set("authToken", token, {
            maxAge: 24 * 60 * 60, // 1 day in seconds
            httpOnly: false,      // Allows client-side JavaScript to access the cookie
            path: '/'             // Cookie available throughout the site
        });
        response.cookies.set("authToken", token);

        
        const login = new LoginUser({ email, password });
        await login.save();

        return response
    } catch (error) {
        console.log(error, 'login error');
        return NextResponse.json({ message: error.message, status: false }, { status: 500 });
    }
}