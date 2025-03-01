import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Building2, MapPin } from "lucide-react"

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Arunachalam",
      title: "Professor",
      department: "Department of Manufacturing Process",
      institution: "IIT Madras",
      location: "Chennai, India",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Zhongxu Hu",
      title: "Associate Professor",
      department: "School of Engineering",
      institution: "Nanyang Technological University",
      location: "Singapore",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Nan Li",
      title: "Senior Lecturer",
      department: "School of Engineering",
      institution: "The University of Newcastle",
      location: "Callaghan, Australia",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Hasan Koten",
      title: "Professor",
      department: "Department of Engineering",
      institution: "Istanbul Medeniyet University",
      location: "Istanbul, Turkey",
      image: "/placeholder.svg",
    },
    // Add more speakers as needed
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Keynote Speakers</h1>
          <p className="text-xl">
            Learn from distinguished experts in sustainable engineering and innovative technologies
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{speaker.name}</CardTitle>
                  <p className="text-muted-foreground">{speaker.title}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>{speaker.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{speaker.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

