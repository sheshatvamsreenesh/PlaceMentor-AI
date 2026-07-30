"use client";
import { FcGoogle } from "react-icons/fc";
import Brand from "../brand";
import Link from "next/link";
import React from "react";

import { useState } from "react";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError("");

  // Validate email
  if (!email.trim()) {
    setError("Email is required");
    return;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  // Validate password
  if (!password.trim()) {
    setError("Password is required");
    return;
  }

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  console.log(data);
};
  return (
    <div className="w-full lg:w-1/2 bg-white text-black">
      <Brand className="lg:hidden p-4"/>
      <div className="flex flex-col justify-center items-center h-full p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-black">Sign In to your account</h1>
          <button
            className="w-full border border-black rounded-lg py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition text-black"
          >
            <FcGoogle />
            Continue with Google
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-1" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-1" />
          </div>

          <form className="space-y-4" onSubmit={handleLogin}>
            {error && (
              <p className="text-red-500 text-sm mt-2">
                {error}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-[#2472CE] text-white rounded-lg py-3 hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            <Link href="/forgot-password" className="text-[#2472CE] font-semibold hover:underline">
              Forgot your password?
            </Link>
          </p>

          <p className="text-center mt-6 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#2472CE] font-semibold hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>

  )
 
}
   