import React from "react"
import { Facebook, Instagram, Youtube, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Logo & Mission */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Teens Church
          </h2>
          <p className="text-gray-400">
            Making Jesus known to everyone, everywhere. We are passionate about
            reaching teens with the Gospel and helping them grow in faith.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-red-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#resources" className="hover:text-red-500 transition">
                Resources
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-red-500 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-red-500 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <p className="flex items-center gap-2 mb-3">
            <Phone size={18} className="text-red-500" />
            <a
              href="https://wa.me/2348012345678"
              className="hover:text-green-500 transition"
            >
              WhatsApp Us
            </a>
          </p>
          <div className="flex space-x-5 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Teens Church — All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
