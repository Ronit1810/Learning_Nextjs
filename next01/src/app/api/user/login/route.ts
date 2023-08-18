import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export default async function POST(request:NextRequest) {
    try {
        const reqbody = await request.json()
        const {email, password} = reqbody

        //check for user(email)
        const user = await User.findOne({email})
        if (!email) {
            return NextResponse.json({error: "User does not exist"}, {status:400})
        }

        //check for user(password)
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error:"Invalid Password"},{status: 400})
        }

        //Creating a Token
        const tokenData = {
            id : user._id,
            username : user.username,
            email : user.email,
        }
        //main step
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }    
}