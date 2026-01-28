import { Palette, Droplets, Award, Clock, ShieldCheck } from "lucide-react";

export function WhyUsSection() {
  const bullets = [
    { text: "Colorazioni e tecniche personalizzate", icon: Palette },
    { text: "Prodotti professionali e cura del capello", icon: Droplets },
    { text: "Esperienza e attenzione ai dettagli", icon: Award },
    { text: "Tempi chiari e prezzo trasparente", icon: Clock },
    { text: "Ritocco/garanzia su piccoli aggiustamenti", icon: ShieldCheck },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-[12px] font-semibold text-[var(--accent)] mb-2">Perché noi</p>
        <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">Cosa ci distingue</h2>
      </div>
      <ul className="grid md:grid-cols-2 gap-6">
        {bullets.map(({ text, icon: Icon }) => (
          <li
            key={text}
            className="group relative p-6 rounded-2xl border border-[var(--line)] bg-[var(--paper)] text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--accent)] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition"></div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/15 flex items-center justify-center text-[var(--accent)]">
                <Icon size={20} />
              </div>
              <span className="font-serif font-medium">{text}</span>
            </div>
            <div className="h-px w-12 bg-[var(--accent)]/40 group-hover:w-20 transition-all"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
