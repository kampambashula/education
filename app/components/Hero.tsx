import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photos } from "../content/photos";
import { button } from "./ui";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/85 to-navy/25" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-40 pt-20 md:pb-48 md:pt-28">
        <p className="eyebrow flex items-center gap-3 text-copper-light">
          <span className="h-px w-8 bg-copper-light" />
          Zambia&rsquo;s education intelligence platform
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-[4.5rem]">
          Empowering education in Zambia: news, intelligence &amp;&nbsp;innovation.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
          A premier B2B multimedia platform and news outlet covering the whole
          Zambian education sector, from early childhood to adult education.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/news-trends" className={button.primary}>
            Read the latest
            <ArrowRight size={16} />
          </Link>
          <Link href="/contacts" className={button.outlineLight}>
            Subscribe to print
          </Link>
        </div>
      </div>
    </section>
  );
}
