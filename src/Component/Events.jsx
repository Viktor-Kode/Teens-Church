import React from 'react'

const Events = () => {
  const events = [
    {
      month: "November",
      day: "20",
      title: "Teens Weekend",
      description: "Teaching, weekly discussion, and Bible study",
    },
    {
      month: "December",
      day: "5",
      title: "Youth Outreach",
      description: "Serving the community with love and care",
    },
    {
      month: "December",
      day: "18",
      title: "Christmas Service",
      description: "A special celebration with worship and drama",
    },
  ];

  return (
    <section className="py-16 bg-black" id="events">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-600">Upcoming Events</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="text-white flex items-center justify-start gap-10 border-t border-b border-gray-700 py-6 px-4 rounded-lg hover:bg-gray-900 transition"
            >
              {/* Date */}
              <div className="text-center w-28">
                <h1 className="text-lg font-semibold text-red-600">{event.month}</h1>
                <h1 className="text-3xl font-bold text-red-400">{event.day}</h1>
              </div>

              {/* Event Info */}
              <div>
                <h1 className="text-xl font-semibold">{event.title}</h1>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
