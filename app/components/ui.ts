const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

export const button = {
  primary: `${buttonBase} bg-copper text-white hover:bg-copper-dark`,
  /** For navy backgrounds */
  outlineLight: `${buttonBase} border border-white/30 text-white hover:border-white hover:bg-white/5`,
  outlineDark: `${buttonBase} border border-ink/20 text-ink hover:border-ink`,
};
