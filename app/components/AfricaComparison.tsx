import { africaComparisons } from "./data";

export default function AfricaComparison() {
  const max = 100;

  return (
    <section id="data" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-copper">
            Data & Trends
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            How Zambia compares
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
            Every edition sets Zambia&apos;s indicators against neighbouring
            countries and the regional average, so planners, researchers and
            donors can read local trends in context &mdash; not in isolation.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-medium text-ink-soft">
            Primary school completion rate
          </h3>
          <ul className="mt-5 space-y-5">
            {africaComparisons.map((row) => (
              <li key={row.country}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-ink">{row.country}</span>
                  <span className="font-display text-ink-soft">{row.value}%</span>
                </div>
                <div className="mt-1.5 h-2.5 w-full rounded-full bg-paper-dim">
                  <div
                    className="h-2.5 rounded-full bg-canopy"
                    style={{ width: `${(row.value / max) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-soft">
            Illustrative figures compiled from ministry and UNESCO Institute
            for Statistics reporting, for demonstration purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
