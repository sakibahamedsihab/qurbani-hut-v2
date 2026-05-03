"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking Successful!");

    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 sm:space-y-4 p-4 sm:p-5 md:p-6 bg-white shadow-lg rounded-xl border border-gray-100"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1A6B3C]">
        Book This Animal 🐄
      </h2>

      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs sm:text-sm text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border p-2 sm:p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]"
          required
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs sm:text-sm text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          className="border p-2 sm:p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs sm:text-sm text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="01xxxxxxxxx"
          className="border p-2 sm:p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]"
          required
        />
      </div>

      {/* Address Input */}
      <div className="flex flex-col gap-1">
        <label className="font-semibold text-xs sm:text-sm text-gray-700">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Your full address"
          className="border p-2 sm:p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6B3C]"
          rows="3"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#1A6B3C] hover:bg-[#14522e] text-white font-bold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-colors shadow-md"
      >
        Confirm Booking
      </button>
    </form>
  );
}
