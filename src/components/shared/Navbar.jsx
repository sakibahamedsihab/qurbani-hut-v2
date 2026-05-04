"use client";

import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  async function handleLogout() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="relative flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 bg-white border-b border-gray-100 z-50">
      <div className="text-green-700 flex gap-2 items-center text-2xl sm:text-3xl md:text-4xl font-bold">
        <Link href={"/"}>
          <h1>QurbaniHut.</h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        <Link href={"/"}>
          <li
            className={`${pathname === "/" ? "underline underline-offset-4 text-green-700" : "text-gray-700 hover:text-green-700 transition-colors"}`}
          >
            Home
          </li>
        </Link>
        <Link href={"/all-animals"}>
          <li
            className={`${pathname === "/all-animals" ? "underline underline-offset-4  text-green-700" : "text-gray-700 hover:text-green-700 transition-colors"}`}
          >
            All Animals
          </li>
        </Link>
        {session && (
          <Link href={"/profile"}>
            <li
              className={`${pathname === "/profile" ? "underline underline-offset-4  text-green-700" : "text-gray-700 hover:text-green-700 transition-colors"}`}
            >
              My Profile
            </li>
          </Link>
        )}
      </ul>

      {/* Desktop Auth Section */}
      <div className="hidden md:flex gap-3">
        {session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
              {session.user.name}
            </span>
            <Link href={"/profile"}>
              {session.user.image ? (
                <div className="relative w-10 h-10">
                  <Image
                    src={session.user.image}
                    className="rounded-full object-cover"
                    alt={session.user.name}
                    fill
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#1A6B3C] flex items-center justify-center text-white font-bold text-sm">
                  {session.user.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </Link>
            <Button onClick={handleLogout} variant="outline" size="sm">
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href={"/login"}>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button variant="outline" size="sm">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X size={28} className="text-green-700" />
        ) : (
          <Menu size={28} className="text-green-700" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden shadow-lg z-40">
          <div className="flex flex-col gap-1 px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`px-3 py-3 rounded-lg transition-colors ${pathname === "/" ? "bg-green-50 text-green-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
              >
                🏠 Home
              </div>
            </Link>
            <Link
              href={"/all-animals"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className={`px-3 py-3 rounded-lg transition-colors ${pathname === "/all-animals" ? "bg-green-50 text-green-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
              >
                🐄 All Animals
              </div>
            </Link>
            {session && (
              <Link href={"/profile"} onClick={() => setMobileMenuOpen(false)}>
                <div
                  className={`px-3 py-3 rounded-lg transition-colors ${pathname === "/profile" ? "bg-green-50 text-green-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`}
                >
                  👤 My Profile
                </div>
              </Link>
            )}
            <div className="my-4 border-t border-gray-200"></div>
            {session ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 px-3 py-2">
                  {session.user.image ? (
                    <div className="relative w-8 h-8">
                      <Image
                        src={session.user.image}
                        className="rounded-full object-cover"
                        alt={session.user.name}
                        fill
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#1A6B3C] flex items-center justify-center text-white font-bold text-xs">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {session.user.name}
                  </span>
                </div>
                <Button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  size="sm"
                >
                  🚪 Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href={"/login"} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    🔑 Login
                  </Button>
                </Link>
                <Link
                  href={"/register"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="sm"
                  >
                    📝 Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
