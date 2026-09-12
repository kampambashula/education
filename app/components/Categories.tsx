import {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Landmark,
  HardHat,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { categories } from "./data";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Landmark,
  HardHat,
  Briefcase,
};

export default function Categories() {
  return (
    <section id="categories" className="border-t border-rule bg-paper-dim/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-copper">
            Coverage
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Six beats, one system
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            From the front of the classroom to the finance ministry, each beat
            follows one part of how Zambia teaches, tests and funds its
            learners.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = icons[category.icon];
            return (
              <div key={category.title} className="group bg-paper p-7 transition-colors hover:bg-white">
                <Icon className="text-copper" size={26} strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {category.description}
                </p>
                <p className="mt-4 border-t border-rule pt-4 text-sm font-medium text-ink group-hover:text-copper">
                  {category.sample}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
