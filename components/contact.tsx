export default function Contact() {
  return (
    <section id="contact" className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Queries</h3>
          <p className="text-gray-700">Email: rakhesh@stellamaryscoe.edu.in</p>
          <p className="text-gray-700">Phone: 9790469389, 9003785766</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
          <p className="text-gray-700">Account Name: VEI Technologies Pvt. Ltd.</p>
          <p className="text-gray-700">Account No: 29040200010966</p>
          <p className="text-gray-700">Bank: Bank of Baroda</p>
          <p className="text-gray-700">Branch: Tindivanam</p>
          <p className="text-gray-700">IFSC Code: BARB0VJTIND (5th character: zero)</p>
          <p className="text-gray-700">GPay: 9003785766</p>
        </div>
      </div>
    </section>
  )
}

