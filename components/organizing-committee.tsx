export default function OrganizingCommittee() {
  const committee = [
    { role: "Chief Patron", name: "Dr. Nazerath Charles", title: "Founder & Chairman" },
    { role: "Patron", name: "Mrs. Sumitha C Judeson", title: "Vice Chairman" },
    { role: "Patron", name: "Mr. Carol Judeson", title: "Chief Executive Officer" },
    { role: "Patron", name: "Dr. J. Jenix Rino", title: "Director" },
    { role: "Patron", name: "Dr. R. Suresh Premil Kumar", title: "Principal" },
    { role: "" },
    { role: "Patron", name: "Dr. R. Suresh Premil Kumar", title: "Principal" },
    { role: "Convener", name: "Dr. F. Michael Raj", title: "Professor & Head / Mech" },
    { role: "Co-Convener", name: "Dr. R.K. Madhumathi", title: "Associate Professor & Head, Civil" },
    { role: "Co-Convener", name: "Dr. F.R. Shiny Malar", title: "Professor & Head / CSE" },
    { role: "Coordinator", name: "Mr. T. Ragin", title: "Assistant Professor / Civil" },
    { role: "Coordinator", name: "Mrs. V. Subitha", title: "Assistant Professor / CSE" },
    { role: "Coordinator", name: "Mr. S. Ajith kumar", title: "Assistant Professor / Mech" },
    { role: "Coordinator", name: "Mr. I.P. Rakhesh", title: "Assistant Professor / Mech" },
    { role: "Coordinator", name: "Mrs. T. Karthija", title: "Assistant Professor / CSE" },
    { role: "Coordinator", name: "Mrs. A. Binusha Sornil", title: "Assistant Professor / CSE" },
    { role: "Coordinator", name: "Mrs. N. Agnes Flora", title: "Assistant Professor / Civil" },
    { role: "Coordinator", name: "Mrs. S. Indira", title: "Assistant Professor / Civil" },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Organizing Committee</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committee.map((member, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">{member.role}</h3>
            <p className="text-blue-600">{member.name}</p>
            <p className="text-gray-600 text-sm">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

