export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        d="M20 3c3.6 4.1 6.2 7.5 6.2 11.4a6.2 6.2 0 0 1-12.4 0C13.8 10.5 16.4 7.1 20 3Z"
        fill="var(--color-copper)"
      />
      <path
        d="M20 9.6c1.7 2 2.9 3.5 2.9 5.2a2.9 2.9 0 0 1-5.8 0c0-1.7 1.2-3.2 2.9-5.2Z"
        fill="var(--color-marigold-light)"
      />
      <path
        d="M5 24.5c5.3-1.8 10.3-1 15 2.3 4.7-3.3 9.7-4.1 15-2.3v11c-5.3-1.8-10.3-1-15 2.3-4.7-3.3-9.7-4.1-15-2.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 26.8v11" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

type LogoProps = {
  /** light = for navy backgrounds */
  tone?: "light" | "dark";
  size?: "md" | "lg";
};

export default function Logo({ tone = "light", size = "md" }: LogoProps) {
  const lg = size === "lg";
  return (
    <span className={`inline-flex items-center gap-3 ${tone === "light" ? "text-white" : "text-navy"}`}>
      <LogoMark className={lg ? "h-10 w-10 md:h-12 md:w-12" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight ${
            lg ? "text-[1.4rem] md:text-[2.05rem]" : "text-[1.4rem]"
          }`}
        >
          Education Today
        </span>
        <span
          className={`mt-1.5 font-semibold tracking-[0.52em] ${
            tone === "light" ? "text-copper-light" : "text-copper-dark"
          } ${lg ? "text-[0.56rem] md:text-[0.7rem]" : "text-[0.56rem]"}`}
        >
          ZAMBIA
        </span>
      </span>
    </span>
  );
}
