"use server";

import { Resend } from "resend";
import { isSupabaseConfigured } from "@/lib/content";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type ContactFormState = {
  ok?: boolean;
  message?: string;
  error?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function notifyByEmail({
  name,
  email,
  phone,
  company,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Avenor Tech <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Avenor Tech] New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\n${message}`,
  });
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot.length > 0) {
    return {
      ok: true,
      message: "Thanks. Your inquiry has been received.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("client_company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 120) {
    return {
      error: "Please enter your name.",
    };
  }

  if (!email || !isValidEmail(email)) {
    return {
      error: "Please enter a valid email address.",
    };
  }

  if (message.length < 20) {
    return {
      error: "Please share a bit more detail about your project.",
    };
  }

  if (message.length > 5000) {
    return {
      error: "Message is too long. Please keep it under 5,000 characters.",
    };
  }

  try {
    if (isSupabaseConfigured()) {
      const supabase = await createServerSupabaseClient();
      const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        phone,
        company,
        message,
      });

      if (error) {
        throw error;
      }
    }

    await notifyByEmail({ name, email, phone, company, message });

    return {
      ok: true,
      message:
        "Thank you. Your message has been sent and stored successfully. We’ll get back to you soon.",
    };
  } catch (error) {
    console.error("[contact]", error);
    return {
      error:
        "We could not send your inquiry right now. Please email info@avenortech12.com or message WhatsApp.",
    };
  };
}
