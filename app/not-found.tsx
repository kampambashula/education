import Link from "next/link";
import { button } from "./components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
      <p className="eyebrow text-copper-dark">Error 404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-balance text-ink md:text-6xl">
        This page isn&rsquo;t in our archive
      </h1>
      <div className="rule-double mx-auto mt-8 w-24 border-copper/60" />
      <p className="mt-8 text-lg leading-relaxed text-ink-soft">
        It may have moved, or the address may be mistyped. Try the homepage or
        the latest from the newsroom.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className={button.primary}>
          Back to the homepage
        </Link>
        <Link href="/news-trends" className={button.outlineDark}>
          News &amp; Trends
        </Link>
      </div>
    </section>
  );
}
