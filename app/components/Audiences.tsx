import { Backpack, Presentation, Landmark, Handshake } from "lucide-react";
import { audiences } from "./data";

const icons = [Backpack, Presentation, Landmark, Handshake];

export default function Audiences() {
  return (
    <section id="stakeholders" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-copper">
          Who reads us
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          Built for everyone with a stake in the classroom
        </h2>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {audiences.map((audience, i) => {
          const Icon = icons[i];
          return (
            <div key={audience.title} className="flex gap-5 border-l border-rule pl-5">
              <Icon className="mt-0.5 shrink-0 text-canopy" size={24} strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {audience.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{audience.copy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
