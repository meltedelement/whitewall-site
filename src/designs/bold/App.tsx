import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
