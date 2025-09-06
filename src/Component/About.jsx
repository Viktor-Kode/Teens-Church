import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
          <h3 className="text-red-600 text-xl md:text-2xl font-extrabold uppercase mb-4">
            Teens Church
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Living Faith Church Teens is the youth ministry of Living Faith Church.
            Our purpose is to help teens know Jesus and strengthen their relationship
            with Him. We believe in raising the next generation to walk boldly in
            faith, grow in God’s Word, and impact their world with love.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Through worship, discipleship, and outreach, we create a welcoming space
            where every teenager can belong, be encouraged, and discover their God-given
            purpose.
          </p>
        </div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <img
            className="rounded-xl shadow-lg w-full sm:w-60 h-72 sm:h-80 object-cover"
            src={about1}
            alt="Teens worshipping"
          />
          <img
            className="rounded-xl shadow-lg w-full sm:w-60 h-72 sm:h-80 object-cover sm:mt-10"
            src={about2}
            alt="Church community"
          />
        </div>
      </div>
    </section>
  )
}

export default About
