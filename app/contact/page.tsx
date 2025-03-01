"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Calendar,
  Users,
  CheckCircle,
  Loader2,
  ArrowRight,
  FileText,
  HelpCircle,
  Globe,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("form")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(values)
      form.reset()
      setActiveTab("success")
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Conference Attendee",
      message: "The organizers were incredibly responsive to my questions. Can't wait for the event!",
    },
    {
      name: "Dr. Thomas Chen",
      role: "Speaker",
      message: "Excellent communication throughout the paper submission process. Very professional team.",
    },
    {
      name: "Maria Rodriguez",
      role: "Research Scholar",
      message: "Quick responses to all my inquiries. The team was helpful and knowledgeable.",
    },
  ]

  const faqs = [
    {
      question: "What is the deadline for paper submission?",
      answer:
        "The deadline for paper submission is March 15, 2025. All submissions must be made through the conference portal.",
    },
    {
      question: "Is there a registration fee for the conference?",
      answer:
        "Yes, there is a registration fee. Early bird registration is available until January 31, 2025. Please check the registration page for detailed fee structure.",
    },
    {
      question: "Will the conference be held in-person or virtually?",
      answer: "The conference will be held in a hybrid format, allowing both in-person and virtual participation.",
    },
    {
      question: "How can I become a sponsor for the conference?",
      answer:
        "Please contact us through this form or directly email us at icseit25@stellamaryscoe.edu.in for sponsorship opportunities.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Contact Form */}
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="form">Contact Form</TabsTrigger>
              <TabsTrigger value="success">Submission Status</TabsTrigger>
            </TabsList>

            <TabsContent value="form">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Send className="mr-2 h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Message subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Your message" className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="success">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="rounded-full bg-primary/10 p-3 mb-4">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Message Sent Successfully!</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      Thank you for reaching out. Our team will review your message and get back to you as soon as
                      possible.
                    </p>
                    <Button onClick={() => setActiveTab("form")}>Send Another Message</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Content Below Form on Mobile */}
          <div className="mt-8 lg:hidden">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  <HelpCircle className="inline mr-2 h-5 w-5 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Contact Info and Additional Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:icseit25@stellamaryscoe.edu.in"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    icseit25@stellamaryscoe.edu.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+919003785766" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9003785766
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    Stella Mary's College Of Engineering
                    <br />
                    Aruthenganvilai, Kallukatti Junction
                    <br />
                    Azhikal Post, Tamil Nadu
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conference Details - Visible on all screens */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Conference Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Date: </span>
                <span className="text-sm text-muted-foreground">April 15-17, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Venue: </span>
                <span className="text-sm text-muted-foreground">Stella Mary's College Of Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Expected Attendees: </span>
                <span className="text-sm text-muted-foreground">500+</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Paper Submission: </span>
                <Badge variant="outline" className="text-xs">
                  Open
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Format: </span>
                <span className="text-sm text-muted-foreground">Hybrid (In-person & Virtual)</span>
              </div>

              <Separator className="my-2" />

              <div className="flex justify-center">
                <Button variant="outline" className="w-full">
                  View Conference Schedule
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQs - Hidden on mobile, shown on desktop */}
          <Card className="hidden lg:block">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Testimonials - Only visible on large screens */}
          <Card className="hidden xl:block">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                What People Say
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <p className="italic text-sm mb-2">"{testimonial.message}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

