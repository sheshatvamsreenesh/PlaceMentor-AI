import { FcGoogle } from "react-icons/fc";
import Brand from "../brand";
import Link from "next/link";
export default function LoginForm() {
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

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
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
            <Link href="/signup" className="text-[#2472CE] font-semibold hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>

  )
}
   