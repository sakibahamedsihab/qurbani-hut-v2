"use client";
import Image from "next/image";
import Link from "next/link";
import { Tag, Calendar, Weight, MapPin, HeartPulse } from "lucide-react";
import BookingForm from "./BookingForm";
import { authClient } from "@/lib/auth-client";

export default function CowDetailPage({ cow }) {
  const { data: session } = authClient.useSession();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
          <Image src={cow.image} alt={cow.name} fill className="object-cover" />
        </div>

        <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {cow.name}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-[#1A6B3C] mb-4">
            ৳ {cow.price.toLocaleString()}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Tag size={20} className="text-[#1A6B3C]" />
              <span>Breed: {cow.breed}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Weight size={20} className="text-[#1A6B3C]" />
              <span>Weight: {cow.weight} kg</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} className="text-[#1A6B3C]" />
              <span>Location: {cow.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={20} className="text-[#1A6B3C]" />
              <span>Age: {cow.age} years</span>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 md:mt-6 bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <HeartPulse size={24} className="text-[#1A6B3C]" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Health & Description
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {cow.description ||
              "No additional description provided for this animal. Please contact the owner for more health and temperament details."}
          </p>
        </div>
      </div>
      {session ? (
        <BookingForm cow={cow} />
      ) : (
        <div className="p-4 bg-yellow-100 text-yellow-800 rounded">
          Please{" "}
          <Link href="/login" className="underline font-bold">
            Login
          </Link>{" "}
          to book this animal.
        </div>
      )}
    </div>
  );
}
