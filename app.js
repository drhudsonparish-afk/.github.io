import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { Header } from "./components/site/Header";
import { Hero } from "./components/site/Hero";
import { Marquee, LeaguesMarquee } from "./components/site/Marquee";
import { HockeyBento } from "./components/site/HockeyBento";
import { Services } from "./components/site/Services";
import { About } from "./components/site/About";
import { Strip } from "./components/site/Strip";
import { Faq } from "./components/site/Faq";
import { Booking } from "./components/site/Booking";
import { Footer } from "./components/site/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);

  return (
    <div className="grain min-h-screen bg-ink text-ice" data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <HockeyBento />
        <Strip />
        <Services />
        <About />
        <LeaguesMarquee />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
