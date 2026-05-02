"use client";
import Image from "next/image";
import Link from "next/link";
import { Tag, Calendar, Weight, MapPin, HeartPulse } from "lucide-react";
import BookingForm from "./BookingForm";

export default function CowDetailPage({ cow }) {
  const isLoggedIn = true;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="space-y-6">
        <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-lg">
          <Image src={cow.image} alt={cow.name} fill className="object-cover" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{cow.name}</h1>
          <p className="text-2xl font-semibold text-[#1A6B3C] mb-4">
            ৳ {cow.price.toLocaleString()}
          </p>

          <div className="grid grid-cols-2 gap-4">
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
              <span>Age: {cow.age} months</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <HeartPulse size={24} className="text-[#1A6B3C]" />
            <h3 className="text-xl font-bold text-gray-800">
              Health & Description
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {cow.description ||
              "No additional description provided for this animal. Please contact the owner for more health and temperament details."}
          </p>
        </div>
      </div>
      {isLoggedIn ? (
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
