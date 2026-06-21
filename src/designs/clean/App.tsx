import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
