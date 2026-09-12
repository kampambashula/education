"use client";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-copper text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              A weekly brief on Zambia&rsquo;s education sector
            </h2>
            <p className="mt-3 max-w-md text-paper/85">
              Curriculum, financing, results and infrastructure — delivered
              every Friday, in one short read.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@organisation.co.zm"
              className="w-full rounded-full border border-paper/40 bg-copper-dark/40 px-5 py-3 text-paper placeholder:text-paper/60 focus:outline-none focus:ring-2 focus:ring-paper"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-night px-6 py-3 font-semibold text-paper transition-colors hover:bg-night-soft"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
