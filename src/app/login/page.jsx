"use client";
import { useState } from "react";
import { Mail, Lock, LogIn, Globe } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
// import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formData.email || !formData.password) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   const { data, error } = await authClient.signIn.email({
  //     email: formData.email,
  //     password: formData.password,
  //   });

  //   if (error) {
  //     toast.error(error.message || "Invalid credentials!");
  //   } else {
  //     toast.success("Welcome Back!");
  //     router.push("/");
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   await authClient.signIn.social({
  //     provider: "google",
  //     callbackURL: "/",
  //   });
  // };

  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50 p-10">
      <div className="flex flex-col items-center justify-center">
        {/* Logo Area */}
        <div className="mb-6 flex items-center gap-2 text-[#1A6B3C] font-bold text-2xl">
          <span>🚜</span> Qurbani Market
        </div>

        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Access your account to manage your livestock listings
            </p>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-3.5 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full border border-gray-200 p-3 pl-10 rounded-xl bg-blue-50/30 outline-none focus:ring-2 focus:ring-[#1A6B3C]/20 focus:border-[#1A6B3C] transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-[#1A6B3C] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-3.5 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border border-gray-200 p-3 pl-10 rounded-xl bg-blue-50/30 outline-none focus:ring-2 focus:ring-[#1A6B3C]/20 focus:border-[#1A6B3C] transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#064E3B] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#043d2e] transition-all shadow-md"
            >
              Login <LogIn size={18} />
            </button>
          </form>

          <div className="relative my-8 text-center">
            <hr className="border-gray-100" />
            <span className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-white px-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Or continue with
            </span>
          </div>

          {/* Google Login */}
          <button
            // onClick={handleGoogleLogin}
            className="w-full border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all font-medium text-gray-700 shadow-sm"
          >
            <Globe size={18} className="text-blue-500" />
            Login with Google
          </button>

          <p className="text-center mt-8 text-gray-600 text-sm">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="text-[#1A6B3C] font-bold hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
