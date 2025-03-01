
"use client"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CreditCard, Mail } from "lucide-react"

export default function RegistrationPage() {
  const registrationFees = [
    {
      category: "Students (UG/PG)",
      national: { physical: 800, online: 500 },
      international: 50,
    },
    {
      category: "Research Scholars / Delegates from Academia",
      national: { physical: 1000, online: 800 },
      international: 70,
    },
    {
      category: "Delegates from Industry",
      national: { physical: 1500, online: 1200 },
      international: 100,
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Registration</h1>
          <p className="text-xl">
            Register now to participate in the International Conference on Software Engineering and Information
            Technology - 2K25.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Registration Fees</h2>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-black font-bold">Category</TableHead>
                  <TableHead className="text-black font-bold" colSpan={2}>National Delegates (Rs)</TableHead>
                  <TableHead className="text-black font-bold">International Delegates (USD)</TableHead>
                </TableRow>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Physical Mode</TableHead>
                  <TableHead>Online Mode</TableHead>
                  <TableHead>Online Mode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrationFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell>{fee.category}</TableCell>
                    <TableCell>{fee.national.physical}</TableCell>
                    <TableCell>{fee.national.online}</TableCell>
                    <TableCell>{fee.international}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">How to Register</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </span>
                  Fill Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Click the Register Now button below to fill in the registration form with your details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </span>
                  Make Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make the payment via Bank Transfer, UPI, or GPay using the provided account details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </span>
                  Submit Receipt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload your payment receipt in the registration form or email it to icseit25@stellamaryscoe.edu.in
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" className="gap-2">
              Register Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Bank Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Account Name:</strong> VEI Technologies Pvt. Ltd.
                </p>
                <p>
                  <strong>Account No:</strong> 29040200010966
                </p>
                <p>
                  <strong>Bank:</strong> Bank of Baroda
                </p>
                <p>
                  <strong>Branch:</strong> Tindivanam
                </p>
                <p>
                  <strong>IFSC Code:</strong> BARB0VJTIND (5th character: zero)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  UPI Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>UPI ID:</strong> icseit25@upi
                </p>
                <p>
                  <strong>Name:</strong> VEI Technologies Pvt. Ltd.
                </p>
                <div className="text-center mt-4">
                <img src="https://infance-tony.github.io/ICSEIT-2K25/qr.png" alt="QR Code for Payment" width="500" height="550"></img>
                <p className="mt-2">Scan the QR Code for UPI Payments.</p>
            </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Email:</strong> icseit25@stellamaryscoe.edu.in
                </p>
                <p>
                  <strong>Phone:</strong> +91 9003785766
                </p>
                <p>
                  <strong>GPay:</strong> 9003785766
                </p>
              </CardContent>
            </Card>
          </div>
            <section className="px-4 mt-4">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Button onClick={() => window.location.href = "/call-for-papers"} variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                  Call for Papers
                </Button>
                <Button onClick={() => window.location.href = "/submit-paper"} variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                  Submit a Paper
                </Button>
                <Button onClick={() => window.location.href = "/paper-template"} variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-white">
                  Paper Template
                </Button>
              </div>
            </div>
            </section>
        </div>
      </section>
    </div>
  )
}

