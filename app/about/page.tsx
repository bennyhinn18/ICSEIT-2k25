import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">About ICSEIT 2K25</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Institution</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stella Mary's College of Engineering, promoted by the Nova Educational Trust and established by Dr.
                Nazareth Charles, focuses on uplifting the underprivileged and women in society. The college offers a
                nurturing environment with cutting-edge infrastructure, aiming for excellence in academics and
                leadership skills.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It emphasizes outcome-based education and has achieved NAAC and NBA accreditation within nine years. The
                institution maintains an exceptional placement record, providing ample opportunities for students to
                achieve their career goals.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://sjc.microlink.io/ngW-9f_VXb9Hhs6q6W_ruclHwvfS441hvj7R6DZBbFUJ7fMr5T-haF_-L_MlNPtYA6gRsm3XosWvqci4-3-hkw.jpeg"
                alt="College building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a beacon of academic excellence, empowering future innovators with technical mastery to harness
                  technology for positive global change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To cultivate a vibrant learning environment where students delve into the frontiers of technical
                  knowledge, hone their problem-solving skills, and embrace innovation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To bridge the gap between technical brilliance and real-world impact by forging strong industry
                  partnerships and fostering cutting-edge research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

