import { Megaphone, Telescope, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { pillars } from "../content/site";

const icons: Record<(typeof pillars)[number]["key"], LucideIcon> = {
  mission: Megaphone,
  vision: Telescope,
  value: ShieldCheck,
  impact: Sparkles,
};

/** Mission, vision, value and impact. `overlap` lifts the cards over the hero above. */
export default function Pillars({ overlap = false }: { overlap?: boolean }) {
  return (
    <section
      aria-label="Our mission, vision, value and impact"
      className={overlap ? "relative z-10 -mt-24 md:-mt-28" : ""}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px overflow-hidden rounded-2xl border-t-2 border-copper bg-rule shadow-[0_40px_80px_-40px_rgba(11,31,58,0.45)] ring-1 ring-rule sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = icons[pillar.key];
            return (
              <div key={pillar.key} className="bg-white p-7 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-copper/10 text-copper">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-sm tabular-nums text-ink-soft/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{pillar.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pillar.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
