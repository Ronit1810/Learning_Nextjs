"use client"

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function LoginPage() {
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        
    });

    const onLogin =async () => {
        
    }

  return (
    <div className=" flex justify-center items-center flex-col min-h-screen py-2 bg-slate-800">
        <h1 className=" text-gray-50 font-extrabold text-3xl">Login</h1>
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

        <button className=" p-2 border rounded-lg mb-4 focus:outline-none text-gray-500" onClick={onLogin}>Signup</button>
        <Link href="/signup" className=" text-white">Visit to Signup</Link>

    </div>
  )
}

