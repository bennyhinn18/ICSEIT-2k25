export default function AdvisoryCommittees() {
  const internationalCommittee = [
    "Dr. Zhongxu Hu, Nanyang Technological University, Singapore.",
    "Dr. Nan Li, The University of Newcastle, Callaghan, Australia",
    "Dr. Hasan Koten, Istanbul Medeniyet University, Istanbul, Turkey",
    "Dr. Muhammad Kamran Jamil, Riphah International University, Lahore, Pakistan",
    "Dr. Mawardi Bahri, Hasanuddin University, Makassar, Indonesia",
    "Dr. Zafar Said, University of Sharjah, Sharjah, United Arab Emirates",
    "Dr. Kamal Shah, Prince Sultan University, Riyadh, Saudi Arabia",
    "Dr. K Maharik, American University of the Middle East, Kuwait",
    "Dr. Shahzad Sarfraz, National University, Faisalabad, Pakistan",
    "Dr. Ibrahim Hotan Alsohaimi, Jouf University, Saudi Arabia",
    "Dr. Edwin Geo Varuvel, Istinye University, Turkey",
    "Prof. Dr. Mohd Rosli Mohd Hasan, Universiti Sains Malaysia",
    "Prof. Dr. Yahya Bozkurt, Marmara University, Maltepe- Turkey",
    "Prof. Dr. Ramadhansyah Putra Jaya, Universiti Malaysia Pahang, Malaysia",
    "Dr. Lenin Anselm, Shinas College of Technology, Oman",
    "Dr. R. Reji Kumar, University Malaysia Pahang, Malaysia",
  ]

  const nationalCommittee = [
    "Dr. Arunachalam, Department of Manufacturing Process, IIT Madras.",
    "Dr. Rajaravi C, Associate Professor, Hindusthan College of Engineering and Technology, Coimbatore, Tamil Nadu.",
    "Dr. A. Amala Mithin Minther Singh, DMI College of Engineering, Chennai.",
    "Prof. Dr. Prakash Arul Jose, J Department of Civil Engineering Paavai College of Engineering, Tamil Nadu.",
    "Dr. J.E.Judith, Department of Computer Science and Engineering, Noorul Islam Centre for Higher Education, Tamil Nadu.",
    "Dr. Muthuraj, Computer Science and Engineering, MIT, Chennai.",
    "Dr. Jino Ragavan, Department of Civil Engineering, Vels University, Chennai.",
    "Dr. Puguzhenithi Sugumaran, Department of Electrical and Electronics Engineering, College of Engineering Guindy, Chennai.",
    "Dr. Immanual, Department of Bio Technology, Marines Science and Technology Rajakamanagalam.",
    "Dr. Rajakarunakaran, Department of Mechanical Engineering, Ramco Institute of Technology, Tamil Nadu.",
    "Dr. Ilayaperumal, Department of Mechanical Engineering. Lovely University, Chandigarh, Punjab.",
    "Dr. S.C. Vettivel, Chandigarh College of Engineering and Technology, India.",
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Advisory Committees</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">International Advisory Committee</h3>
          <ul className="space-y-2">
            {internationalCommittee.map((member, index) => (
              <li key={index} className="text-gray-700">
                {member}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">National Advisory Committee</h3>
          <ul className="space-y-2">
            {nationalCommittee.map((member, index) => (
              <li key={index} className="text-gray-700">
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

