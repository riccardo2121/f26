import { useEffect } from "react";
import { Palette, Clock, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../../components/UI";
import { salon } from "../../content";

export const ColoreBalayage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Consulenza colore personalizzata",
    "Tecniche balayage e airtouch",
    "Colorazioni senza ammoniaca",
    "Sfumature naturali",
    "Ricrescita elegante",
    "Trattamento protettivo incluso"
  ];

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--ink)]/50 mb-8">
            <a href="/" className="hover:text-[var(--accent)]">Home</a>
            <span>/</span>
            <span>Colore & Balayage</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Colorazione
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
                Balayage &
                <span className="block text-[var(--accent)] italic">Colorazioni</span>
              </h1>

              <p className="text-lg text-[var(--ink)]/70 mb-8 leading-relaxed">
                Niente più ricrescita odiosa. Tecniche come balayage e airtouch per sfumature che crescono con eleganza, senza stacchi netti. Capelli luminosi, profondità cromatica e zero stress di manutenzione.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--accent)]" />
                    <span className="text-[var(--ink)]/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-[var(--surface)] rounded-2xl">
                <div>
                  <div className="text-sm text-[var(--ink)]/50 mb-1">A partire da</div>
                  <div className="text-3xl font-serif font-bold text-[var(--accent)]">€40</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-[var(--line)]" />
                <div className="flex items-center gap-2 text-sm text-[var(--ink)]/60">
                  <Clock className="w-4 h-4" />
                  60-90 minuti
                </div>
                <Button href={salon.whatsapp} variant="accent" className="sm:ml-auto group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Prenota ora
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-light)]/30 flex items-center justify-center">
                <Palette className="w-32 h-32 text-[var(--accent)]/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[var(--line)]">
                <div className="text-3xl font-serif font-bold text-[var(--accent)]">4.6</div>
                <div className="flex gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[var(--accent)] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-[var(--ink)]/60">Wella Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
