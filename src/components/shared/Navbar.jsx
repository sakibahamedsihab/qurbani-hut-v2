"use client";

import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 bg-white border-b border-gray-100">
      <div className="text-green-700 flex gap-2 items-center text-2xl sm:text-3xl md:text-4xl font-bold">
        <Link href={"/"}>
          <h1>QurbaniHut.</h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        <Link href={"/"}>
          <li className="text-gray-700 hover:text-green-700 transition-colors">
            Home
          </li>
        </Link>
        <Link href={"/all-animals"}>
          <li className="text-gray-700 hover:text-green-700 transition-colors">
            All Animals
          </li>
        </Link>
      </ul>

      {/* Desktop Auth Section */}
      <div className="hidden md:flex gap-3">
        {session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
              {session.user.name}
            </span>
            <div className="relative w-10 h-10">
              <Link href={"/profile"}>
                <Image
                  src={session.user.image}
                  className="rounded-full"
                  alt={session.user.name}
                  fill
                />
              </Link>
            </div>
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
        className="md:hidden p-2"
      >
        {mobileMenuOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <Menu size={24} className="text-gray-700" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden shadow-md">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href={"/"} onClick={() => setMobileMenuOpen(false)}>
              <span className="text-gray-700 hover:text-green-700 transition-colors">
                Home
              </span>
            </Link>
            <Link
              href={"/all-animals"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-gray-700 hover:text-green-700 transition-colors">
                All Animals
              </span>
            </Link>
            <hr className="my-2" />
            {session ? (
              <div className="flex flex-col gap-3">
                <Link
                  href={"/profile"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src={session.user.image}
                        className="rounded-full"
                        alt={session.user.name}
                        fill
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {session.user.name}
                    </span>
                  </div>
                </Link>
                <Button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href={"/login"} onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link
                  href={"/register"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" size="sm" className="w-full">
                    Register
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
