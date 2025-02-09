"use server"

export async function sendContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Here you would typically send an email or store the contact form data
  // For now, we'll just console.log the data
  console.log({ name, email, subject, message })

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}

