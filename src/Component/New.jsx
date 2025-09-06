import React from 'react'

const NewHere = () => {
  return (
    <section id="new-here" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          New Here?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Welcome to Teens Church! 🎉  
          Whether it’s your first time visiting or you’ve been curious for a while, 
          we’re excited to have you. Here’s what you can expect.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Friendly Community
            </h3>
            <p className="text-gray-600">
              Meet other teens who love God, grow together, and form real friendships.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Engaging Services
            </h3>
            <p className="text-gray-600">
              Expect uplifting worship, practical teachings, and activities you’ll enjoy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Next Steps
            </h3>
            <p className="text-gray-600">
              Got questions? Our leaders are here to guide you, pray with you, 
              and help you get started in your journey.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition text-lg shadow-md"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewHere
