import { team } from "../content";
import { ChevronRight, Award, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Colori avatar per ogni membro del team
const avatarColors = [
  "from-rose-400 to-pink-500",
  "from-violet-400 to-purple-500", 
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500"
];

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
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent opacity-50" />
      
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent-light)] rounded-full blur-[120px] opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${
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
              <span className="italic text-[var(--color-accent)]">dell&apos;arte</span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto">
            Professionisti appassionati che trasformano ogni visita in un&apos;esperienza indimenticabile. 
            La loro missione? Farti risplendere.
          </p>
        </div>

        {/* Desktop: Layout 2x2 Grid / Mobile: Horizontal Scroll */}
        <div className="relative">
          {/* Mobile: Fade edges */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--color-paper)] to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {team.map((member, i) => {
              const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
              return (
                <article 
                  key={member.name} 
                  className={`snap-center shrink-0 w-[90vw] sm:w-[70vw] md:w-auto group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="bg-gradient-to-br from-[var(--color-paper)] to-[var(--color-surface)] rounded-[2rem] border border-[var(--color-line)] h-full relative overflow-hidden hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 transition-all duration-500">
                    
                    {/* Desktop Layout: Horizontal Card */}
                    <div className="flex flex-col md:flex-row">
                      
                      {/* Avatar Section - Full width on mobile, left on desktop */}
                      <div className="relative md:w-2/5 lg:w-1/3 p-6 md:p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-paper)] border-b md:border-b-0 md:border-r border-[var(--color-line)]">
                        {/* Avatar Circle */}
                        <div className={`relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-2xl md:text-3xl font-serif font-bold shadow-xl group-hover:scale-105 transition-transform duration-500`}>
                          {initials}
                          {/* Decorative ring */}
                          <div className="absolute inset-[-4px] rounded-full border-2 border-[var(--color-accent)]/20 group-hover:border-[var(--color-accent)]/40 transition-colors duration-500" />
                        </div>
                        
                        {/* Name - visible only on desktop under avatar */}
                        <div className="hidden md:block text-center mt-4">
                          <h3 className="text-lg lg:text-xl font-serif font-medium text-[var(--color-ink)]">
                            {member.name}
                          </h3>
                        </div>
                        
                        {/* Number badge */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-serif font-bold text-xs">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1 p-6 md:p-8 relative">
                        {/* Decorative element */}
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/10 transition-all duration-500" />
                        
                        {/* Name - mobile only */}
                        <div className="md:hidden mb-4">
                          <h3 className="text-xl font-serif font-medium text-[var(--color-ink)] mb-1">
                            {member.name}
                          </h3>
                          <p className="text-xs uppercase tracking-[.15em] font-bold text-[var(--color-accent)]">
                            {member.role}
                          </p>
                        </div>
                        
                        {/* Role - desktop only */}
                        <div className="hidden md:block mb-5">
                          <p className="text-xs uppercase tracking-[.15em] font-bold text-[var(--color-accent)]">
                            {member.role}
                          </p>
                        </div>
                        
                        {/* Divider */}
                        <div className="w-16 h-0.5 bg-[var(--color-accent)]/30 mb-5" />
                        
                        {/* Description */}
                        <p className="text-sm lg:text-base opacity-80 font-light leading-relaxed mb-6">
                          {member.text}
                        </p>
                        
                        {/* Experience & Specialty */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                            <Sparkles className="w-3 h-3" />
                            {member.experience}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full bg-[var(--color-surface)] text-[var(--color-ink)]/60">
                            {member.specialty}
                          </span>
                        </div>
                        
                        {/* Certifications */}
                        {member.certifications && member.certifications.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {member.certifications.map((cert) => (
                              <span 
                                key={cert}
                                className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent)]"
                              >
                                ✓ {cert}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Team Stats */}
        <div 
          className={`mt-12 md:mt-16 lg:mt-20 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-paper)] rounded-[2rem] border border-[var(--color-line)] p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-accent)] mb-1">20+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 font-medium">Anni esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-accent)] mb-1">4</div>
                <div className="text-xs uppercase tracking-wider opacity-60 font-medium">Professionisti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-accent)] mb-1">2k+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 font-medium">Clienti soddisfatti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-medium text-[var(--color-accent)] mb-1">5★</div>
                <div className="text-xs uppercase tracking-wider opacity-60 font-medium">Valutazione media</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-10 md:mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm opacity-60 mb-4">
            Un team affiatato pronto a prendersi cura di te
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
