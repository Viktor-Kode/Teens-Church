import React, { useState } from "react"

const faqs = [
  {
    question: "What time do services start?",
    answer:
      "Our Teens Church service starts every Sunday at 9:00 AM. We also meet during midweek fellowship.",
  },
  {
    question: "Do I need to register before attending?",
    answer:
      "No registration is required! Just come as you are. Our welcome team will be excited to receive you.",
  },
  {
    question: "What should I expect as a first timer?",
    answer:
      "You’ll experience uplifting worship, practical teaching, and a friendly community that loves God and cares about you.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "Not at all. Feel free to come dressed comfortably. Everyone is welcome!",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-red-600 text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
