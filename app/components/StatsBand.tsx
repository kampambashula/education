import { stats } from "./data";

export default function StatsBand() {
  return (
    <section className="bg-night text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="max-w-md font-display text-sm uppercase tracking-wide text-marigold-light">
          The system, in numbers
        </p>
        <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-paper/15 pt-5">
              <div className="font-display text-4xl font-semibold text-paper sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-medium text-paper/90">{stat.label}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
