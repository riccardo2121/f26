import { useEffect } from "react";
import { Sparkles, Clock, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../../components/UI";
import { salon } from "../../content";

export const Trattamenti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Ricostruzione molecolare",
    "Idratazione profonda",
    "Trattamenti anti-crespo",
    "Keratina e botox per capelli",
    "Cura del cuoio capelluto",
    "Prodotti Kérastase e Wella"
  ];

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[var(--ink)]/50 mb-8">
            <a href="/" className="hover:text-[var(--accent)]">Home</a>
            <span>/</span>
            <span>Trattamenti</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Cura & Benessere
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
                Trattamenti
                <span className="block text-[var(--accent)] italic">rigeneranti</span>
              </h1>

              <p className="text-lg text-[var(--ink)]/70 mb-8 leading-relaxed">
                Smetti di nascondere i capelli rovinati. Trattamenti specifici per capelli secchi, sfibrati o stressati: risultato immediato di morbidezza e lucentezza che dura settimane, non giorni.
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
                  <div className="text-3xl font-serif font-bold text-[var(--accent)]">€25</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-[var(--line)]" />
                <div className="flex items-center gap-2 text-sm text-[var(--ink)]/60">
                  <Clock className="w-4 h-4" />
                  30-45 minuti
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
                <Sparkles className="w-32 h-32 text-[var(--accent)]/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[var(--line)]">
                <div className="text-3xl font-serif font-bold text-[var(--accent)]">100%</div>
                <div className="text-sm text-[var(--ink)]/60 mt-1">Prodotti professionali</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
