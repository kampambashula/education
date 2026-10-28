import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  link?: { href: string; label: string };
};

export default function SectionHeading({ eyebrow, title, intro, link }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow text-copper-dark">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-balance text-ink md:text-[2.6rem]">
          {title}
        </h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-ink"
        >
          <span className="link-underline">{link.label}</span>
          <ArrowRight size={16} className="text-copper transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
