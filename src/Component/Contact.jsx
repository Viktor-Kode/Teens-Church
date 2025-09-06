import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or want to get involved? Reach out to us—we’d love to hear from you!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <p>We’re here to answer your questions and support your journey.</p>
            </div>
            <div>
              <p className="font-medium">📍 Address:</p>
              <p>49VC+477, Idi-aba Abokuta, Nigeria</p>
            </div>
            <div>
              <p className="font-medium">📞 Phone:</p>
              <p>+234 800 123 4567</p>
            </div>
            <div>
              <p className="font-medium">✉️ Email:</p>
              <p>info@teenschurch.org</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
