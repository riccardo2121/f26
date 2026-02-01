import { useEffect } from "react";
import { User, Clock, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../../components/UI";
import { salon } from "../../content";

export const BarberiaUomo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Taglio maschile moderno e classico",
    "Sfumature e precisione",
    "Barba scolpita a mano",
    "Rasoi caldi",
    "Trattamenti viso uomo",
    "Consigli styling personalizzati"
  ];

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--ink)]/50 mb-8">
            <a href="/" className="hover:text-[var(--accent)]">Home</a>
            <span>/</span>
            <span>Barberia Uomo</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--ink)]/10 text-[var(--ink)] text-sm font-medium mb-6">
                <User className="w-4 h-4" />
                Men's Grooming
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
                Barberia
                <span className="block text-[var(--accent)] italic">& Grooming</span>
              </h1>

              <p className="text-lg text-[var(--ink)]/70 mb-8 leading-relaxed">
                Per chi non ama perdere tempo. Tagli che mantengono la forma settimane, barba scolpita con rasoi caldi quando vuoi un tocco di lusso. Entri, ti rilassi, esci perfetto.
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
                  <div className="text-3xl font-serif font-bold text-[var(--ink)]">€18</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-[var(--line)]" />
                <div className="flex items-center gap-2 text-sm text-[var(--ink)]/60">
                  <Clock className="w-4 h-4" />
                  20-30 minuti
                </div>
                <Button href={salon.whatsapp} variant="solid" className="sm:ml-auto group">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Prenota ora
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-[var(--ink)]/20 to-gray-400/30 flex items-center justify-center">
                <User className="w-32 h-32 text-[var(--ink)]/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[var(--line)]">
                <div className="text-3xl font-serif font-bold text-[var(--ink)]">Simone</div>
                <div className="text-sm text-[var(--ink)]/60 mt-1">Barber Expert</div>
                <div className="text-xs text-[var(--accent)] mt-1">6 anni di esperienza</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
