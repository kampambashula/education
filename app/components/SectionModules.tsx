import Link from "next/link";
import { Clock, Trophy } from "lucide-react";
import EditionCover from "./EditionCover";
import { button } from "./ui";
import type { SectionModule } from "../content/sections";
import {
  awardCategories,
  awardStages,
  examLevels,
  journalVolumes,
  magazineEditions,
  upcomingWebinars,
  webinarTracks,
} from "../content/modules";

const pad = (n: number) => String(n).padStart(2, "0");

function ModuleBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="eyebrow text-copper-dark">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Webinars() {
  return (
    <ModuleBlock eyebrow="Upcoming live sessions" title="Join the next masterclass">
      <ul className="flex flex-wrap gap-2">
        {webinarTracks.map((track) => (
          <li key={track} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-soft ring-1 ring-rule">
            {track}
          </li>
        ))}
      </ul>
      <ul className="mt-6 space-y-4">
        {upcomingWebinars.map((webinar) => (
          <li
            key={webinar.title}
            className="flex flex-col gap-5 rounded-2xl bg-white p-5 ring-1 ring-rule sm:flex-row sm:items-center"
          >
            <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
              <span className="font-display text-3xl font-semibold leading-none">{webinar.day}</span>
              <span className="eyebrow mt-1 text-copper-light">{webinar.month}</span>
            </div>
            <div className="flex-1">
              <p className="eyebrow text-copper-dark">
                {webinar.format} · {webinar.track}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-medium leading-snug text-ink">{webinar.title}</h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-soft">
                <Clock size={14} />
                {webinar.time} · Online
              </p>
            </div>
            <Link href="/contacts" className={button.outlineDark}>
              Register
            </Link>
          </li>
        ))}
      </ul>
    </ModuleBlock>
  );
}

function Awards() {
  return (
    <ModuleBlock eyebrow="Award categories" title="Recognising excellence at every level">
      <div className="grid gap-4 sm:grid-cols-2">
        {awardCategories.map((category) => (
          <div key={category.title} className="rounded-2xl bg-white p-6 ring-1 ring-rule">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/10 text-copper">
              <Trophy size={18} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{category.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{category.description}</p>
          </div>
        ))}
      </div>
      <ol className="mt-10 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
        {awardStages.map((stage, i) => (
          <li key={stage.stage}>
            <span className="font-display text-3xl tabular-nums text-copper">{pad(i + 1)}</span>
            <h3 className="mt-2 font-semibold text-ink">{stage.stage}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{stage.detail}</p>
          </li>
        ))}
      </ol>
      <Link href="/contacts" className={`${button.primary} mt-10`}>
        Nominate an educator
      </Link>
    </ModuleBlock>
  );
}

function Editions() {
  return (
    <ModuleBlock eyebrow="The archive" title="Past editions">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {magazineEditions.map((edition) => (
          <li key={edition.issue}>
            <EditionCover
              variant="magazine"
              edition={edition.issue}
              date={edition.date}
              headline={edition.headline}
              image={edition.image}
            />
            <p className="mt-4 text-sm font-semibold text-ink">{edition.issue}</p>
            <p className="text-xs text-ink-soft">{edition.date}</p>
          </li>
        ))}
      </ul>
    </ModuleBlock>
  );
}

function Journal() {
  const latest = journalVolumes[0];
  return (
    <ModuleBlock eyebrow="Volumes" title="Browse the journal">
      <div className="grid items-start gap-10 sm:grid-cols-[12rem_1fr]">
        <EditionCover
          variant="journal"
          edition={latest.volume}
          date={latest.year}
          headline={latest.theme}
          className="max-w-48 sm:max-w-none"
        />
        <ul className="divide-y divide-rule border-y border-rule">
          {journalVolumes.map((volume) => (
            <li key={volume.volume} className="flex items-baseline justify-between gap-6 py-5">
              <div>
                <p className="eyebrow text-copper-dark">
                  {volume.volume} · {volume.year}
                </p>
                <h3 className="mt-1.5 font-display text-lg leading-snug text-ink">{volume.theme}</h3>
              </div>
              <span className="shrink-0 text-sm text-ink-soft">{volume.papers} papers</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex flex-col gap-6 rounded-2xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-copper-light">Call for papers</p>
          <p className="mt-2 font-display text-2xl leading-snug">Submit your research for the next volume.</p>
        </div>
        <Link href="/contacts" className={`${button.primary} shrink-0`}>
          Submit a paper
        </Link>
      </div>
    </ModuleBlock>
  );
}

function Exams() {
  return (
    <ModuleBlock eyebrow="ECZ levels" title="Results and analysis by examination">
      <div className="grid gap-4 sm:grid-cols-3">
        {examLevels.map((level) => (
          <div key={level.level} className="rounded-2xl border-t-2 border-copper bg-white p-6 ring-1 ring-rule">
            <p className="font-display text-3xl font-semibold text-ink">{level.level}</p>
            <p className="mt-1 text-sm font-semibold text-copper-dark">{level.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{level.description}</p>
          </div>
        ))}
      </div>
    </ModuleBlock>
  );
}

const modules: Record<SectionModule, () => React.ReactNode> = {
  webinars: Webinars,
  awards: Awards,
  editions: Editions,
  journal: Journal,
  exams: Exams,
};

export default function SectionModuleBlock({ kind }: { kind: SectionModule }) {
  const Module = modules[kind];
  return <Module />;
}
