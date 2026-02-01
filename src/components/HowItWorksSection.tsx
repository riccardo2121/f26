import { salon } from "../content";
import { Button } from "./UI";
import { MessageCircle, ClipboardCheck, CheckCircle, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consulenza gratuita",
      desc: "Scrivici su WhatsApp e raccontaci cosa desideri. Ti ascoltiamo senza fretta, senza pressione.",
      highlight: "Zero impegno"
    },
    {
      icon: ClipboardCheck,
      title: "Proposta su misura",
      desc: "Ricevi la soluzione ideale per te, con tempi e investimento chiari. Include tutto: prodotti, trattamenti, styling.",
      highlight: "Zero sorprese"
    },
    {
      icon: CheckCircle,
      title: "Garanzia soddisfazione",
      desc: "Vieni in salone e rilassati. Se non ti piace, abbiamo 7 giorni per sistemare. A costo zero.",
      highlight: "Zero rischi"
    }
  ];

  return (
    <section id="come-funziona" className="reveal relative mx-auto max-w-[1400px] px-4 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--accent)]/20 shadow-sm mb-6">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
            Semplice e sicuro
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-4">
          Il tuo nuovo look in{" "}
          <span className="italic text-[var(--accent)]">3 passi</span>
        </h2>
        <p className="text-lg opacity-70 max-w-xl mx-auto">
          Nessuna chiamata in orari improbabili. Nessun attesa al telefono. 
          Prenota quando vuoi, ricevi conferma in pochi minuti.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div 
            key={step.title}
            className="group relative p-6 md:p-8 rounded-[2rem] border border-[var(--line)] bg-gradient-to-br from-[var(--paper)] to-[var(--surface)] hover:shadow-xl hover:shadow-[var(--accent)]/5 hover:-translate-y-1 transition-all duration-500"
          >
            {/* Step number */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold text-sm shadow-lg">
              {i + 1}
            </div>
            
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--accent)] group-hover:scale-110 transition-all duration-300">
              <step.icon className="w-7 h-7 text-[var(--accent)] group-hover:text-white transition-colors" />
            </div>
            
            {/* Content */}
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-full">
                {step.highlight}
              </span>
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed">{step.desc}</p>
            
            {/* Connector arrow - hidden on mobile and last item */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-[var(--accent)]/30" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 md:mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl bg-[var(--surface)] border border-[var(--line)]">
          <Button 
            href={salon.whatsapp} 
            variant="accent" 
            className="px-8 py-4 group shadow-lg shadow-[var(--accent)]/30"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Inizia ora con WhatsApp
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <span className="text-sm opacity-60 px-4">
            Risposta entro 30 minuti
          </span>
        </div>
        
        {/* Trust note */}
        <p className="mt-6 text-sm opacity-50">
          ✓ Nessun anticipo richiesto • ✓ Pagamento in salone • ✓ Modifica/cancellazione gratuita
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
    </section>
  );
}
