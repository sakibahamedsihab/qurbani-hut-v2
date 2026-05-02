import { Button } from "@heroui/react";
import { PawPrint } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="text-green-700 flex gap-2 items-center text-4xl font-bold">
        <h1>QurbaniHut.</h1>
      </div>

      <ul className="flex gap-5">
        <Link href={"/"}>
          <li>Home</li>
        </Link>

        <Link href={"all-animals"}>
          <li>All Animals</li>
        </Link>
      </ul>

      <div className="flex gap-5">
        <Link href={"/login"}>
          <Button variant="outline">Login</Button>
        </Link>
        <Link href={"/register"}>
          <Button variant="outline">Register</Button>
        </Link>
      </div>
    </nav>
  );
}
