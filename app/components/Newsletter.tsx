"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="px-6 py-20 md:py-24">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy px-8 py-12 text-white md:px-14 md:py-16">
        <div className="absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-copper/25 blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow text-copper-light">The weekly brief</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance md:text-4xl">
              Zambia&rsquo;s education sector, in one short read every Friday
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              Policy, results, financing and infrastructure intelligence for
              administrators, educators and policy makers.
            </p>
          </div>

          {submitted ? (
            <p role="status" className="flex items-center gap-3 rounded-2xl bg-white/5 p-6 font-medium ring-1 ring-white/10">
              <CircleCheck className="shrink-0 text-copper-light" />
              Thank you. Your first brief arrives this Friday.
            </p>
          ) : (
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@organisation.co.zm"
                className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-white placeholder:text-white/45 focus:border-copper-light focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-copper px-7 py-3.5 font-semibold transition-colors hover:bg-copper-dark"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
