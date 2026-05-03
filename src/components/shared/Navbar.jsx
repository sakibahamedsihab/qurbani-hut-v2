"use client";

import { Button } from "@heroui/react";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <nav className="flex justify-between items-center px-20 py-5">
      <div className="text-green-700 flex gap-2 items-center text-4xl font-bold">
        <h1>QurbaniHut.</h1>
      </div>

      <ul className="flex gap-5">
        <Link href={"/"}>
          <li>Home</li>
        </Link>

        <Link href={"/all-animals"}>
          <li>All Animals</li>
        </Link>
      </ul>

      <div className="flex gap-3">
        {session ? (
          <div className="flex items-center gap-5">
            <h1>{session.user.name}</h1>
            <div className="relative w-15 h-15">
              <Link href={"/profile"}>
                <Image
                  src={session.user.image}
                  className="rounded-full"
                  alt={session.user.name}
                  fill
                />
              </Link>
            </div>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href={"/login"}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
