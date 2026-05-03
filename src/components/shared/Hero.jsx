// components/Hero.jsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[560px]">
      <Image
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&auto=format"
        alt="Green countryside fields for Qurbani livestock"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/50 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 max-w-lg">
        {/* ✅ Slides in from left */}
        <h1 className="animate__animated animate__fadeInLeft text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
          Find Your Perfect Qurbani Animal
        </h1>

        <p className="animate__animated animate__fadeInLeft animate__delay-1s text-xs sm:text-sm text-gray-200 leading-relaxed mb-6 sm:mb-8">
          Experience the most trusted digital marketplace for high-quality
          livestock. Secure your animal from the comfort of your home with
          verified sellers and transparent logistics.
        </p>

        <div className="animate__animated animate__fadeInUp animate__delay-2s flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Link
            href="/all-animals"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-sm px-6 py-2.5 rounded-md transition-colors"
          >
            Browse Animals
          </Link>
          <Link
            href="#tips"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold text-sm px-6 py-2.5 rounded-md backdrop-blur-sm transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
