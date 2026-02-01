import { useRef, useState, useEffect } from "react";
import { compactReviews } from "../content";
import { Star, Quote, BadgeCheck } from "lucide-react";

export function CompactReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-16 bg-gradient-to-b from-[var(--paper)] to-[var(--surface)] border-t border-[var(--line)]"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 mb-3">
            <BadgeCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--accent)]">
              Recensioni verificate Google
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-medium">
            Cosa dicono di noi
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {compactReviews.map((review, i) => (
            <div
              key={review.name}
              className={`group relative bg-white rounded-2xl p-5 md:p-6 border border-[var(--line)] shadow-sm hover:shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-2 w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent)]/30">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star 
                    key={s} 
                    className="w-3.5 h-3.5 text-[var(--accent)] fill-[var(--accent)]" 
                  />
                ))}
                <span className="ml-1.5 text-xs font-medium text-[var(--accent)]">5.0</span>
              </div>

              {/* Text */}
              <p className="text-sm text-[var(--ink)]/80 leading-relaxed mb-4 line-clamp-3">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-3 border-t border-[var(--line)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-serif text-sm font-medium">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{review.name}</div>
                    <div className="text-[10px] text-[var(--ink)]/50">{review.service}</div>
                  </div>
                </div>
                <div className="text-[10px] text-[var(--ink)]/40 uppercase tracking-wider">
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div 
          className={`flex items-center justify-center gap-6 md:gap-10 mt-8 pt-6 border-t border-[var(--line)] transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--accent)]">4.6</div>
            <div className="flex items-center justify-center gap-0.5 my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-[var(--accent)] fill-[var(--accent)]" />
              ))}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--ink)]/50">Su Google</div>
          </div>
          <div className="w-px h-10 bg-[var(--line)]" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--accent)]">120+</div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--ink)]/50 mt-1">Recensioni</div>
          </div>
          <div className="w-px h-10 bg-[var(--line)] hidden sm:block" />
          <div className="text-center hidden sm:block">
            <div className="text-2xl md:text-3xl font-serif font-bold text-[var(--accent)]">20+</div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--ink)]/50 mt-1">Anni</div>
          </div>
        </div>
      </div>
    </section>
  );
}
