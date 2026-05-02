// components/Footer.jsx
import { PawPrint } from "lucide-react";
import Link from "next/link";

const marketplaceLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Contact Support", href: "/contact" },
  { label: "Livestock Standards", href: "/livestock-standards" },
];

const categoryLinks = [
  { label: "Brahma Bulls", href: "/animals?type=brahma" },
  { label: "Local Sahiwal", href: "/animals?type=sahiwal" },
  { label: "Premium Goats", href: "/animals?type=goat" },
  { label: "Camel and Sheep", href: "/animals?type=camel" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <PawPrint className="text-[#0d6b4a]" size={22} />
            <span className="text-[#0d6b4a] font-bold text-lg">
              Qurbani Market
            </span>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
            Bangladesh&apos;s leading premium marketplace for ethical and
            high-quality livestock.
          </p>
        </div>

        {/* Marketplace */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-4">
            Marketplace
          </h4>
          <ul className="space-y-2.5">
            {marketplaceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#0d6b4a] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-4">
            Categories
          </h4>
          <ul className="space-y-2.5">
            {categoryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-[#0d6b4a] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 py-4 px-6">
        <p className="text-xs text-gray-400 text-center">
          &copy; 2024 Qurbani Market Ltd. Dhaka, Bangladesh. Licensed
          Marketplace.
        </p>
      </div>
    </footer>
  );
}
