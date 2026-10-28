"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";
import { desks } from "../content/site";

const field =
  "w-full rounded-xl border border-rule bg-paper/60 px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:border-copper focus:bg-white focus:outline-none focus:ring-2 focus:ring-copper/20";
const label = "mb-1.5 block text-sm font-medium text-ink";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-[0_40px_80px_-40px_rgba(11,31,58,0.35)] ring-1 ring-rule md:p-10">
      <p className="eyebrow text-copper-dark">Send an enquiry</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">How can we help?</h2>

      {submitted ? (
        <p role="status" className="mt-8 flex items-start gap-3 rounded-2xl bg-paper p-6 text-ink">
          <CircleCheck className="mt-0.5 shrink-0 text-copper" />
          Thank you. The right desk will reply within two working days.
        </p>
      ) : (
        <form
          className="mt-8 grid gap-5 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label htmlFor="contact-name" className={label}>
              Full name
            </label>
            <input id="contact-name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="contact-org" className={label}>
              Organisation
            </label>
            <input id="contact-org" name="organisation" autoComplete="organization" className={field} />
          </div>
          <div>
            <label htmlFor="contact-email" className={label}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@organisation.co.zm"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="contact-desk" className={label}>
              Desk
            </label>
            <select id="contact-desk" name="desk" className={field}>
              {desks.map((desk) => (
                <option key={desk.desk}>{desk.desk}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className={label}>
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Press release, subscription, sponsorship…"
              className={field}
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-copper px-7 py-3.5 font-semibold text-white transition-colors hover:bg-copper-dark sm:w-auto"
            >
              Send enquiry
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
