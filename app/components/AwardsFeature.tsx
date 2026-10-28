import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Medal, Trophy } from "lucide-react";
import { getSection } from "../content/sections";
import { awardCategories } from "../content/modules";
import { button } from "./ui";

export default function AwardsFeature() {
  const awards = getSection("education-awards")!;

  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute -left-40 -top-40 -z-10 h-144 w-144 rounded-full bg-copper/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <p className="eyebrow flex items-center gap-2 text-copper-light">
            <Trophy size={14} />
            Education Awards
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance md:text-5xl">
            {awards.lead}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{awards.body}</p>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {awardCategories.map((category) => (
              <li
                key={category.title}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium"
              >
                <Medal size={18} className="mt-px shrink-0 text-copper-light" />
                {category.title}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/education-awards" className={button.primary}>
              Explore the awards
              <ArrowRight size={16} />
            </Link>
            <Link href="/contacts" className={button.outlineLight}>
              Nominate an educator
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src={awards.image.src}
              alt={awards.image.alt}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-64 rounded-2xl bg-white p-6 text-ink shadow-2xl sm:block">
            <p className="eyebrow text-copper-dark">Annual programme</p>
            <p className="mt-2 font-display text-xl leading-snug">
              Honouring the educators setting new benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
