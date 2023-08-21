"use client";

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail =async () => {
        try {
            await axios.post('/api/user/verifyemail',{token})
            setVerified(true)
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }

    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "")
    })

    useEffect(() => {
        if(token.length > 0){
            verifyUserEmail()
        }
    }, [token])
    return(
        <div className="flex justify-center items-center flex-col min-h-screen py-2 bg-black">
            <h1 className=" text-4xl">Verify Email</h1>
            <h2 className=" p-2 bg-slate-700 text-white">{token ? `${token}` : "No Token"}</h2>

            <Link className="  text-2xl text-black mt-5 rounded-lg bg-white" href='/login'>Login</Link>
        </div>
    )
}