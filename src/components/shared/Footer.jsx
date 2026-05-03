// components/Footer.jsx
import {
  PawPrint,
  Phone,
  Mail,
  MapPin,
  Globe, // replaces Facebook
  Camera, // replaces Instagram
  MessageCircle, // replaces Twitter
  Play, // replaces Youtube
} from "lucide-react";
import Link from "next/link";

const marketplaceLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Contact Support", href: "/contact" },
  { label: "Livestock Standards", href: "/livestock-standards" },
];

const categoryLinks = [
  { label: "Brahma Bulls", href: "/all-animals" },
  { label: "Local Sahiwal", href: "/all-animals" },
  { label: "Premium Goats", href: "/all-animals" },
  { label: "Camel and Sheep", href: "/all-animals" },
];

const socialLinks = [
  { icon: Globe, href: "https://facebook.com" },
  { icon: Camera, href: "https://instagram.com" },
  { icon: MessageCircle, href: "https://twitter.com" },
  { icon: Play, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand + About + Social */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <PawPrint className="text-[#0d6b4a]" size={22} />
            <span className="text-[#0d6b4a] font-bold text-lg">QurbaniHat</span>
          </Link>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Bangladesh&apos;s leading premium marketplace for ethical and
            high-quality Qurbani livestock. Trusted by thousands of families
            every Eid.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#0d6b4a] hover:text-white text-gray-500 flex items-center justify-center transition-colors"
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[#0d6b4a] mt-0.5 shrink-0" />
              <span className="text-sm text-gray-500">
                123 Mirpur Road, Dhaka-1216, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-[#0d6b4a] shrink-0" />
              <Link
                href="tel:+8801712345678"
                className="text-sm text-gray-500 hover:text-[#0d6b4a] transition-colors"
              >
                +880 1712-345678
              </Link>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-[#0d6b4a] shrink-0" />
              <Link
                href="mailto:support@qurbanihat.com"
                className="text-sm text-gray-500 hover:text-[#0d6b4a] transition-colors"
              >
                support@qurbanihat.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Marketplace */}
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-gray-700 uppercase mb-4">
            Marketplace
          </h4>
          <ul className="space-y-2.5">
            {marketplaceLinks.map((link) => (
              <li key={link.label}>
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
              <li key={link.label}>
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
      <div className="border-t border-gray-100 py-4 px-4">
        <p className="text-xs text-gray-400 text-center">
          &copy; 2024 QurbaniHat Ltd. Dhaka, Bangladesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
