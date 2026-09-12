import { ArrowUpRight } from "lucide-react";
import { briefs } from "./data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        {/* Lead story */}
        <article>
          <span className="inline-flex items-center gap-2 rounded-full bg-canopy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-canopy">
            Curriculum
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl">
            Five years into the competency-based curriculum, what has actually changed in the classroom?
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Teachers in Lusaka, Kabwe and Mongu describe a shift from rote recall
            toward project work — but say assessment guidance and learning
            materials still lag behind the ambition of the reform.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-ink-soft">
            <span>By the Education Today Zambia desk</span>
            <span className="h-1 w-1 rounded-full bg-ink-soft/50" />
            <span>8 min read</span>
          </div>
          <a
            href="#categories"
            className="mt-6 inline-flex items-center gap-1.5 border-b-2 border-copper pb-0.5 font-semibold text-ink transition-colors hover:text-copper"
          >
            Read the full report
            <ArrowUpRight size={18} />
          </a>

          {/* Feature strip */}
          <div className="mt-10 grid gap-6 border-t border-rule pt-8 sm:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-copper">
                Examinations
              </span>
              <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink">
                Inside the ECZ marking centre as results week begins
              </h3>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-copper">
                Careers
              </span>
              <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink">
                What employers say school leavers still need to learn
              </h3>
            </div>
          </div>
        </article>

        {/* Latest briefs */}
        <aside id="briefs" aria-label="Latest briefs" className="lg:border-l lg:border-rule lg:pl-10">
          <h2 className="font-display text-lg font-semibold text-ink">Latest briefs</h2>
          <ul className="mt-5 divide-y divide-rule">
            {briefs.map((brief) => (
              <li key={brief.headline} className="py-4 first:pt-0">
                <a href="#categories" className="group block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-canopy">
                    {brief.tag}
                  </span>
                  <p className="mt-1.5 font-display text-base font-medium leading-snug text-ink group-hover:text-copper">
                    {brief.headline}
                  </p>
                  <span className="mt-1.5 block text-xs text-ink-soft">{brief.time}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
