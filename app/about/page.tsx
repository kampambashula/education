import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Pillars from "../components/Pillars";
import SectionHeading from "../components/SectionHeading";
import { button } from "../components/ui";
import { contentSections, getSection, sectionHref } from "../content/sections";

const about = getSection("about")!;

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
};

// Drawn from the About copy in the client brief
const audiences = ["Policymakers", "School proprietors", "Classroom educators"];
const coverage = [
  "Curriculum changes",
  "Educational financing",
  "Infrastructure upgrades",
  "Special educational needs (SEN)",
  "Emerging classroom methodologies",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="About Education Today Zambia"
        crumb="About"
        lead={about.lead}
        icon={about.icon}
        image={about.image}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <p className="dropcap text-xl leading-relaxed text-ink-soft lg:col-span-7">{about.body}</p>
          <div className="space-y-10 lg:col-span-5">
            <div>
              <p className="eyebrow text-copper-dark">Who we bring together</p>
              <ul className="mt-4 divide-y divide-rule border-y border-rule">
                {audiences.map((audience) => (
                  <li key={audience} className="py-3.5 font-display text-xl text-ink">
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-copper-dark">Our deep-dive features</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {coverage.map((topic) => (
                  <li key={topic} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-ink-soft ring-1 ring-rule">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-paper-dim/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What we stand for" title="Mission, vision, value and impact" />
        </div>
        <div className="mt-12">
          <Pillars />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading eyebrow="What we cover" title="Every section of the platform" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-rule ring-1 ring-rule sm:grid-cols-2 lg:grid-cols-3">
          {contentSections.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.slug} className="bg-white">
                <Link
                  href={sectionHref(section.slug)}
                  className="group flex h-full gap-4 p-6 transition-colors hover:bg-paper"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink">
                      <span className="link-underline">{section.title}</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{section.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="relative isolate mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14">
          <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-copper/25 blur-3xl" />
          <div className="max-w-xl">
            <p className="eyebrow text-copper-light">Work with us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance">
              Advertise, sponsor, subscribe or send us your story.
            </h2>
          </div>
          <Link href="/contacts" className={`${button.primary} shrink-0`}>
            Contact our team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
