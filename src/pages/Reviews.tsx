import { reviews } from "../content";
import { Stars } from "../components/UI";

export const Reviews = () => {
  return (
    <section id="recensioni" className="reveal border-y border-[var(--line)] bg-[var(--surface)] py-20 md:py-32 min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[12px] font-semibold text-[var(--accent)] mb-4">Recensioni reali</p>
          <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight">Le esperienze <br/><span className="italic text-[var(--accent)]">delle clienti</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure key={r.name} className="group p-10 rounded-[2rem] card-premium hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6"><Stars n={r.stars} /></div>
              <blockquote className="text-xl font-serif italic leading-relaxed opacity-80 mb-6">“{r.text}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 ring-2 ring-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold font-serif">
                    {r.name.charAt(0)}
                </div>
                <div className="text-sm opacity-80">
                  <div className="font-semibold">{r.name}</div>
                  <div className="opacity-70">{r.source ?? "Google"} • {r.service ?? "Servizio"} • {r.date}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
