import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sectionHref, type Section } from "../content/sections";

export default function SectionCard({ section }: { section: Section }) {
  const Icon = section.icon;
  return (
    <Link
      href={sectionHref(section.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-rule transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(11,31,58,0.4)]"
    >
      <div className="relative aspect-3/2 overflow-hidden bg-paper-dim">
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-104"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/55 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-copper shadow-md">
          <Icon size={18} strokeWidth={1.75} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-ink-soft/70">{section.group}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">
          <span className="link-underline">{section.title}</span>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{section.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-dark">
          Explore
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
