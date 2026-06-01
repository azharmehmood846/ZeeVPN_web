"use server";

import { z } from "zod";
import { Resend } from "resend";

import { CONTACT_EMAIL } from "@/lib/seo";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormInput = z.infer<typeof contactFormSchema>;

interface ContactFormResult {
  success: boolean;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  data: ContactFormInput
): Promise<ContactFormResult> {
  // 1. Validate
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }
  const { name, email, phone, message } = parsed.data;

  // 2. Ensure API key is configured
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      success: false,
      message: "Email delivery is not configured. Please email us directly.",
    };
  }

  const fromAddress =
    process.env.RESEND_FROM ?? "Zee VPN Contact <onboarding@resend.dev>";

  // 3. Send via Resend
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; color: #111; line-height: 1.55;">
          <h2 style="margin: 0 0 16px; font-size: 18px;">New contact form submission</h2>
          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #555; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; width: 90px;">Name</td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #555; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #555; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${escapeHtml(phone)}</td></tr>` : ""}
          </table>
          <h3 style="margin: 24px 0 8px; font-size: 14px; color: #555; text-transform: uppercase; letter-spacing: 0.06em;">Message</h3>
          <p style="margin: 0; padding: 12px 14px; background: #f5f5f5; border-radius: 8px; white-space: pre-wrap; font-size: 14px;">${escapeHtml(message)}</p>
          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #eee;" />
          <p style="margin: 0; color: #888; font-size: 12px;">Submitted via zeevpn.com contact form.</p>
        </div>
      `,
      text: [
        `New contact form submission`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        ``,
        `Message:`,
        message,
        ``,
        `— Submitted via zeevpn.com contact form`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend send error:", error);
      return {
        success: false,
        message: "Failed to send. Please try again or email us directly.",
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (err) {
    console.error("Contact form unexpected error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
