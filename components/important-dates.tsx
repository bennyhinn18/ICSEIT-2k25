export default function ImportantDates() {
  const dates = [
    { process: "Submission of full paper", date: "15th March, 2025" },
    { process: "Notification of acceptance", date: "20th March, 2025" },
    { process: "Camera-ready paper submission", date: "31st March, 2025" },
    { process: "Early bird registration deadline", date: "5th April, 2025" },
  ]

  return (
    <section id="dates" className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Important Dates</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {dates.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">{item.process}</h3>
            <p className="text-blue-600 mt-2">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

