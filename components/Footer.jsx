import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-amber-400">
              Malhotra Caterers
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Creating unforgettable celebrations with premium catering, elegant
              decorations, and professional event management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-400 hover:text-amber-400">
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-400 hover:text-amber-400"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-gray-400 hover:text-amber-400"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-gray-400 hover:text-amber-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <span>Wedding Catering</span>
              <span>Corporate Events</span>
              <span>Birthday Parties</span>
              <span>Destination Weddings</span>
              <span>Event Management</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-amber-400" />
                <span>+91 7905808958</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-amber-400" />
                <span>malhotracaterers90@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-amber-400" />
                <span>Kanpur, Uttar Pradesh</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                target="_blank"
                href="https://www.instagram.com/malhotracatererkanpur?igsh=MjFqN2twODl5MHVy&utm_source=qr"
                className="w-10 h-10 rounded-full bg-white/5 border border-amber-500/20 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Malhotra Caterers Kanpur. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed with ❤️ for memorable celebrations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
