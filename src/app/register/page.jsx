// app/register/page.jsx
"use client";
import { useState } from "react";
import { User, Mail, Link as LinkIcon, Lock, Globe } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    const { error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      image: formData.image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed. Please try again.");
      return;
    }

    toast.success("Account created successfully!");
    router.push("/login");
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50 p-10">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1A6B3C]">
              Create Account
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Join the premium community of livestock trade.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border p-2.5 pl-10 rounded-xl outline-none focus:ring-2 focus:ring-[#1A6B3C]/20 focus:border-[#1A6B3C] transition-all"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full border p-2.5 pl-10 rounded-xl outline-none focus:ring-2 focus:ring-[#1A6B3C]/20 focus:border-[#1A6B3C] transition-all"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Photo URL
              </label>
              <div className="relative">
                <LinkIcon
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://image-url.com/profile.jpg"
                  className="w-full border p-2.5 pl-10 rounded-xl outline-none focus:ring-2 focus:ring-[#1A6B3C]/20 focus:border-[#1A6B3C] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="w-full border p-2.5 pl-10 rounded-xl outline-none focus:ring-2 focus:ring-[#1A6B3C]/20 focus:border-[#1A6B3C] transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#064E3B] text-white py-3 rounded-xl font-bold hover:bg-[#043d2e] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <hr className="border-gray-200" />
            <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-4 text-xs text-gray-400 font-medium">
              OR
            </span>
          </div>

          {/* Google Register */}
          <button
            onClick={handleGoogleRegister}
            className="w-full border border-gray-200 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all font-medium text-gray-700"
          >
            <Globe size={20} className="text-blue-500" />
            Register with Google
          </button>

          {/* Login link */}
          <p className="text-center mt-8 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#1A6B3C] font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
