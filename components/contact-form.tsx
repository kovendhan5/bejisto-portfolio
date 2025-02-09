"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendContactForm } from "@/app/actions"
import { useFormStatus } from "react-dom"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button className="w-full" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    const result = await sendContactForm(formData)
    if (result.success) {
      setMessage("Thank you for your message! I will get back to you soon.")
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      {message && <div className="p-4 bg-green-50 text-green-700 rounded-md">{message}</div>}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            name="name"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          name="subject"
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-100 outline-none min-h-[150px]"
          required
        />
      </div>
      <SubmitButton />
    </form>
  )
}

