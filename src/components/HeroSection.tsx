import { salon } from "../content";
import { MessageCircle, Star, Sparkles, Award, MapPin, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./UI";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('servizi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 md:pt-32 overflow-hidden"
    >
      {/* Background Elements - Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div 
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--color-accent-light)] to-transparent opacity-40 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--color-accent)]/20 to-transparent opacity-30 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[var(--color-accent-light)]/50 to-transparent opacity-30 blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
        
        {/* Decorative shapes */}
        <div className="absolute top-32 right-16 opacity-20 animate-float-slow hidden lg:block">
          <Sparkles className="w-10 h-10 text-[var(--color-accent)]" />
        </div>
        <div className="absolute top-48 left-20 opacity-15 animate-float-delayed hidden lg:block">
          <Award className="w-16 h-16 text-[var(--color-accent)]" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1 relative z-10">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-accent)]/20 shadow-sm mb-6 md:mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"/>
              <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--color-accent)]">
                Dal 2003 • Arte & Passione per i tuoi capelli
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 md:mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block text-[var(--color-ink)]">
                I Giarratano
              </span>
              <span className="block mt-1 md:mt-2 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-accent-dark)] to-[var(--color-accent)] bg-clip-text text-transparent">
                Parrucchieri
              </span>
              <span className="relative inline-block mt-1 md:mt-2">
                <span className="italic text-[var(--color-accent)]">Esci con la fiducia</span>
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 text-[var(--color-accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path className="animate-[wavePath_3s_ease-in-out_infinite]" d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="block mt-1 md:mt-2">
                che meriti
              </span>
            </h1>

            {/* Description */}
            <p 
              className={`text-base md:text-xl font-light text-[var(--color-ink)]/70 mb-8 max-w-lg leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="border-l-2 border-[var(--color-accent)]/30 pl-4 md:pl-5">
                Da 20 anni a Sant'Ambrogio di Torino, creiamo look che raccontano chi sei davvero. 
                Taglio, colore e cura del capello: un'esperienza tailor-made per la tua unicità.
              </span>
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <Button 
                href={salon.whatsapp} 
                variant="accent" 
                className="group relative overflow-hidden shadow-lg shadow-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-[var(--color-accent)]/40 press-effect"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <MessageCircle className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Prenota la tua consulenza</span>
              </Button>
              <Button 
                href={`tel:${salon.phone.replace(/\s+/g,"")}`} 
                variant="outline" 
                className="border-2 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-all duration-300 press-effect"
              >
                <Phone className="w-4 h-4 mr-2 md:hidden" />
                <span>Chiama ora</span>
              </Button>
            </div>

            {/* Social Proof Card */}
            <div 
              className={`inline-flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-line)] shadow-sm transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[var(--color-accent)]/30 bg-[var(--color-paper)] p-1.5 flex items-center justify-center">
                  <img src="/logo.png" alt="Reviews" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-white fill-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[var(--color-accent)] font-serif font-bold text-xl md:text-2xl italic">4.6</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((n) => (
                      <Star key={n} className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                    ))}
                  </div>
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-wider font-bold text-[var(--color-ink)]/50">
                  Su Google Reviews • 100+ recensioni
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div 
            className={`order-1 lg:order-2 relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-[var(--color-ink)]/10">
                {salon.heroAvif || salon.heroWebp ? (
                  <picture>
                    {salon.heroAvif && (
                      <source type="image/avif" srcSet={`${salon.heroAvif} 1600w`} sizes="(max-width: 768px) 100vw, 800px" />
                    )}
                    {salon.heroWebp && (
                      <source type="image/webp" srcSet={`${salon.heroWebp} 1600w`} sizes="(max-width: 768px) 100vw, 800px" />
                    )}
                    <img
                      src={salon.heroJpeg ?? ""}
                      alt={`Salone ${salon.name}`}
                      loading="eager"
                      decoding="async"
                      width={800}
                      height={600}
                      className="w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                ) : (
                  <img
                    src={salon.heroJpeg ?? ""}
                    alt={`Salone ${salon.name}`}
                    loading="eager"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)] via-transparent to-transparent opacity-60 md:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-paper)]/20 to-transparent opacity-50" />
              </div>

              {/* Floating Location Badge */}
              <div 
                className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-[var(--color-line)] animate-float-slow hidden sm:flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[var(--color-ink)]/50">Siamo a</div>
                  <div className="font-medium text-[var(--color-ink)]">{salon.city}</div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-[var(--color-accent)]/20 rounded-[2.5rem] hidden lg:block" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-ink)]/40 hover:text-[var(--color-accent)] transition-colors group"
        aria-label="Scorri per esplorare"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scopri di più</span>
        <ChevronDown className="w-5 h-5 animate-bounce-subtle group-hover:text-[var(--color-accent)]" />
      </button>
    </section>
  );
}
