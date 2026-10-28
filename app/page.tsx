import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import AboutStrip from "./components/AboutStrip";
import LatestNews from "./components/LatestNews";
import StatsBand from "./components/StatsBand";
import SectionsGrid from "./components/SectionsGrid";
import AwardsFeature from "./components/AwardsFeature";
import Publications from "./components/Publications";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars overlap />
      <AboutStrip />
      <LatestNews />
      <StatsBand />
      <SectionsGrid />
      <AwardsFeature />
      <Publications />
      <Newsletter />
    </>
  );
}
