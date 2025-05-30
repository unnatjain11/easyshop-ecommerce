"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(new FormData(e.target as HTMLFormElement))

      toast({
        title: result.success ? "Message sent" : "Error",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      })

      if (result.success) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-muted-foreground">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">You can also reach out to us using the information below.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">support@easyshop.com</p>
                  <p className="text-muted-foreground">info@easyshop.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 1234567890</p>
                  <p className="text-muted-foreground">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">
                    123 Tech Park, Electronic City
                    <br />
                    Bangalore, Karnataka 560100
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-[300px] bg-muted">
              {/* This would be a map in a real application */}
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-muted-foreground">Map would be displayed here</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 4:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
