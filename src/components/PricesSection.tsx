import { pricesWoman, pricesMen } from "../content";
import { Tag, Clock, Sparkles } from "lucide-react";

export function PricesSection() {
  return (
    <section id="prezzi" className="reveal relative bg-gradient-to-b from-[var(--surface)] to-[var(--paper)] py-16 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[var(--accent)]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[var(--accent-light)]/30 blur-3xl"></div>
      
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          <div className="md:w-1/3 md:sticky md:top-32 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--paper)] border border-[var(--accent)]/20 shadow-sm mb-6">
              <Tag className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
                Trasparenza
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 md:mb-8 leading-tight">
              Bellezza <br/>
              <span className="relative inline-block">
                <span className="italic text-[var(--accent)]">accessibile</span>
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="opacity-70 text-base md:text-lg leading-relaxed mb-8 font-light border-l-2 border-[var(--accent)]/30 pl-5">
              Prezzi trasparenti, nessuna sorpresa. Ogni servizio include consulenza personalizzata, prodotti professionali e la garanzia del sorriso. Perché meritarti il meglio non deve essere un lusso.
            </p>
            
            {/* Feature badges */}
            <div className="hidden md:flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[var(--paper)] px-4 py-2 rounded-full border border-[var(--line)] text-xs">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span>Prodotti di eccellenza</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--paper)] px-4 py-2 rounded-full border border-[var(--line)] text-xs">
                <Clock className="w-4 h-4 text-[var(--accent)]" />
                <span>Consulenza gratuita</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-4 md:gap-8 w-full">
            {/* Donna Card */}
            <div className="bg-gradient-to-br from-[var(--paper)] to-white p-5 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-[var(--line)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--accent)]/10 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent)]/10 transition-all duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)] transition-all duration-300">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xs md:text-sm uppercase tracking-[.2em] font-bold text-[var(--accent)]">Donna</h3>
              </div>
              
              <ul className="space-y-4 md:space-y-5 text-sm md:text-base relative z-10">
                {pricesWoman.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline gap-3 pb-3 border-b border-[var(--line)] last:border-0 last:pb-0 group/item">
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium opacity-90 group-hover/item:text-[var(--accent)] transition-colors truncate">{item.name}</span>
                      {item.duration && <span className="text-[10px] md:text-xs opacity-50 flex items-center gap-1 mt-0.5"><Clock size={10} /> {item.duration}</span>}
                    </div>
                    <div className="flex items-baseline gap-1 shrink-0">
                      <span className="text-[10px] opacity-50">da</span>
                      <span className="font-serif font-bold text-xl md:text-2xl text-[var(--accent)]">€{item.from}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[var(--line)]">
                <p className="text-[10px] md:text-xs opacity-60 leading-relaxed">I prezzi sono indicativi e variano in base alla lunghezza e alla tecnica utilizzata.</p>
              </div>
            </div>

            {/* Uomo Card */}
            <div className="bg-gradient-to-br from-[var(--paper)] to-white p-5 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-[var(--line)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--accent)]/10 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--accent)]/10 transition-all duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[var(--ink)]/10 flex items-center justify-center group-hover:bg-[var(--ink)] transition-all duration-300">
                  <Tag className="w-5 h-5 md:w-6 md:h-6 text-[var(--ink)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xs md:text-sm uppercase tracking-[.2em] font-bold text-[var(--ink)]">Uomo</h3>
              </div>
              
              <ul className="space-y-4 md:space-y-5 text-sm md:text-base relative z-10">
                {pricesMen.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline gap-3 pb-3 border-b border-[var(--line)] last:border-0 last:pb-0 group/item">
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium opacity-90 group-hover/item:text-[var(--ink)] transition-colors truncate">{item.name}</span>
                      {item.duration && <span className="text-[10px] md:text-xs opacity-50 flex items-center gap-1 mt-0.5"><Clock size={10} /> {item.duration}</span>}
                    </div>
                    <div className="flex items-baseline gap-1 shrink-0">
                      <span className="text-[10px] opacity-50">da</span>
                      <span className="font-serif font-bold text-xl md:text-2xl text-[var(--ink)]">€{item.from}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[var(--line)]">
                <p className="text-[10px] md:text-xs opacity-60 leading-relaxed">I prezzi sono indicativi e variano in base alla lunghezza e alla tecnica utilizzata.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
