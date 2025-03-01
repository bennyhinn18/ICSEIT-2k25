export default function PaperSubmission() {
  return (
    <section id="submission" className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Paper Submission</h2>
      <div className="space-y-4">
        <p className="text-gray-700">
          Authors are requested to submit full-length papers (max 6 pages, IEEE format) via email to:
        </p>
        <p className="text-blue-600 font-semibold">icseit25@stellamaryscoe.edu.in</p>
        <p className="text-gray-700">
          All papers will undergo peer review. Selected papers will be notified via email.
        </p>
        <p className="text-gray-700">
          Accepted papers will be published in the conference proceedings (ISBN: 978-93-342-0319-6).
        </p>
        <p className="text-gray-700">For Scopus/WoS-indexed journals, additional charges apply.</p>
      </div>
    </section>
  )
}

