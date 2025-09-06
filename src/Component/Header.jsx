import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white mb-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div id="logo" className="w-20">
          <img src={Logo} alt="Living Faith Church Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="ml-8 text-lg font-semibold hover:text-red-700 transition-colors">
            <a href="#">Home</a>
          </li>
          <li className="ml-8 text-lg font-semibold hover:text-red-700 transition-colors">
            <a href="#about">About</a>
          </li>
          <li className="ml-8 text-lg font-semibold hover:text-red-700 transition-colors">
            <a href="#resources">Resources</a>
          </li>
           <li className="ml-8 text-lg font-semibold hover:text-red-700 transition-colors">
            <a href="#events">Events</a>
          </li>
          <li className="ml-8 text-lg font-semibold hover:text-red-700 transition-colors">
            <a href="#gallery">Gallery</a>
          </li>
         
        </ul>

        {/* Contact Button (Desktop) */}
        <div
          id="btn"
          className="hidden md:block cursor-pointer border border-red-600 px-6 py-2 rounded-3xl text-lg font-bold text-red-700 hover:border-black hover:text-black transition-colors"
        >
          <a href="#contact">Contact Us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-red-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li className="text-lg font-semibold hover:text-red-700 transition-colors">
              <a href="#" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="text-lg font-semibold hover:text-red-700 transition-colors">
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li className="text-lg font-semibold hover:text-red-700 transition-colors">
              <a href="#resources" onClick={() => setIsOpen(false)}>Resources</a>
            </li>
            <li className="text-lg font-semibold hover:text-red-700 transition-colors">
              <a href="#ministries" onClick={() => setIsOpen(false)}>Ministries</a>
            </li>
            <li className="text-lg font-semibold hover:text-red-700 transition-colors">
              <a href="#events" onClick={() => setIsOpen(false)}>Events</a>
            </li>
            <li>
              <div className="cursor-pointer border border-red-600 px-6 py-2 rounded-3xl text-lg font-bold text-red-700 hover:border-black hover:text-black transition-colors">
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section className="mt-10 px-6 md:px-20 text-center">
        <h1 className="text-xl md:text-2xl font-extrabold text-red-600 uppercase">teens church (living faith church)</h1>
        <p className="mt-4 text-3xl md:text-6xl font-semibold leading-tight">
          Sharing the <span className="text-red-600">Gospel</span> with Everyone, Everywhere
        </p>
        <p className="mt-5 font-light text-lg md:text-2xl max-w-3xl mx-auto">
          Everyone is welcome. Everyone has a next best step. Everyone can make a difference.
        </p>
        <button className="mt-6 px-8 py-4 rounded-3xl bg-black text-white text-lg md:text-xl font-medium hover:bg-red-700 transition-colors">
          Get in Touch
        </button>
      </section>
    </header>
  )
}

export default Header
