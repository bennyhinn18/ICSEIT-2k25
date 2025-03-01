export default function RegistrationFees() {
  const fees = [
    { category: "Students (UG/PG)", national: { physical: 800, online: 500 }, international: 50 },
    { category: "Research Scholars / Academia", national: { physical: 1000, online: 800 }, international: 70 },
    { category: "Industry Delegates", national: { physical: 1500, online: 1200 }, international: 100 },
  ]

  return (
    <section
      id="registration"
      className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Registration Fees</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Category</th>
              <th className="p-3" colSpan={2}>
                National Delegates (Rs)
              </th>
              <th className="p-3">International (USD)</th>
            </tr>
            <tr className="bg-gray-50">
              <th className="p-3"></th>
              <th className="p-3">Physical</th>
              <th className="p-3">Online</th>
              <th className="p-3">Online</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.national.physical}</td>
                <td className="p-3">{item.national.online}</td>
                <td className="p-3">{item.international}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

