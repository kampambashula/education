import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBand from "./components/StatsBand";
import Categories from "./components/Categories";
import AfricaComparison from "./components/AfricaComparison";
import Audiences from "./components/Audiences";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <Categories />
        <AfricaComparison />
        <Audiences />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
