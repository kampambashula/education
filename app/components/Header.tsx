import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import SocialLinks from "./SocialIcons";
import Today from "./Today";
import { navItems } from "../content/sections";
import { location } from "../content/site";

export default function Header() {
  return (
    <header className="bg-navy text-white">
      <div className="bg-navy-deep">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs text-white/60">
          <p>
            <Today />
            {location}
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <Link href="/contacts" className="transition-colors hover:text-white">
              Subscribe to print
            </Link>
            <Link href="/contacts" className="transition-colors hover:text-white">
              Advertise with us
            </Link>
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:py-8">
        <p className="eyebrow hidden max-w-[15rem] text-white/50 md:block">
          News, intelligence &amp; innovation for Zambian education
        </p>
        <Link href="/" aria-label="Education Today Zambia, home">
          <Logo size="lg" />
        </Link>
        <div className="flex items-center justify-end">
          <Link
            href="/contacts"
            className="hidden rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-dark md:inline-flex"
          >
            Subscribe
          </Link>
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
