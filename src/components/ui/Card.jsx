import { Button, Card, Chip } from "@heroui/react";
import { Badge, Helicopter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CowCard({ item }) {
  const healthColor = {
    Healthy: "text-green-600",
    Vaccinated: "text-blue-600",
    Premium: "text-purple-600",
    Organic: "text-emerald-700",
  };

  const borderColor = {
    Healthy: "border-green-600",
    Vaccinated: "border-blue-600",
    Premium: "border-purple-600",
    Organic: "border-emerald-700",
  };
  const { id, name, image, price, breed, location, health, weight } = item;
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* image */}
      <div className="relative w-full h-40 sm:h-48 md:h-56">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
        <Chip className="bg-amber-500 text-xs absolute rounded-lg px-2 py-1 top-2 right-2 sm:top-3 sm:right-3 text-white">
          {breed}
        </Chip>
      </div>
      {/* Name and origin */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 md:gap-5">
        <div>
          <h3 className="text-xl">{name}</h3>
          <p className="opacity-50">Origin: {location}</p>
        </div>

        <div className="flex justify-between ">
          <p className="text-amber-500 font-bold">{weight}kg</p>
          <span
            className={`text-sm font-medium ${healthColor[health]} border-2 ${borderColor[health]} px-5 rounded-lg`}
          >
            {health}
          </span>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <p>{price}BDT</p>
          <Link href={`/all-animals/${id}`}>
            <Button variant="outline">Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
