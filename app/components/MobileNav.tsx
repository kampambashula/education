"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { groupOrder, type NavItem } from "../content/sections";

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy text-white"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <Logo />
            <button
              autoFocus
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20"
            >
              <X size={20} />
            </button>
          </div>

          <nav aria-label="Sections" className="flex-1 px-6 py-8">
            {groupOrder.map((group) => (
              <div key={group} className="mb-9 last:mb-0">
                <p className="eyebrow text-copper-light">{group}</p>
                <ul className="mt-2 divide-y divide-white/10">
                  {items
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="flex items-center justify-between gap-4 py-3.5 font-display text-xl aria-[current=page]:text-copper-light"
                        >
                          {item.label}
                          <ArrowRight size={16} className="shrink-0 text-white/35" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="border-t border-white/10 px-6 py-6">
            <Link
              href="/contacts"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-copper py-3.5 text-center font-semibold transition-colors hover:bg-copper-dark"
            >
              Subscribe to print
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
