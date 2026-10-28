import { stats } from "../content/site";

export default function StatsBand() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-copper-light">The system, in numbers</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Zambian education at a glance
            </h2>
          </div>
          <p className="text-xs text-white/45">Illustrative figures for this concept edition.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy p-7 lg:p-8">
              <div className="font-display text-5xl font-semibold tabular-nums">{stat.value}</div>
              <div className="mt-5 h-px w-10 bg-copper" />
              <div className="mt-5 font-medium text-white/90">{stat.label}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
