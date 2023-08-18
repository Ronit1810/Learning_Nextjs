"use client"

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    
    const [loading, setLoading] = React.useState(false)

    const onSignup =async () => {
        try {
            setLoading(true)
            const response = await axios.post("api/user/signup", user);
            console.log("Signup Success", response.data);
            router.push("/login");
            toast.success('Signup Successfully!!')
            
        } catch (error: any) {
            console.log("signup Failed", error.message);
            
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.username.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true)
        }
    }, [user])

  return (
    <div className=" flex justify-center items-center flex-col min-h-screen py-2 bg-slate-800">
        <h1 className=" text-gray-50 font-extrabold text-3xl">{loading ? "Processing" : "Signup"}</h1>
        <hr/>
        <label className=" text-white pt-6" htmlFor="username">username</label>
        <input 
            className=" p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username:e.target.value})}
            placeholder="username" 
        />

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

        <button className=" p-2 border rounded-lg mb-4 focus:outline-none text-gray-500" onClick={onSignup}>{buttonDisabled ? "No Signup" : "Signup"}</button>
        <Link href="/login" className=" text-white">Visit to Login</Link>

    </div>
  )
}

