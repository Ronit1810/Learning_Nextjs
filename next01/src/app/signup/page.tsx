"use client"

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function SignupPage() {
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    });

    const onSignup =async () => {
        
    }

  return (
    <div className=" flex justify-center items-center flex-col min-h-screen py-2 bg-slate-800">
        <h1 className=" text-gray-50 font-extrabold text-3xl">Signup</h1>
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

        <button className=" p-2 border rounded-lg mb-4 focus:outline-none text-gray-500" onClick={onSignup}>Signup</button>
        <Link href="/login" className=" text-white">Visit to Login</Link>

    </div>
  )
}

