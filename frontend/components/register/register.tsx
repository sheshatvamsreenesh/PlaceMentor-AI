"use client";
import Brand from "../brand";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [collegeName, setCollegeName] = React.useState("");
    const [branch, setBranch] = React.useState("");
    const [passoutYear, setPassoutYear] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        // Full Name
  if (!fullName.trim()) {
    setError("Full name is required");
    return;
  }

  // Email
  if (!email.trim()) {
    setError("Email is required");
    return;
  }

  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address");
    return;
  }

  // College Name
  if (!collegeName.trim()) {
    setError("College name is required");
    return;
  }

  // Branch
  if (!branch) {
    setError("Please select your branch");
    return;
  }

  // Passout Year
  if (!passoutYear) {
    setError("Please select your passout year");
    return;
  }

  // Password
  if (!password.trim()) {
    setError("Password is required");
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters long");
    return;
  }

  // Confirm Password
  if (!confirmPassword.trim()) {
    setError("Please confirm your password");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }
}


    return (
        <div className="w-full lg:w-1/2 bg-white text-black">
        <Brand className="lg:hidden p-4" />

            <div className="flex h-full items-center justify-center px-8 py-12">
                <div className="w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-black">
                    Create your free account
                </h1>

                <p className="mt-2 mb-8 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:underline"
                    >
                    Sign in instead
                    </Link>
                </p>

                <form className="space-y-5" onSubmit={handleRegister}>
                    <p className="text-center text-red-500 text-sm">{error}</p>

                    <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    </div>

                    <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                    </label>

                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                    <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        College Name
                    </label>

                    <input
                        type="text"
                        placeholder="ABC Institute of Technology"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                    />
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* Branch */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                            Branch
                            </label>

                            <input
                            type="text"
                            placeholder="Computer Science"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            />
                        </div>

                        {/* Passout Year */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                            Passout Year
                            </label>

                            <select
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                            value={passoutYear}
                            onChange={(e) => setPassoutYear(e.target.value)}
                            >
                            <option value="" disabled>
                                Select Year
                            </option>

                            {Array.from({ length: 11 }, (_, i) => {
                                const year = 2025 + i;
                                return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                                );
                            })}
                            </select>
                        </div>

                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                            </label>

                            <input
                            type="password"
                            placeholder="********"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                            Confirm Password
                            </label>

                            <input
                            type="password"
                            placeholder="********"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    <button
              type="submit"
              className="w-full bg-[#2472CE] text-white rounded-lg py-3 hover:bg-blue-700 transition"
            >
                Create Free Account
            </button>

                </form>

    </div>
  </div>
</div>
    );
}