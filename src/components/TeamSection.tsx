import { team } from "../content";
import { ChevronRight, Calendar, Award, Sparkles, Instagram, Scissors, User } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const teamIcons = [Calendar, Award, Sparkles, User];

export function TeamSection() {
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
      id="chi-siamo" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent opacity-50" />
      
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-accent-light)] rounded-full blur-[100px] opacity-30" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-accent)]/20 shadow-sm mb-6">
            <Award className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--color-accent)]">
              Professionisti
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Le mani
            <br />
            <span className="relative inline-block">
              <span className="italic text-[var(--color-accent)]">dell'arte</span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto">
            Professionisti appassionati che trasformano ogni visita in un'esperienza indimenticabile. 
            La loro missione? Farti risplendere.
          </p>
          
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[10px] uppercase tracking-[.25em] font-bold opacity-50">
            <span>Scorri per conoscerli</span>
            <ChevronRight size={14} className="animate-bounce" />
          </div>
        </div>

        {/* Team Cards */}
        <div className="relative">
          {/* Fade edges - mobile only */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {team.map((t, i) => {
              const IconComponent = teamIcons[i];
              return (
                <div 
                  key={t.name} 
                  className={`snap-center shrink-0 w-[85vw] md:w-auto group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="bg-gradient-to-br from-[var(--color-paper)] to-[var(--color-surface)] p-6 md:p-8 lg:p-10 rounded-[2rem] border border-[var(--color-line)] h-full relative overflow-hidden hover:shadow-xl hover:shadow-[var(--color-accent)]/10 hover:-translate-y-2 transition-all duration-500">
                    {/* Decorative element */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/10 transition-all duration-500" />
                    
                    {/* Number badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-serif font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Name */}
                      <div className="text-lg md:text-xl font-serif font-medium text-[var(--color-ink)] mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {t.name}
                      </div>
                      
                      {/* Role */}
                      <div className="text-xs uppercase tracking-[.15em] font-bold text-[var(--color-accent)] mb-5">
                        {t.role}
                      </div>
                      
                      {/* Divider */}
                      <div className="w-12 h-0.5 bg-[var(--color-line)] mb-5 group-hover:w-20 group-hover:bg-[var(--color-accent)]/30 transition-all duration-300" />
                      
                      {/* Description */}
                      <p className="text-sm md:text-base opacity-80 font-light leading-relaxed mb-6">
                        {t.text}
                      </p>
                      
                      {/* Experience & Specialty */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {t.experience} di esperienza
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-ink)]/60">
                          {t.specialty}
                        </span>
                      </div>
                      
                      {/* Certifications */}
                      {t.certifications && t.certifications.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {t.certifications.map((cert) => (
                            <span 
                              key={cert}
                              className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                            >
                              ✓ {cert}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm opacity-60 mb-4">
            Un team affiatato con oltre 20 anni di esperienza
          </p>
          <a 
            href="/chi-siamo" 
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:gap-3 transition-all"
          >
            Scopri la nostra storia
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent opacity-50" />
    </section>
  );
}
