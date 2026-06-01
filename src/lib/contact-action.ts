"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
) {
  // In production, wire this up to email / database / CRM here.
  console.log("Contact form submitted:", data);
  return { success: true, message: "Your message has been sent successfully!" };
}
