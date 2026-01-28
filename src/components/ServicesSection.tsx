import { services } from "../content";
import { Pill } from "./UI";
import { Scissors, Palette, Sparkles, User, Heart, ShoppingBag, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const serviceIcons = [Scissors, Palette, Sparkles, User, Heart, ShoppingBag];

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.offsetWidth;
      // Calcola la larghezza effettiva della card + gap
      const firstCard = scrollContainer.querySelector('article');
      const cardWidth = firstCard ? firstCard.offsetWidth + 12 : 292; // 12px gap
      
      // Calcola l'indice basato sulla posizione di scroll
      const scrollProgress = scrollLeft / (cardWidth * services.length - containerWidth);
      const index = Math.round(scrollProgress * (services.length - 1));
      setActiveIndex(Math.max(0, Math.min(index, services.length - 1)));
    };
    
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Calcola subito
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="servizi" className="reveal relative mx-auto max-w-[1400px] px-4 py-16 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-light)] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--surface)] to-[var(--paper)] border border-[var(--accent)]/20 shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
            Eccellenza <span className="font-serif italic font-normal lowercase">e</span> Stile
          </span>
        </div>
        <h2 className="group text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1]">
          <span className="bg-gradient-to-r from-[var(--ink)] via-[var(--accent-dark)] to-[var(--accent)] bg-clip-text text-transparent">
            Servizi <span className="font-serif italic font-normal lowercase text-[var(--accent)]">su</span> misura
          </span>
          <br/>
          <span className="relative inline-block mt-2">
            per ogni esigenza
            <svg className="absolute w-full h-4 -bottom-3 left-0 text-[var(--accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path className="title-underline-path" d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <p className="mt-8 text-lg opacity-70 leading-relaxed font-light max-w-2xl mx-auto border-l-2 border-[var(--accent)]/30 pl-6">
          Dalla consulenza iniziale al risultato finale, ogni servizio è un'esperienza personalizzata. Tecniche all'avanguardia, prodotti selezionati e l'occhio esperto dei nostri stylist per realizzare il tuo desiderio di bellezza.
        </p>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((s, i) => {
          const IconComponent = serviceIcons[i];
          return (
            <article
              key={s.title}
              className="service-card relative bg-gradient-to-br from-white to-[var(--surface)] p-6 md:p-8 rounded-[2rem] border border-[var(--line)] overflow-hidden group flex flex-col justify-between h-full min-h-[220px] md:min-h-[260px] shadow-sm hover:shadow-xl hover:shadow-[var(--accent)]/10 hover:-translate-y-2 transition-all duration-500 w-auto"
            >
              {/* Decorative background number */}
              <div className="absolute -right-4 -bottom-8 text-[140px] font-serif leading-none opacity-[0.04] text-[var(--accent)] select-none pointer-events-none group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500">
                {i + 1}
              </div>
              
              {/* Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:scale-110 transition-all duration-300">
                <IconComponent className="w-6 h-6 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
              </div>

              <div className="mb-2 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <Pill className="bg-[var(--paper)] border-[var(--accent)]/20 text-[var(--accent)]">{s.tag}</Pill>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-medium leading-tight mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {s.title.includes('&') ? (
                    <>{s.title.split('&')[0]} <span className="font-serif italic font-normal text-[var(--accent)] lowercase">e</span> {s.title.split('&')[1]}</>
                  ) : s.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed font-light service-desc group-hover:opacity-90 transition-all duration-500">
                  {s.desc}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </article>
          );
        })}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden relative z-10">
        {/* Swipe hint */}
        <div className="flex items-center justify-end gap-1.5 px-4 mb-3 text-[10px] uppercase tracking-wider font-bold opacity-50">
          <span>Scorri per esplorare</span>
          <ChevronRight size={14} className="animate-bounce" />
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-3 pb-4 scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {services.map((s, i) => {
            const IconComponent = serviceIcons[i];
            return (
              <article
                key={s.title}
                className="service-card relative bg-gradient-to-br from-white to-[var(--surface)] p-4 rounded-2xl border border-[var(--line)] overflow-hidden flex flex-col justify-between min-h-[180px] w-[80vw] max-w-[280px] shrink-0 snap-center shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="absolute -right-4 -bottom-8 text-[100px] font-serif leading-none opacity-[0.04] text-[var(--accent)] select-none pointer-events-none">
                  {i + 1}
                </div>
                
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-[var(--accent)]" />
                </div>

                <div className="relative z-10">
                  <Pill className="bg-[var(--paper)] border-[var(--accent)]/20 text-[var(--accent)] text-[10px] mb-3 w-fit">{s.tag}</Pill>
                  <h3 className="text-lg font-serif font-medium leading-tight mb-2">
                    {s.title.includes('&') ? (
                      <>{s.title.split('&')[0]} <span className="font-serif italic font-normal text-[var(--accent)] lowercase">e</span> {s.title.split('&')[1]}</>
                    ) : s.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        
        {/* Scroll indicators */}
        <div className="flex justify-center gap-1.5 mt-4">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const container = scrollRef.current;
                if (!container) return;
                const firstCard = container.querySelector('article');
                const cardWidth = firstCard ? firstCard.offsetWidth + 12 : 292;
                container.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i 
                  ? 'w-6 bg-[var(--accent)]' 
                  : 'w-1.5 bg-[var(--ink)]/20'
              }`}
              aria-label={`Vai a servizio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
