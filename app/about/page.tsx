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
          <div className="grid lg:grid-cols-2 gap-12 items-center p-6">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Institution</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
              Stella Mary's College of Engineering, promoted by the Nova Educational Trust and
                established by Dr. Nazareth Charles, focuses on uplifting the underprivileged and women in
                society. The college offers a nurturing environment with cutting-edge infrastructure, aiming
                for excellence in academics and leadership skills. It emphasizes outcome-based education
                and has achieved NAAC and NBA accreditation within nine years. The institution maintains
                an exceptional placement record, providing ample opportunities for students to achieve
                their career goals.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                It emphasizes outcome-based education and has achieved NAAC and NBA accreditation within nine years. The
                institution maintains an exceptional placement record, providing ample opportunities for students to
                achieve their career goals.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://infance-tony.github.io/ICSEIT-2K25/smce.png"
                alt="College building"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-3">About the Department of Computer Science and Engineering</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center p-6">
           
            <div className="relative h-[400px] rounded-lg overflow-hidden">
            
              <Image
                src="https://infance-tony.github.io/ICSEIT-2K25/cse.jpg"
                alt="College building"
                fill
                className="object-cover"
              />
            </div>
            <div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
              Established in 2013, the Department of Computer Science and Engineering (CSE) combines academic rigor with a commitment to technological advancement and innovation. The department provides students with hands-on experience through state-of-the-art laboratories, industry partnerships, and real-world projects, ensuring they are well-prepared for professional challenges in the tech industry.

The department is committed to nurturing students who excel in advanced mechanical technologies, fostering a culture of creativity and excellence. The Design and Fabrication Laboratory remains a cornerstone for groundbreaking projects that align with sustainable practices.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                It emphasizes outcome-based education and has achieved NAAC and NBA accreditation within nine years. The
                institution maintains an exceptional placement record, providing ample opportunities for students to
                achieve their career goals.
              </p>
            </div>
            
          </div>
          <h2 className="text-3xl font-bold mb-3">About the Department of Mechanical Engineering</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center p-6">
           
            <div className="relative h-[400px] rounded-lg overflow-hidden">
            
              <Image
                src="https://infance-tony.github.io/ICSEIT-2K25/cse.jpg"
                alt="College building"
                fill
                className="object-cover"
              />
            </div>
            <div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
              Established in 2013, the Department of Computer Science and Engineering (CSE) combines academic rigor with a commitment to technological advancement and innovation. The department provides students with hands-on experience through state-of-the-art laboratories, industry partnerships, and real-world projects, ensuring they are well-prepared for professional challenges in the tech industry.

The department is committed to nurturing students who excel in advanced mechanical technologies, fostering a culture of creativity and excellence. The Design and Fabrication Laboratory remains a cornerstone for groundbreaking projects that align with sustainable practices.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                It emphasizes outcome-based education and has achieved NAAC and NBA accreditation within nine years. The
                institution maintains an exceptional placement record, providing ample opportunities for students to
                achieve their career goals.
              </p>
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
                
                <p className="text-muted-foreground">To become a globally recognized leader in engineering education, research, and innovation, empowering professionals to address sustainable development challenges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                
                <ul className="list-disc list-inside text-muted-foreground">
                <li>Deliver an exceptional learning environment that integrates theoretical and practical knowledge in mechanical engineering.</li>
                <li>Encourage research and development aligned with sustainability and technological advancements.</li>
                <li>Equip students to excel in global industries, academia, and entrepreneurial ventures.</li>
                </ul>
                
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

