import Image from "next/image";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import type { Photo } from "../content/photos";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
  /** Breadcrumb label, when it should differ from the title */
  crumb?: string;
  icon?: LucideIcon;
  image?: Photo;
};

export default function PageHeader({ eyebrow, title, lead, crumb, icon: Icon, image }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {image ? (
        <>
          <Image src={image.src} alt="" fill preload sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/90 to-navy/45" />
        </>
      ) : (
        <div className="absolute -right-32 -top-32 -z-10 h-120 w-120 rounded-full bg-copper/20 blur-3xl" />
      )}

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-24 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-xs text-white/55">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={12} />
            </li>
            <li aria-current="page" className="text-white/85">
              {crumb ?? title}
            </li>
          </ol>
        </nav>

        <p className="eyebrow mt-12 flex items-center gap-2.5 text-copper-light">
          {Icon && <Icon size={15} />}
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-balance md:text-6xl">
          {title}
        </h1>
        <div className="rule-double mt-8 w-24 border-copper/70" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">{lead}</p>
      </div>
    </section>
  );
}
