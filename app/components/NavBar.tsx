"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "../content/sections";

export default function NavBar({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);

  // Below xl the bar scrolls sideways; keep the current section in view
  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!list || !active) return;
    list.scrollLeft = active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2;
  }, [pathname]);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 hidden border-t border-white/10 bg-navy/95 shadow-[0_8px_24px_-12px_rgba(6,21,43,0.6)] backdrop-blur md:block"
    >
      <ul
        ref={listRef}
        className="no-scrollbar fade-x relative mx-auto max-w-7xl overflow-x-auto whitespace-nowrap px-4 xl:overflow-visible xl:whitespace-normal xl:py-1 xl:text-center xl:text-balance xl:[mask-image:none]"
      >
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="inline-block">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative block px-3 py-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-3 after:bottom-2 after:h-0.5 after:origin-left after:bg-copper after:transition-transform after:duration-300 xl:py-2.5 xl:after:bottom-1 ${
                  active
                    ? "text-white after:scale-x-100"
                    : "text-white/70 after:scale-x-0 hover:text-white hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
