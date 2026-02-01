import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { GallerySection } from "../components/GallerySection";
import { TeamSection } from "../components/TeamSection";
import { PricesSection } from "../components/PricesSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CompactReviewsSection } from "../components/CompactReviewsSection";

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <HeroSection />

      {/* STRIP */}
      <div className="border-y border-[var(--line)] bg-[var(--surface)]/60 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-5 pause-on-hover">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-x-8 text-xs uppercase tracking-[.2em] font-medium text-[var(--ink)]/80 px-4">
              <span>Taglio donna</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Piega</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Colore</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Balayage</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Trattamenti</span>
              <span className="text-[var(--accent)]">•</span>
              <span>Sposa</span>
              <span className="text-[var(--accent)]">•</span>
            </div>
          ))}
        </div>
      </div>

      <ServicesSection />

      <GallerySection />

      <PricesSection />

      <TestimonialsSection />

      <TeamSection />

      <HowItWorksSection />
    </>
  );
};

 
