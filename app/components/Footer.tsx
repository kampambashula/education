import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialIcons";
import { navItems, type SectionGroup } from "../content/sections";
import { desks, location, pillars } from "../content/site";

const columns: SectionGroup[][] = [["Newsroom"], ["Classroom"], ["Programmes", "Publications"], ["Company"]];

export default function Footer() {
  const vision = pillars.find((p) => p.key === "vision")!;

  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr_0.7fr]">
          <div>
            <Link href="/" aria-label="Education Today Zambia, home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">{vision.copy}</p>
            <SocialLinks variant="circle" className="mt-6" />
          </div>

          {columns.map((groups) => (
            <div key={groups.join()} className="space-y-8">
              {groups.map((group) => (
                <div key={group}>
                  <h2 className="eyebrow text-copper-light">{group}</h2>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {navItems
                      .filter((item) => item.group === group)
                      .map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="transition-colors hover:text-white">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          {desks.map((desk) => (
            <div key={desk.desk} className="bg-navy-deep p-6">
              <h2 className="eyebrow text-copper-light">{desk.desk}</h2>
              {desk.person && <p className="mt-3 font-display text-lg text-white">{desk.person}</p>}
              <p className={`${desk.person ? "mt-1" : "mt-3"} text-sm text-white/50`}>{desk.purpose}</p>
              <a href={`mailto:${desk.email}`} className="mt-4 block text-sm text-white/80 transition-colors hover:text-white">
                {desk.email}
              </a>
              <p className="mt-1 text-sm text-white/50">Mobile: {desk.phone ?? "to be confirmed"}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Education Today Zambia · {location}. All rights reserved.
          </span>
          <span>A concept edition. Photography: Unsplash placeholders.</span>
        </div>
      </div>
    </footer>
  );
}
