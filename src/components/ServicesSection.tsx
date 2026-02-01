import { services } from "../content";
import { Pill } from "./UI";
import { Scissors, Palette, Sparkles, User, Heart, ShoppingBag, ChevronRight, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const serviceIcons = [Scissors, Palette, Sparkles, User, Heart, ShoppingBag];

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Intersection Observer per animazioni
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Sync scroll position with active index
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollLeft = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;
        const cardWidth = containerWidth * 0.85; // 85vw
        const gap = 16; // gap-4 = 1rem = 16px
        const totalCardWidth = cardWidth + gap;
        
        // Calculate current index based on scroll position
        const newIndex = Math.round(scrollLeft / totalCardWidth);
        const clampedIndex = Math.max(0, Math.min(newIndex, services.length - 1));
        
        setActiveIndex(clampedIndex);
        rafId = 0;
      });
    };
    
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Auto-scroll per mobile
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let autoScrollInterval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (!scrollContainer) return;
        
        setActiveIndex((prev) => {
          const nextIndex = prev >= services.length - 1 ? 0 : prev + 1;
          const containerWidth = scrollContainer.clientWidth;
          const cardWidth = containerWidth * 0.85;
          const gap = 16;
          const targetScroll = nextIndex * (cardWidth + gap);
          
          scrollContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
          return nextIndex;
        });
      }, 5000);
    };
    
    const startTimeout = setTimeout(startAutoScroll, 3000);
    
    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
      clearTimeout(startTimeout);
    };
    
    scrollContainer.addEventListener('touchstart', stopAutoScroll, { passive: true });
    scrollContainer.addEventListener('mousedown', stopAutoScroll);
    
    return () => {
      clearInterval(autoScrollInterval);
      clearTimeout(startTimeout);
      scrollContainer?.removeEventListener('touchstart', stopAutoScroll);
      scrollContainer?.removeEventListener('mousedown', stopAutoScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="servizi" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent-light)] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-accent)]/20 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--color-accent)]">
              Eccellenza <span className="font-serif italic font-normal lowercase">e</span> Stile
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-accent-dark)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Servizi
            </span>
            <span className="font-serif italic font-normal lowercase text-[var(--color-accent)]"> su </span>
            <span>misura</span>
            <br/>
            <span className="relative inline-block mt-2">
              per ogni esigenza
              <svg className="absolute w-full h-4 -bottom-3 left-0 text-[var(--color-accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path className="animate-[wavePath_3s_ease-in-out_infinite]" d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl opacity-70 leading-relaxed font-light max-w-2xl mx-auto border-l-2 border-[var(--color-accent)]/30 pl-6">
            Dalla consulenza iniziale al risultato finale, ogni servizio è un'esperienza personalizzata. 
            Tecniche all'avanguardia, prodotti selezionati e l'occhio esperto dei nostri stylist.
          </p>
        </div>

        {/* Desktop Grid */}
        <div 
          className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {services.map((s, i) => {
            const IconComponent = serviceIcons[i];
            const isHovered = hoveredCard === i;
            
            return (
              <article
                key={s.title}
                className="group relative bg-gradient-to-br from-white to-[var(--color-surface)] p-6 lg:p-8 rounded-[2rem] border border-[var(--color-line)] overflow-hidden flex flex-col justify-between min-h-[280px] lg:min-h-[320px] shadow-sm hover:shadow-xl hover:shadow-[var(--color-accent)]/10 transition-all duration-500"
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Decorative number */}
                <div className="absolute -right-4 -bottom-8 text-[140px] font-serif leading-none opacity-[0.03] text-[var(--color-accent)] select-none pointer-events-none group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                {/* Decorative gradient orb */}
                <div 
                  className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--color-accent)]/10 blur-3xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Icon */}
                <div className="relative">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Pill className="bg-[var(--color-paper)] border-[var(--color-accent)]/20 text-[var(--color-accent)] mb-4 w-fit">
                      {s.tag}
                    </Pill>
                    <h3 className="text-xl lg:text-2xl font-serif font-medium leading-tight mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {s.title.includes('&') ? (
                        <>{s.title.split('&')[0]} <span className="font-serif italic font-normal text-[var(--color-accent)] lowercase">e</span> {s.title.split('&')[1]}</>
                      ) : s.title}
                    </h3>
                    <p className="text-sm lg:text-base opacity-70 leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                  
                  {/* CTA Link */}
                  <div className="mt-auto pt-4 flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Scopri di più</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          {/* Swipe hint */}
          <div className="flex items-center justify-end gap-1.5 px-2 mb-4 text-[10px] uppercase tracking-wider font-bold opacity-50">
            <span>Scorri per esplorare</span>
            <ChevronRight size={14} className="animate-bounce" />
          </div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-2 pb-6 scrollbar-hide -mx-4 px-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {services.map((s, i) => {
              const IconComponent = serviceIcons[i];
              return (
                <article
                  key={s.title}
                  className="service-card relative bg-gradient-to-br from-white to-[var(--color-surface)] p-5 rounded-2xl border border-[var(--color-line)] overflow-hidden flex flex-col justify-between min-h-[200px] w-[85vw] max-w-[300px] shrink-0 snap-center shadow-sm active:scale-[0.98] transition-transform"
                >
                  <div className="absolute -right-4 -bottom-8 text-[100px] font-serif leading-none opacity-[0.03] text-[var(--color-accent)] select-none pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>

                  <div className="relative z-10">
                    <Pill className="bg-[var(--color-paper)] border-[var(--color-accent)]/20 text-[var(--color-accent)] text-[10px] mb-3 w-fit">
                      {s.tag}
                    </Pill>
                    <h3 className="text-lg font-serif font-medium leading-tight mb-2">
                      {s.title.includes('&') ? (
                        <>{s.title.split('&')[0]} <span className="font-serif italic font-normal text-[var(--color-accent)] lowercase">e</span> {s.title.split('&')[1]}</>
                      ) : s.title}
                    </h3>
                    <p className="text-sm opacity-70 leading-relaxed font-light line-clamp-3">
                      {s.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = scrollRef.current;
                  if (!container) return;
                  const containerWidth = container.clientWidth;
                  const cardWidth = containerWidth * 0.85;
                  const gap = 16;
                  const targetScroll = i * (cardWidth + gap);
                  container.scrollTo({ left: targetScroll, behavior: 'smooth' });
                  setActiveIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i 
                    ? 'w-6 bg-[var(--color-accent)]' 
                    : 'w-1.5 bg-[var(--color-ink)]/20'
                }`}
                aria-label={`Vai a servizio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
