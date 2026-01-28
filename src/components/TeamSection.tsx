import { team } from "../content";
import { ChevronRight, Calendar, Award, Sparkles } from "lucide-react";

const teamIcons = [Award, Sparkles, Calendar];

export function TeamSection() {
  return (
    <section id="chi-siamo" className="reveal relative mx-auto max-w-6xl px-4 py-16 md:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5 pointer-events-none"></div>
      
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--surface)] to-[var(--paper)] border border-[var(--accent)]/20 shadow-sm mb-6">
          <Award className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
            Professionisti
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
          Le mani <br/>
          <span className="relative inline-block">
            <span className="italic text-[var(--accent)]">dell'arte</span>
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg opacity-70 max-w-xl mx-auto">
          Professionisti appassionati che trasformano ogni visita in un'esperienza indimenticabile. La loro missione? Farti risplendere.
        </p>
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[10px] uppercase tracking-[.25em] font-bold opacity-60">
          <span>Scorri per conoscerli</span>
          <ChevronRight size={14} className="animate-bounce" />
        </div>
      </div>

      <div className="relative">
        <div className="md:hidden edge-fade edge-fade-left"></div>
        <div className="md:hidden edge-fade edge-fade-right"></div>
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 pb-4 md:pb-0 px-4 md:px-0 scrollbar-hide w-full">
        {team.map((t, i) => {
          const IconComponent = teamIcons[i];
          return (
            <div key={t.name} className="snap-center shrink-0 w-[85vw] md:w-auto bg-gradient-to-br from-[var(--paper)] to-[var(--surface)] p-6 md:p-10 rounded-[2rem] border border-[var(--line)] transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--accent)]/10 touch-bounce relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--accent)]/10 transition-all duration-500"></div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--accent)] group-hover:scale-110 transition-all duration-300">
                <IconComponent className="w-7 h-7 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div className="relative z-10">
                <div className="text-sm uppercase tracking-[.15em] font-bold text-[var(--ink)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">{t.name}</div>
                <div className="text-[11px] uppercase tracking-wider text-[var(--accent)] font-semibold mb-5">{t.role}</div>
                <div className="w-12 h-0.5 bg-[var(--line)] mb-5 group-hover:w-20 group-hover:bg-[var(--accent)]/30 transition-all duration-300"></div>
                <p className="text-sm md:text-base opacity-80 font-light leading-relaxed">
                  {t.text}
                </p>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          );
        })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
    </section>
  );
}
