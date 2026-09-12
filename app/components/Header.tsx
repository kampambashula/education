import { navLinks } from "./data";
import MobileNav from "./MobileNav";

function todayLong() {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Header() {
  return (
    <header id="top" className="relative border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs text-ink-soft">
        <span>{todayLong()} · Lusaka, Zambia</span>
        <a href="#newsletter" className="hidden underline decoration-copper/50 underline-offset-4 hover:text-copper sm:inline">
          Get the weekly brief
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-rule px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Education Today
          </span>
          <span className="font-display text-2xl italic text-copper">Zambia</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 font-medium text-sm text-ink-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-copper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
