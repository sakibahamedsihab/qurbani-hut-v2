// components/ui/Profile.jsx
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Mail, User, Pencil } from "lucide-react";

export default function Profile() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm animate-pulse">
          Loading profile...
        </p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-600">You are not logged in.</p>
        <Link
          href="/login"
          className="bg-[#0d6b4a] text-white px-6 py-2 rounded-xl text-sm font-semibold"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const { name, email, image } = session.user;

  return (
    <div className="bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          {image ? (
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={image}
                alt={name}
                fill
                sizes="96px"
                className="rounded-full object-cover border-4 border-green-100"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-[#0d6b4a] flex items-center justify-center text-white text-3xl font-bold mb-4 border-4 border-green-100">
              {name?.charAt(0).toUpperCase()}
            </div>
          )}

          <h1 className="text-xl font-bold text-gray-900">{name}</h1>
          <p className="text-sm text-gray-400">QurbaniHat Member</p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-6" />

        {/* Info rows */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <User size={18} className="text-[#0d6b4a]" />
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                Full Name
              </p>
              <p className="text-sm font-medium text-gray-800">{name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <Mail size={18} className="text-[#0d6b4a]" />
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                Email Address
              </p>
              <p className="text-sm font-medium text-gray-800">{email}</p>
            </div>
          </div>
        </div>

        {/* Update button */}
        <Link href="/my-profile/update">
          <button className="w-full flex items-center justify-center gap-2 bg-[#0d6b4a] hover:bg-[#0a5a3d] text-white font-semibold text-sm py-3 rounded-xl transition-colors">
            <Pencil size={15} />
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
