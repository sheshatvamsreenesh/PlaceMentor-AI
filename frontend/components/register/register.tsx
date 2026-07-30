import Brand from "../brand";
import Link from "next/link";

export default function RegisterForm() {
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

                <form className="space-y-5">

                    <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
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
                            />
                        </div>

                        {/* Passout Year */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                            Passout Year
                            </label>

                            <select
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none"
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