import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/Fraunces-Variable.ttf", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.ttf", style: "italic" },
  ],
});

const workSans = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/WorkSans-Variable.ttf", style: "normal" },
    { path: "./fonts/WorkSans-Italic-Variable.ttf", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Education Today Zambia — News shaping Zambia's classrooms",
  description:
    "Education Today Zambia covers classroom learning, teacher development, curriculum reform, education financing, examinations and tertiary pathways — with data and comparisons across Africa and beyond.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
