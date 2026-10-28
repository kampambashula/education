import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionCard from "./SectionCard";
import SectionHeading from "./SectionHeading";
import { getSection, sections } from "../content/sections";

// Newsroom and Classroom sections; awards and publications get their own bands below
const featured = [
  "teaching-tools",
  "edtech-it",
  "curriculum-resources",
  "digital-hub-webinars",
  "education-research",
  "examinations-results",
  "infrastructure-projects",
  "teacher-development",
];

export default function SectionsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Explore the platform"
        title="Intelligence for every corner of the learning landscape"
        intro="From the classroom to the server room, each section follows one part of how Zambia teaches, tests, builds and innovates."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((slug) => (
          <SectionCard key={slug} section={getSection(slug)!} />
        ))}
        <Link
          href="/about"
          className="group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-navy p-8 text-white"
        >
          <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-copper/25 blur-3xl" />
          <p className="eyebrow text-copper-light">{sections.length} sections</p>
          <p className="mt-10 font-display text-2xl leading-snug text-balance">
            Every part of the Zambian learning landscape, in one publication.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
            <span className="link-underline">See everything we cover</span>
            <ArrowRight size={16} className="text-copper-light transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}
