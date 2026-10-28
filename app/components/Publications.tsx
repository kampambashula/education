import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EditionCover from "./EditionCover";
import SectionHeading from "./SectionHeading";
import { getSection, sectionHref } from "../content/sections";
import { journalVolumes, magazineEditions } from "../content/modules";

export default function Publications() {
  const magazine = getSection("zambian-teacher-magazine")!;
  const journal = getSection("zambian-journal-of-education")!;
  const latestIssue = magazineEditions[0];
  const latestVolume = journalVolumes[0];

  const publications = [
    {
      section: magazine,
      kind: "Magazine archive",
      cta: "Browse past editions",
      cover: (
        <EditionCover
          variant="magazine"
          edition={latestIssue.issue}
          date={latestIssue.date}
          headline={latestIssue.headline}
          image={latestIssue.image}
        />
      ),
    },
    {
      section: journal,
      kind: "Annual peer-reviewed journal",
      cta: "Explore the volumes",
      cover: (
        <EditionCover
          variant="journal"
          edition={latestVolume.volume}
          date={latestVolume.year}
          headline={latestVolume.theme}
        />
      ),
    },
  ];

  return (
    <section className="border-y border-rule bg-paper-dim/70">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Publications"
          title="Two titles, one archive of Zambian educational thought"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {publications.map(({ section, kind, cta, cover }) => (
            <Link
              key={section.slug}
              href={sectionHref(section.slug)}
              className="group grid items-center gap-8 rounded-2xl bg-white p-8 ring-1 ring-rule transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(11,31,58,0.4)] sm:grid-cols-[11rem_1fr]"
            >
              <div className="w-44 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-1">
                {cover}
              </div>
              <div>
                <p className="eyebrow text-copper-dark">{kind}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                  <span className="link-underline">{section.title}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{section.lead}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  {cta}
                  <ArrowRight size={16} className="text-copper transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
