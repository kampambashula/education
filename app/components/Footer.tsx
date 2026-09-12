import { navLinks, categories } from "./data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-night text-paper/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold text-paper">
                Education Today
              </span>
              <span className="font-display text-xl italic text-marigold-light">
                Zambia
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              News, statistics and trends on classroom learning, teaching,
              financing and opportunity across Zambia&rsquo;s education
              sector.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-paper">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-marigold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-paper">Categories</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.slice(0, 5).map((category) => (
                <li key={category.title}>
                  <a href="#categories" className="hover:text-marigold-light">
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-paper">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>newsroom@educationtoday.co.zm</li>
              <li>+260 21 1 234 567</li>
              <li>Lusaka, Zambia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Education Today Zambia. All rights reserved.</span>
          <span>A concept edition, built for demonstration.</span>
        </div>
      </div>
    </footer>
  );
}
