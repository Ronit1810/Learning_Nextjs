"use client";

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React,  {useState}  from "react";
import { toast } from "react-hot-toast"

export default function ProfilePage() {
    const router = useRouter()

    const [data, setData] = useState("nothing")

    const logout = async () => {
        try {
            await axios.get('/api/user/logout')
            toast.success("Successfully Logout")
            router.push("/login")
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
            
        }
    }

    const GetUserDetail =async () => {
        const res = await axios.get("/api/user/me")
        console.log(res.data);
        setData(res.data.data._id)
    }
    
    return(
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <h1 className=" text-white">Profile</h1>
            <hr />
            <h2 className=" text-green-500">{data === 'nothing'? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <p className=" text-white">Profile page</p>
            <hr/>
            <button onClick={GetUserDetail} className=" hover:bg-green-500 bg-blue-500 p-2 rounded-lg mt-4">Get User Detail</button>
            <button onClick={logout} className=" hover:bg-slate-500 bg-white p-2 rounded-lg mt-4">Logout</button>
        </div>
    )
}