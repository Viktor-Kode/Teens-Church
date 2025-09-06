import React, { useState } from 'react'
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.jpg'
import g3 from '../assets/g3.jpg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'
import g6 from '../assets/g6.jpg'

const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g6]
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? images : images.slice(0, 3)

  return (
    <section id="gallery" className="py-20 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Gallery
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into our Teens Church activities, worship, and community life.
        </p>

        {/* Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className=" rounded-2xl transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition text-lg shadow-md"
            >
              View More Photos
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition text-lg shadow-md"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
