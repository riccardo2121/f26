import { pricesWoman, pricesMen, salon } from "../content";
import { User, Clock, Sparkles, Check, ArrowRight, MessageCircle, Tag } from "lucide-react";
import { Button } from "./UI";
import { useState, useRef, useEffect } from "react";

export function PricesSection() {
  const [activeTab, setActiveTab] = useState<'donna' | 'uomo'>('donna');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="prezzi" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-paper)]"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-line)] to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[var(--color-accent-light)]/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)]/[0.02] blur-3xl pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-paper)] border border-[var(--color-accent)]/20 shadow-sm mb-6">
            <Tag className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--color-accent)]">
              Trasparenza
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Quanto vale
            <br />
            <span className="relative inline-block">
              <span className="italic text-[var(--color-accent)]">sentirti bella</span>
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--color-accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="block mt-1">ogni giorno?</span>
          </h2>
          
          <p className="text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
            Da €35 per un taglio che ti farà ricevere complimenti per settimane. 
            Prezzi trasparenti che includono consulenza, prodotti professionali e 
            la garanzia "ti piace o sistemiamo".
          </p>
        </div>

        {/* Tab Switcher - Mobile */}
        <div className="md:hidden mb-8">
          <div className="flex bg-[var(--color-paper)] rounded-2xl p-1.5 border border-[var(--color-line)] shadow-sm">
            <button
              onClick={() => setActiveTab('donna')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === 'donna'
                  ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/30'
                  : 'text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Donna
            </button>
            <button
              onClick={() => setActiveTab('uomo')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === 'uomo'
                  ? 'bg-[var(--color-ink)] text-white shadow-lg shadow-[var(--color-ink)]/30'
                  : 'text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]'
              }`}
            >
              <Tag className="w-4 h-4" />
              Uomo
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Donna Card */}
          <div 
            className={`${activeTab === 'donna' ? 'block' : 'hidden md:block'} transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-white to-[var(--color-surface)] rounded-[2rem] p-6 md:p-10 border border-[var(--color-line)] shadow-lg hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group h-full">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-accent)]/10 transition-all duration-500" />
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center shadow-lg shadow-[var(--color-accent)]/30 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium">Donna</h3>
                  <p className="text-sm text-[var(--color-ink)]/50">Servizi completi</p>
                </div>
              </div>
              
              {/* Price List */}
              <ul className="space-y-4 relative z-10">
                {pricesWoman.map((item, index) => (
                  <li 
                    key={item.name} 
                    className="group/item flex justify-between items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-accent)]/5 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[var(--color-ink)] group-hover/item:text-[var(--color-accent)] transition-colors">
                          {item.name}
                        </span>
                      </div>
                      {item.duration && (
                        <span className="text-xs text-[var(--color-ink)]/40 flex items-center gap-1 mt-1">
                          <Clock size={10} />
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 shrink-0">
                      <span className="text-xs text-[var(--color-ink)]/40">da</span>
                      <span className="font-serif font-bold text-2xl text-[var(--color-accent)]">€{item.from}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-[var(--color-line)]">
                <div className="flex items-start gap-2 text-xs text-[var(--color-ink)]/50 mb-4">
                  <Check className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span>Consulenza personalizzata inclusa</span>
                </div>
                <Button 
                  href={salon.whatsapp} 
                  variant="accent" 
                  className="w-full justify-center py-4 group/btn"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Prenota consulenza
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Uomo Card */}
          <div 
            className={`${activeTab === 'uomo' ? 'block' : 'hidden md:block'} transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-white to-[var(--color-surface)] rounded-[2rem] p-6 md:p-10 border border-[var(--color-line)] shadow-lg hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group h-full">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-ink)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-ink)]/10 transition-all duration-500" />
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-ink)] to-gray-700 flex items-center justify-center shadow-lg shadow-[var(--color-ink)]/20 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium">Uomo</h3>
                  <p className="text-sm text-[var(--color-ink)]/50">Grooming & Styling</p>
                </div>
              </div>
              
              {/* Price List */}
              <ul className="space-y-4 relative z-10">
                {pricesMen.map((item, index) => (
                  <li 
                    key={item.name} 
                    className="group/item flex justify-between items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-ink)]/5 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[var(--color-ink)] group-hover/item:text-[var(--color-ink-light)] transition-colors">
                          {item.name}
                        </span>
                      </div>
                      {item.duration && (
                        <span className="text-xs text-[var(--color-ink)]/40 flex items-center gap-1 mt-1">
                          <Clock size={10} />
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 shrink-0">
                      <span className="text-xs text-[var(--color-ink)]/40">da</span>
                      <span className="font-serif font-bold text-2xl text-[var(--color-ink)]">€{item.from}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-[var(--color-line)]">
                <div className="flex items-start gap-2 text-xs text-[var(--color-ink)]/50 mb-4">
                  <Check className="w-4 h-4 text-[var(--color-ink)] shrink-0 mt-0.5" />
                  <span>Rifinitura barba inclusa</span>
                </div>
                <Button 
                  href={salon.whatsapp} 
                  variant="solid" 
                  className="w-full justify-center py-4 group/btn"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Prenota appuntamento
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mt-12 md:mt-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { icon: Check, text: 'Prodotti di eccellenza' },
            { icon: Clock, text: 'Consulenza gratuita' },
            { icon: Sparkles, text: 'Risultato garantito' },
          ].map((badge, i) => (
            <div 
              key={badge.text}
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-[var(--color-line)] shadow-sm"
            >
              <badge.icon className="w-4 h-4 text-[var(--color-accent)]" />
              <span className="text-sm font-medium text-[var(--color-ink)]">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
