import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Newsletter from "../components/Newsletter";
import PageHeader from "../components/PageHeader";
import SectionModuleBlock from "../components/SectionModules";
import { button } from "../components/ui";
import { contentSections, getSection, sectionHref, type Section } from "../content/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return contentSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[section]">): Promise<Metadata> {
  const section = getSection((await params).section);
  return section ? { title: section.title, description: section.lead } : {};
}

const pad = (n: number) => String(n).padStart(2, "0");

export default async function SectionPage({ params }: PageProps<"/[section]">) {
  const section = getSection((await params).section);
  if (!section) notFound();

  const related = contentSections.filter((s) => s.group === section.group && s.slug !== section.slug);

  return (
    <>
      <PageHeader
        eyebrow={section.group}
        title={section.title}
        lead={section.lead}
        icon={section.icon}
        image={section.image}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20">
          <div className="min-w-0 space-y-20">
            {(section.body || section.highlights) && (
              <div>
                {section.body && (
                  <p
                    className={`max-w-2xl text-xl leading-relaxed text-ink-soft ${
                      section.body.length > 120 ? "dropcap" : ""
                    }`}
                  >
                    {section.body}
                  </p>
                )}
                {section.highlights && <Highlights items={section.highlights} spaced={!!section.body} />}
              </div>
            )}

            {section.module && <SectionModuleBlock kind={section.module} />}

            {section.stories && <Stories section={section} />}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {related.length > 0 && (
              <div className="rounded-2xl bg-white p-6 ring-1 ring-rule">
                <p className="eyebrow text-copper-dark">More from {section.group}</p>
                <ul className="mt-3 divide-y divide-rule">
                  {related.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.slug}>
                        <Link href={sectionHref(s.slug)} className="group flex items-center gap-3 py-3.5">
                          <Icon size={18} strokeWidth={1.75} className="shrink-0 text-copper" />
                          <span className="flex-1 font-display text-[1.05rem] leading-snug text-ink">
                            <span className="link-underline">{s.title}</span>
                          </span>
                          <ArrowUpRight size={14} className="shrink-0 text-ink-soft/60" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="relative isolate overflow-hidden rounded-2xl bg-navy p-6 text-white">
              <div className="absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-copper/30 blur-3xl" />
              <p className="eyebrow text-copper-light">Partner with us</p>
              <p className="mt-3 font-display text-xl leading-snug">
                Reach Zambia&rsquo;s education decision-makers.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Sponsorship packages, print and digital advertising.
              </p>
              <Link href="/contacts" className={`${button.primary} mt-6`}>
                Talk to advertising
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <Newsletter />
    </>
  );
}

function Highlights({ items, spaced }: { items: NonNullable<Section["highlights"]>; spaced: boolean }) {
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-2xl bg-rule ring-1 ring-rule ${
        items.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2"
      } ${spaced ? "mt-10" : ""}`}
    >
      {items.map((item, i) => (
        <div key={item.title} className="bg-white p-7">
          <span className="font-display text-sm tabular-nums text-copper">{pad(i + 1)}</span>
          <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function Stories({ section }: { section: Section }) {
  return (
    <section>
      <p className="eyebrow text-copper-dark">Latest in {section.title}</p>
      <ul className="mt-5 divide-y divide-rule border-y border-rule">
        {section.stories!.map((story, i) => (
          <li key={story.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline sm:gap-6">
            <span className="font-display text-2xl tabular-nums text-copper/70">{pad(i + 1)}</span>
            <div>
              <p className="eyebrow text-ink-soft/70">{story.tag}</p>
              <h3 className="mt-1.5 font-display text-xl font-medium leading-snug text-ink">{story.title}</h3>
            </div>
            <span className="text-xs text-ink-soft">{story.readTime}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
