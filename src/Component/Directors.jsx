import React from "react"
import presidentImg from "../assets/president.jpg"
import vicePresidentImg from "../assets/vicepresident.jpg"
import secretaryImg from "../assets/secretary.jpg"

const leaders = [
  {
    name: "John Doe",
    role: "President",
    img: presidentImg,
  },
  {
    name: "Mary Smith",
    role: "Vice President",
    img: vicePresidentImg,
  },
  {
    name: "James Brown",
    role: "Secretary",
    img: secretaryImg,
  },
]

const Board = () => {
  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Board of Directors
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the dedicated leaders guiding Teens Church with vision and faith.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-red-600 font-medium">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Board
