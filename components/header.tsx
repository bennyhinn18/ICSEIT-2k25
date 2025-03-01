import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">ICSEIT 2K25</h1>
        <h2 className="text-xl text-center mt-2 text-gray-600">
          International Conference on Sustainable Energy and Innovation Technology
        </h2>
        <p className="text-center mt-2 text-gray-500">11th & 12th April, 2025 (HYBRID MODE)</p>
        <nav className="mt-6">
          <ul className="flex justify-center space-x-6">
            {["About", "Dates", "Submission", "Registration", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

