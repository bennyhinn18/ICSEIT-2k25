export default function OrganizingCommittee() {
  const committee = [
    { role: "Chief Patron", name: "Dr. Nazerath Charles", title: "Founder & Chairman" },
    { role: "Chief Patron", name: "Mrs. Sumitha C Judeson", title: "Vice Chairman" },
    { role: "Chief Patron", name: "Mr. Carol Judeson", title: "Chief Executive Officer" },
    { role: "Patron", name: "Dr. J. Jenix Rino", title: "Director" },
    { role: "Patron", name: "Dr. R. Suresh Premil Kumar", title: "Principal" },
    { role: "Convener", name: "Dr. F. Michael Raj", title: "Professor & Head / Mech" },
    { role: "Co-Convener", name: "Dr. R.K. Madhumathi", title: "Associate Professor & Head, Civil" },
    { role: "Co-Convener", name: "Dr. F.R. Shiny Malar", title: "Professor & Head / CSE" },
    { role: "Co-Convener", name: "Mr. T. Ragin", title: "Assistant Professor / Civil" },
    { role: "Co-Convener", name: "Mrs. V. Subitha", title: "Assistant Professor / CSE" },
    { role: "Coordinator", name: "Mr. S. Ajith kumar", title: "Assistant Professor / Mech" },
    { role: "Coordinator", name: "Mr. I.P. Rakhesh", title: "Assistant Professor / Mech" },
    { role: "Coordinator", name: "Mrs. T. Karthija", title: "Assistant Professor / CSE" },
    { role: "Coordinator", name: "Mrs. A. Binusha Sornil", title: "Assistant Professor / CSE" },
    { role: "Coordinator", name: "Mrs. N. Agnes Flora", title: "Assistant Professor / Civil" },
    { role: "Coordinator", name: "Mrs. S. Indira", title: "Assistant Professor / Civil" },
  ]

  return (
    <section className="bg-white rounded-lg flex flex-col items-center shadow-md p-4 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Organizing Committee</h2>
      {["Chief Patron", "Patron", "Convener", "Co-Convener", "Coordinator"].map((role) => (
      <div key={role} className="w-full flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{role}s</h3>
      <div className="flex flex-wrap justify-center gap-6">
      {committee
        .filter((member) => member.role === role)
        .map((member, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg w-full sm:w-auto text-center">
        <h4 className="font-semibold text-gray-800">{member.role}</h4>
        <p className="text-blue-600">{member.name}</p>
        <p className="text-gray-600 text-sm">{member.title}</p>
        </div>
        ))}
      </div>
      </div>
      ))}
    </section>
  )
}

