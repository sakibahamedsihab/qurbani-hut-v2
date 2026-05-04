"use client";
import { useState, useEffect } from "react";
import { User, Link as LinkIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session } = authClient.useSession();

  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    image: session?.user?.image || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Name cannot be empty");
      return;
    }

    setLoading(true);

    const { error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed. Please try again.");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/profile");
  };

  return (
    <section className="bg-linear-to-r from-green-50 via-sky-50 to-slate-50 min-h-screen p-10">
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1A6B3C]">
              Update Profile
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Edit your name and profile photo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#064E3B] text-white py-3 rounded-xl font-bold hover:bg-[#043d2e] transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
