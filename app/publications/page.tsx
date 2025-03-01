import Timeline from "@/components/timeline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Award, FileText } from "lucide-react"

export default function PublicationsPage() {
  const publications = [
    {
      type: "Conference Proceedings",
      details: "All selected papers will be published in conference proceedings with ISBN number 978-93-342-0319-6",
      icon: BookOpen,
    },
    {
      type: "Scopus/WoS Indexed Journals",
      details: "Selected papers will be published in Scopus/WoS-indexed journals (additional charges apply)",
      icon: Award,
    },
  ]
  const importantDates = [
    { date: "15th March, 2025", event: "Full Paper Submission Deadline" },
    { date: "20th March, 2025", event: "Notification of Acceptance" },
    { date: "31st March, 2025", event: "Camera-ready Paper Submission" },
    { date: "5th April, 2025", event: "Early Bird Registration Deadline" },
    { date: "11th April, 2025", event: "Conference Day 1" },
    { date: "12th April, 2025", event: "Conference Day 2" },
  ]

  const guidelines = [
    "Papers must be original and unpublished",
    "Follow IEEE format for paper submission",
    "Maximum paper length: 6 pages",
    "Submit papers in PDF format",
    "Include author details and affiliations",
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-xl">Get your research published in prestigious journals and conference proceedings</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {publications.map((pub, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <pub.icon className="h-6 w-6 text-primary" />
                    {pub.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pub.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

            <Timeline items={importantDates} />

          <div className="container mb-4">
      <h2 className="text-3xl font-bold mb-3">Instructions to Authors</h2>
      <div className="p-1">
        <p>
            The authors willing to present papers in the conference are requested to submit the full-length paper not exceeding 6 pages (in IEEE format) by e-mail as an attachment to <strong><a href="mailto:conferencemech@stellamaryscoe.edu.in">conferencemech@stellamaryscoe.edu.in</a></strong> on or before the last date for submission. All the papers will be peer-reviewed by the experts. Authors of the selected paper will be intimated through e-mail.
        </p>
        <p>
            The first author should incorporate the reviewers' comments and submit the camera-ready paper along with the registration form. The registration fee includes the conference kit, refreshments, and working lunch. Accommodation will be provided based on prior request with an additional cost.
        </p>
      </div>
      
  </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Publication Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{guideline}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

