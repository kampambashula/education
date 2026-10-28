import Image from "next/image";
import type { Photo } from "../content/photos";

type EditionCoverProps = {
  variant: "magazine" | "journal";
  /** "Issue 48" or "Volume 6" */
  edition: string;
  /** Month and year, or year */
  date: string;
  headline: string;
  image?: Photo;
  className?: string;
};

const coverShadow = "shadow-[0_24px_40px_-20px_rgba(6,21,43,0.6)]";

// Drawn in CSS so archive grids don't need a scan of every issue. Type is sized
// in container units, so the cover scales with whatever width it is given.
export default function EditionCover({ variant, edition, date, headline, image, className = "" }: EditionCoverProps) {
  if (variant === "journal") {
    return (
      <div className={`@container relative aspect-3/4 overflow-hidden rounded-sm bg-[#F3EEE1] text-navy ${coverShadow} ${className}`}>
        <div className="absolute inset-[5cqw] flex flex-col items-center border border-navy/30 px-[6cqw] pt-[12cqw] text-center">
          <p className="text-[4.4cqw] font-semibold tracking-[0.3em]">ZAMBIAN JOURNAL</p>
          <p className="mt-[2cqw] font-display text-[12cqw] italic leading-none">of Education</p>
          <div className="mt-[6cqw] h-px w-1/3 bg-copper" />
          <p className="mt-[6cqw] text-[4.6cqw] font-semibold tracking-[0.18em]">
            {edition.toUpperCase()} · {date}
          </p>
          <p className="mt-[5cqw] font-display text-[6.4cqw] leading-snug">{headline}</p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[9cqw] bg-navy" />
      </div>
    );
  }

  return (
    <div className={`@container relative aspect-3/4 overflow-hidden rounded-sm bg-navy text-white ${coverShadow} ${className}`}>
      {image && <Image src={image.src} alt="" fill sizes="240px" className="object-cover opacity-70" />}
      <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/20 to-navy" />
      <div className="relative flex h-full flex-col p-[7cqw]">
        <p className="text-[4.2cqw] font-semibold tracking-[0.4em] text-copper-light">THE</p>
        <p className="font-display text-[14cqw] font-semibold leading-[0.95]">Zambian Teacher</p>
        <div className="mt-[3cqw] h-[1.4cqw] w-full bg-copper" />
        <p className="mt-[2.5cqw] text-[3.8cqw] tracking-[0.12em] text-white/75">
          {edition.toUpperCase()} · {date.toUpperCase()}
        </p>
        <p className="mt-auto font-display text-[9cqw] font-medium leading-[1.05]">{headline}</p>
      </div>
    </div>
  );
}
