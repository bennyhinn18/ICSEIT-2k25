export default function CallForPapers() {
  const tracks = [
    {
      title: "Track – 1 | Computer Science Engineering & AIDS",
      topics: [
        "Dependable, Reliable and Autonomic Computing",
        "Block Chain Technology",
        "Software Engineering & Data Analytics",
        "Machine To Machine Communication",
        "Social Transformation",
        "Computer Vision & Image Processing",
        "Augmented Reality & Virtual Reality",
        "IOT With Healthcare & Agriculture",
        "Distributed Data Analytics",
        "Multimedia And Multi-Structured Data",
        "Real-World And Large-Scale Practices of Big Data",
        "Data Engineering Applications: Healthcare, Financial Systems",
        "Internet Infornomics: E-Learning, E-Commerce, E-Business, E-Government, E-Society",
        "Internet Security: Biometrics, Boundary Issues, Broadband Access Technologies",
        "Swarm Intelligence, Ant Colony Optimisation",
        "Bioinformatics Databases, Data Visualisation",
        "Possibility theory, Bayesian networks, hidden Markov models",
        "Big Data and Network Security & Service Intelligence",
        "Image processing, simulation/modeling",
        "Big Data collection in Communication Networks",
        "Network management contingency challenges",
        "Telecommunications management and control of heterogeneous networks",
        "Mobility control and mobility engineering",
        "Communications networks security and wireless hacking",
        "Core technologies and access technologies and networks",
        "Mobile and Data Communication Systems",
        "Adaptive Techniques for Increased Network Performance",
        "Edge cloud computing",
        "Embedded and Ubiquitous Computing",
        "Artificial/computational intelligence",
        "Machine Learning and Deep Learning",
        "Feature selection, Dimension Reduction, Pattern Classification/Recognition",
        "Expert systems, Neural Networks, Fuzzy Logic",
        "Rough Sets, Granular Computing, Data Mining",
        "Evolutionary Algorithms, Learning Classifiers, SVM",
      ],
    },
    {
      title: "Track – 2 | Mechanical & Civil Engineering",
      topics: [
        "Smart, Biomaterials and Renewable materials",
        "Additive Manufacturing & Functionally graded materials",
        "Super alloys",
        "Heat Treatment of Materials & Powder Metallurgy",
        "Thin films and coating technology",
        "Surface Engineering",
        "Mechanical behavior of materials",
        "Material characterization, Non-Destructive Evaluation & Failure analysis",
        "Integrated computational materials engineering",
        "Innovative materials processing Technologies",
        "New and Renewable Energy",
        "Sustainable Technologies for Energy Conversion",
        "Energy Storage and Power Engineering",
        "Sustainable Cities, Architecture and Green Buildings",
        "Green Design, Products and Manufacturing Processes",
        "Heating, Ventilation and Air Conditioning (HVAC)",
        "Bio resource and Bio energy",
        "Hydrogen Energy and Hydrogen Production",
        "Energy Efficiency and Applied Thermodynamics",
        "Biofuel, Bioenergy, and Biorefinery",
        "Bioplastic, Biomaterial, and Advanced Material",
        "Biotechnology and Biochemical Engineering",
        "Chemical Reaction Engineering and Catalysis",
        "Combustion Technology, Tribology",
        "Industrial Safety Techniques - Industries 5.0",
        "Agricultural, Marine Machinery Technology",
        "MEMS, NEMS",
        "Waste to Wealth",
      ],
    },
    {
      title: "Track - 3 | Electrical, Electronics & Communication Engineering",
      topics: [
        "Power System",
        "Integrated Circuit",
        "Nano-Photonics",
        "High voltage & Insulation technology",
        "Power System & Protection",
        "Semiconductor Technology",
        "Automatic Control System",
        "Analog & Digital Circuit",
        "Design & Development",
        "Smart and Micro Grid",
        "Microwave Technology",
        "Signal and Image Processing",
        "Control & Automation",
        "Advanced Control Strategies In Electric Vehicle",
        "Smart Grid, Micro Grid And Demand Response",
        "Advanced Metering Instrumentation And Communication System",
        "New Advance In Energy Storage Technologies Like Battery, Ultra Capacitors, Super Magnetic Energy Storage Systems",
        "Real Time Distribution Simulation",
        "Renewable Energy Sources",
        "Advanced Material For Photo Voltaic Cells",
        "Grid Integration Of Renewable Energy System",
        "Power Quality And Mitigation Techniques",
        "FACTS, HVDC, Custom Power Devices",
        "Signal Processing & Internet of Things",
        "Antenna Engineering",
        "Photonic Opto Electronic Structures / Devices",
        "Nanophotonics",
        "Consumer Electronics",
        "Smart Electronics Systems",
        "Low Power VLSI Circuits & Mixed Mode VLSI",
        "VLSI Verification And Testing",
        "Robotics And Automation",
      ],
    },
  ]

  return (
    <section className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Call for Papers</h2>
      <p className="text-gray-700 mb-6">Submissions are open and accepted for all domains</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          
          <div key={index} className="bg-gray-50  rounded-lg">
            <div>
                    <h3 className="text-xl font-semibold mb-4 bg-primary text-white p-1 text-center">{track.title}</h3>
                </div>
            
            <ul className="space-y-2 p-6">
              {track.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="text-gray-700">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

