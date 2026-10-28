import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { photos } from "../content/photos";
import { sectionHref } from "../content/sections";
import { briefs, leadStory } from "../content/site";

export default function LatestNews() {
  return (
    <section className="border-y border-rule bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="News & Trends"
          title="The latest from the newsroom"
          link={{ href: "/news-trends", label: "All news & trends" }}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <article>
            <Link href="/news-trends" className="group block">
              <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-paper-dim">
                <Image
                  src={photos.news.src}
                  alt={photos.news.alt}
                  fill
                  sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <p className="eyebrow mt-7 text-copper-dark">{leadStory.tag}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink md:text-[2.2rem]">
                <span className="link-underline">{leadStory.title}</span>
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{leadStory.standfirst}</p>
              <p className="mt-5 text-sm text-ink-soft">
                {leadStory.byline}
                <span className="mx-2 text-rule" aria-hidden="true">|</span>
                {leadStory.readTime}
              </p>
            </Link>
          </article>

          <aside aria-labelledby="briefs-heading" className="lg:border-l lg:border-rule lg:pl-12">
            <h3 id="briefs-heading" className="flex items-center gap-3 font-display text-lg font-semibold text-ink">
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper" aria-hidden="true" />
              Latest briefs
            </h3>
            <ol className="mt-5 divide-y divide-rule">
              {briefs.map((brief, i) => (
                <li key={brief.headline} className="py-5 first:pt-0">
                  <Link href={sectionHref(brief.section)} className="group flex gap-5">
                    <span className="font-display text-2xl tabular-nums text-copper/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="eyebrow block text-copper-dark">{brief.tag}</span>
                      <span className="mt-1.5 block font-display text-[1.05rem] font-medium leading-snug text-ink">
                        <span className="link-underline">{brief.headline}</span>
                      </span>
                      <span className="mt-2 block text-xs text-ink-soft">{brief.time}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
