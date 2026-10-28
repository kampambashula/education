import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { navItems } from "./content/sections";
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
  title: {
    default: "Education Today Zambia — News, intelligence & innovation",
    template: "%s · Education Today Zambia",
  },
  description:
    "A premier B2B multimedia platform and news outlet delivering comprehensive coverage of the Zambian education sector, from early childhood to adult education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <NavBar items={navItems} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
