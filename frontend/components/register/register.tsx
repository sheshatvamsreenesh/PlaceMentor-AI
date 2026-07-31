"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Brand from "../brand";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import z from "zod";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be at least 2 characters long").max(100),
    email: z.string().email("Please enter a valid email address"),
    collegeName: z.string().min(2, "College name must be at least 2 characters long").max(100),
    course: z.string().min(2, "Course must be at least 2 characters long").max(100),
    branch: z.string().min(2, "Branch must be at least 2 characters long").max(100),
    passoutYear: z.string().regex(/^(19|20)\d{2}$/, "Please enter a valid year (e.g., 2020)"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  const handleRegister = async (data: RegisterForm) => {
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Handle backend errors
        console.error(responseData);
        return;
      }

      // Success - redirect to login (or wherever makes sense)
      router.push("/login");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

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
            <Link href="/login" className="font-medium text-blue-600 hover:underline">
              Sign in instead
            </Link>
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                College Name
              </label>
              <input
                type="text"
                placeholder="ABC Institute of Technology"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                {...register("collegeName")}
              />
              {errors.collegeName && (
                <p className="mt-1 text-sm text-red-600">{errors.collegeName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Course
                </label>
                <select
                  className="w-full rounded-lg border border-gray-300 text-gray-700 px-4 py-3 focus:border-blue-500 focus:outline-none"
                  {...register("course")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option value="Btech/Be">BTech/BE</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="BCom">BCom</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Branch
                </label>
                <input
                  type="text"
                  placeholder="Computer Science"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  {...register("branch")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Passout Year
                </label>
                <select
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
                  {...register("passoutYear")}
                  defaultValue=""
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
                {...register("password")}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2472CE] text-white rounded-lg py-3 hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Creating account..." : "Create Free Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}