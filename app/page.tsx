import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Timeline from "@/components/timeline"

export default function Home() {
  const importantDates = [
    { date: "15th March, 2025", event: "Full Paper Submission Deadline" },
    { date: "20th March, 2025", event: "Notification of Acceptance" },
    { date: "31st March, 2025", event: "Camera-ready Paper Submission" },
    { date: "5th April, 2025", event: "Early Bird Registration Deadline" },
    { date: "11th April, 2025", event: "Conference Day 1" },
    { date: "12th April, 2025", event: "Conference Day 2" },
  ]

  const stats = [
    { number: "50+", label: "Speakers" },
    { number: "300+", label: "Expected Attendees" },
    { number: "30+", label: "Technical Sessions" },
    { number: "20+", label: "Countries" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <Image
          src="https://webdocs.pages.dev/assets/img/carousel/SM1.jpeg"
          alt="Conference venue"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 space-y-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            International Conference on Sustainable Engineering & Innovative Technologies
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Organized by the Departments of Computer Science & Engineering, Mechanical Engineering, and Electronics &
            Communication Engineering
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span>11th & 12th April, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span>Hybrid Mode</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/call-for-papers">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Key Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Speakers</h3>
              <p className="text-muted-foreground">
                Learn from distinguished researchers and industry leaders in sustainable engineering.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scopus Publication</h3>
              <p className="text-muted-foreground">Accepted papers will be published in Scopus/WoS indexed journals.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hybrid Format</h3>
              <p className="text-muted-foreground">Participate either in person or online for maximum accessibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Important Dates</h2>
          <Timeline items={importantDates} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Participate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for two days of inspiring talks, networking opportunities, and cutting-edge research presentations.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/registration" className="flex items-center gap-2">
              Register Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

