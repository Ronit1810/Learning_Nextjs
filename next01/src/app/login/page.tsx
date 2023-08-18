"use client"

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function LoginPage() {
    const router = useRouter()
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    
    const [loading, setLoading] = React.useState(false)

    const onLogin =async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/user/login", user)
            console.log(response);
            toast.success("Login Successful")
            router.push("/profile")
        } catch (error: any) {
            console.log("login failed", error.message);
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

  return (
    <div className=" flex justify-center items-center flex-col min-h-screen py-2 bg-slate-800">
        <h1 className=" text-gray-50 font-extrabold text-3xl">{loading ? "processing" : "Login"}</h1>
        <hr/>

        <label className=" text-white pt-6" htmlFor="email">email</label>
        <input 
            className=" p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email:e.target.value})}
            placeholder="email" 
        />

        <label className=" text-white pt-6" htmlFor="password">password</label>
        <input 
            className=" p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password:e.target.value})}
            placeholder="password" 
        />

        <button className=" p-2 border rounded-lg mb-4 focus:outline-none text-gray-500" onClick={onLogin}>{buttonDisabled ? "No Login" : "Login"}</button>
        <Link href="/signup" className=" text-white">Visit to Signup</Link>

    </div>
  )
}

