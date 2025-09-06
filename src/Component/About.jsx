import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <h3 className="text-red-600 text-2xl font-extrabold uppercase mb-4">
            teens Church
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Living Faith Church Teens is the youth ministry of Living Faith Church.
            Our purpose is to help teens know Jesus and strengthen their relationship
            with Him. We believe in raising the next generation to walk boldly in
            faith, grow in God’s Word, and impact their world with love.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through worship, discipleship, and outreach, we create a welcoming space
            where every teenager can belong, be encouraged, and discover their God-given
            purpose.
          </p>
        </div>

        {/* Images */}
        <div className="relative flex gap-4 justify-center">
          <img
            className="rounded-xl shadow-lg w-60 h-80 object-cover"
            src={about1}
            alt="Teens worshipping"
          />
          <img
            className="rounded-xl shadow-lg w-60 h-80 object-cover mt-10"
            src={about2}
            alt="Church community"
          />
        </div>
      </div>
    </section>
  )
}

export default About
