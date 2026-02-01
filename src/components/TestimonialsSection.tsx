import { useState, useEffect, useCallback, useRef } from "react";
import { reviews } from "../content";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
    
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const currentReview = reviews[current];

  return (
    <section id="recensioni" className="reveal relative py-16 md:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--paper)] via-[var(--surface)] to-[var(--paper)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-[1400px] px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--paper)] border border-[var(--accent)]/20 shadow-sm mb-6">
            <BadgeCheck className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
              Verificate su Google
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Parola di chi ci ha{" "}
            <span className="relative inline-block">
              <span className="italic text-[var(--accent)]">già scelti</span>
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto">
            Più di 120 clienti soddisfatti hanno condiviso la loro esperienza. 
            Ecco cosa dicono di noi.
          </p>
        </div>

        {/* Main testimonial card - Swipe enabled */}
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto select-none"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Swipe hint - Mobile only */}
          <div className="md:hidden absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider font-bold opacity-40 flex items-center gap-1">
            <ChevronLeft className="w-3 h-3" />
            <span>Scorri</span>
            <ChevronRight className="w-3 h-3" />
          </div>

          {/* Quote icon */}
          <div className="absolute -top-4 left-4 md:left-8 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/30 z-10">
            <Quote className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>

          {/* Card with transition */}
          <div 
            key={current}
            className="bg-gradient-to-br from-[var(--paper)] to-white rounded-[2rem] md:rounded-[3rem] border border-[var(--line)] shadow-xl shadow-[var(--accent)]/5 p-6 md:p-12 pt-12 md:pt-16 relative overflow-hidden animate-fade-in"
          >
            {/* Decorative background */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[var(--accent)]/5 blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < currentReview.stars ? 'text-[var(--accent)] fill-[var(--accent)]' : 'text-[var(--line)]'}`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-[var(--accent)]">{currentReview.stars}.0</span>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg md:text-2xl font-light leading-relaxed mb-8 min-h-[100px] flex items-center">
                "{currentReview.text}"
              </blockquote>

              {/* Author info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-[var(--line)]">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-serif text-lg font-medium">
                    {currentReview.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink)]">{currentReview.name}</div>
                    <div className="text-sm opacity-60 flex items-center gap-2">
                      <span>Google Reviews</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)]"></span>
                      <span>{currentReview.service}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation arrows - Desktop */}
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--paper)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-300"
                    aria-label="Recensione precedente"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="text-sm font-medium text-[var(--ink)]/40 px-2">
                    {current + 1} / {reviews.length}
                  </div>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--paper)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-300"
                    aria-label="Recensione successiva"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows - Mobile */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
              aria-label="Recensione precedente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm font-medium text-[var(--ink)]/40 px-2 min-w-[60px] text-center">
              {current + 1} / {reviews.length}
            </div>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg active:scale-95 transition-transform"
              aria-label="Recensione successiva"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-12 md:mt-16">
          <div className="text-center p-4 md:p-6 rounded-2xl bg-[var(--paper)] border border-[var(--line)]">
            <div className="text-2xl md:text-4xl font-serif font-bold text-[var(--accent)] mb-1">4.6</div>
            <div className="flex items-center justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-[var(--accent)] fill-[var(--accent)]" />
              ))}
            </div>
            <div className="text-xs md:text-sm opacity-60">Su Google</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-2xl bg-[var(--paper)] border border-[var(--line)]">
            <div className="text-2xl md:text-4xl font-serif font-bold text-[var(--accent)] mb-1">120+</div>
            <div className="text-xs md:text-sm opacity-60">Recensioni</div>
          </div>
          <div className="text-center p-4 md:p-6 rounded-2xl bg-[var(--paper)] border border-[var(--line)]">
            <div className="text-2xl md:text-4xl font-serif font-bold text-[var(--accent)] mb-1">20+</div>
            <div className="text-xs md:text-sm opacity-60">Anni di esperienza</div>
          </div>
        </div>
      </div>
    </section>
  );
}
