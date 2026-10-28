import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSection } from "../content/sections";

export default function AboutStrip() {
  const about = getSection("about")!;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="eyebrow text-copper-dark">About Education Today Zambia</p>
          <div className="rule-double mt-4 w-24 border-copper/60" />
        </div>
        <div className="lg:col-span-8">
          <p className="font-display text-3xl leading-[1.2] text-balance text-ink md:text-[2.6rem]">
            {about.lead}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{about.body}</p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-ink">
            <span className="link-underline">More about us</span>
            <ArrowRight size={16} className="text-copper transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
