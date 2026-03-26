"use server";

import { Resend } from "resend";

export type ContactFormState = {
  ok?: boolean;
  message?: string;
  error?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("company") ?? "").trim();
  if (honeypot.length > 0) {
    return {
      ok: true,
      message: "Thanks — we’ll be in touch.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length > 120) {
    return {
      error: "Please enter your name (max 120 characters).",
    };
  }

  if (!email || !isValidEmail(email)) {
    return {
      error: "Please enter a valid email address.",
    };
  }

  if (message.length < 10) {
    return {
      error: "Please add a bit more detail (at least 10 characters).",
    };
  }

  if (message.length > 5000) {
    return {
      error: "Message is too long. Please keep it under 5,000 characters.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Nexora <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return {
      error:
        "This form isn’t configured for email yet. Please use hello@nexora.studio or WhatsApp.",
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Nexora] Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend:", error);
    return {
      error:
        "Could not send right now. Please try again or email hello@nexora.studio.",
    };
  }

  return {
    ok: true,
    message:
      "Thank you — your message was sent. We’ll reply within one business day.",
  };
}
