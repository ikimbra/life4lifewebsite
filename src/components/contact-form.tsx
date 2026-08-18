"use client";

import { useState } from "react";
import { site } from "@/content/site";

/**
 * Composes a pre-filled email in the visitor's own mail client.
 *
 * Deliberately not a server-submitted form: there is no transactional email
 * provider configured yet, and a form that silently fails to deliver is worse
 * than no form at all. This works today with no backend, and can be swapped
 * for a server action once an email provider is in place.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("firstName")} ${data.get("lastName")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Website enquiry from ${data.get("firstName")} ${data.get("lastName")}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  const inputClass =
    "mt-1.5 w-full rounded-md border border-border-strong bg-background px-3.5 py-3 text-base outline-none transition-colors duration-200 focus:border-orange-ink focus:ring-2 focus:ring-orange-200";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-sand-800">
            First name
          </label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-sand-800">
            Last name
          </label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-sand-800">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-sand-800">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-sand-800">
          Your message
        </label>
        <textarea id="message" name="message" required rows={6} className={inputClass} />
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-md bg-primary px-7 py-3.5 font-semibold text-on-primary shadow-sm transition-colors duration-200 hover:bg-orange-800"
      >
        Send message
      </button>

      {sent && (
        <p role="status" className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-800">
          Your email client should have opened with your message ready to send.
          If nothing happened, please email us directly at{" "}
          <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
