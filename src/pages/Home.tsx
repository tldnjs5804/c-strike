import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ResultsSection from "../components/sections/ResultsSection";
import JoinSection from "../components/sections/JoinSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [hash]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ResultsSection />
      <JoinSection />
      <ContactSection />
    </>
  );
}
