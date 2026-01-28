import { salon } from "@/content";
import ScrollToTop from "./scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3ede6] text-neutral-900">
      <ScrollToTop />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-[#e8c39a]/60 blur-3xl float-slow" />
        <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-[#c7d6d2]/70 blur-3xl float-slower" />
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7c7b7] bg-[#fff7ef] px-4 py-2 text-xs uppercase tracking-[0.3em] text-neutral-700 reveal-up">
                Salone di bellezza
              </div>
              <h1 className="mt-6 text-4xl font-serif font-medium leading-tight sm:text-5xl lg:text-6xl reveal-up reveal-delay-1">
                Parrucchiere a {salon.city} - {salon.name}
              </h1>
              <p className="mt-5 text-lg text-neutral-700 sm:text-xl reveal-up reveal-delay-2">
                Consulenza personalizzata, tagli e colore su misura. Atmosfera calda, tecnica precisa, risultati naturali.
              </p>
              <p className="mt-3 text-sm text-neutral-600 reveal-up reveal-delay-3">{salon.address}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row reveal-up reveal-delay-4">
                <a
                  href={salon.whatsapp}
                  className="inline-flex items-center justify-center rounded-full bg-[#2b2017] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[#3a2a1e]"
                >
                  WhatsApp
                </a>
                <a
                  href={salon.booking}
                  className="inline-flex items-center justify-center rounded-full border border-[#2b2017] px-6 py-3 text-xs uppercase tracking-[0.3em] text-neutral-900 transition hover:bg-[#2b2017] hover:text-white"
                >
                  Prenota online
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#e1d4c6] bg-[#fffaf5] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Color</p>
                  <p className="mt-2 text-sm text-neutral-700">Sfumature naturali, tecniche moderne, brillantezza duratura.</p>
                </div>
                <div className="rounded-2xl border border-[#e1d4c6] bg-[#fffaf5] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Taglio</p>
                  <p className="mt-2 text-sm text-neutral-700">Linee pulite e styling su misura per ogni viso.</p>
                </div>
                <div className="rounded-2xl border border-[#e1d4c6] bg-[#fffaf5] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Sposa</p>
                  <p className="mt-2 text-sm text-neutral-700">Prove dedicate e look eleganti per il tuo evento.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e1d4c6] bg-[#fffaf5]/90 p-8 shadow-[0_20px_60px_-30px_rgba(43,32,23,0.45)] backdrop-blur reveal-up reveal-delay-5">
              <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">Info rapide</div>
              <div className="mt-6 space-y-4 text-sm text-neutral-700">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Telefono</p>
                  <p className="mt-1 text-base font-semibold">{salon.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Indirizzo</p>
                  <p className="mt-1">{salon.address}</p>
                  <a className="mt-2 inline-flex text-xs uppercase tracking-[0.3em] text-neutral-900 hover:opacity-70" href={salon.maps}>
                    Apri su Maps
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Social</p>
                  <a className="mt-1 inline-flex text-sm text-neutral-900 hover:opacity-70" href={salon.instagram}>
                    Instagram
                  </a>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-[#2b2017] px-6 py-5 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-200">Chiamata veloce</p>
                <p className="mt-2 text-2xl font-semibold">{salon.phone}</p>
                <a
                  href={`tel:${salon.phone}`}
                  className="mt-4 inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-neutral-900"
                >
                  Chiama ora
                </a>
              </div>
            </div>
          </div>

          <section className="mt-16 lg:mt-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between reveal-up">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Servizi</p>
                <h2 className="mt-3 text-3xl font-serif text-neutral-900 sm:text-4xl">
                  Trattamenti sartoriali, risultati visibili
                </h2>
                <p className="mt-3 max-w-2xl text-base text-neutral-700">
                  Ogni servizio nasce da una consulenza accurata: ascoltiamo, analizziamo e costruiamo un look che ti valorizza davvero.
                </p>
              </div>
              <a
                href={salon.booking}
                className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-3 text-xs uppercase tracking-[0.3em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Prenota un consulto
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  tag: "Donna",
                  title: "Taglio Sartoriale & Styling",
                  desc: "Tagli personalizzati che valorizzano il tuo viso. Piega e finish impeccabili per un look sempre fresco.",
                },
                {
                  tag: "Colore",
                  title: "Colorazioni & Schiariture d'Autore",
                  desc: "Dalle tinte organiche al balayage. Tecniche su misura per riflessi naturali e luminosi.",
                },
                {
                  tag: "Cura",
                  title: "Rituali di Benessere & Cura",
                  desc: "Ricostruzione, idratazione e trattamento della cute. Capelli forti, morbidi, pieni di vita.",
                },
                {
                  tag: "Uomo",
                  title: "Barberia & Grooming Uomo",
                  desc: "Stile classico o contemporaneo. Precisione, pulizia e dettagli curati al millimetro.",
                },
                {
                  tag: "Sposa",
                  title: "Sposa & Grandi Eventi",
                  desc: "Il look perfetto per il tuo giorno speciale. Consulenza, prove e styling elegante.",
                },
                {
                  tag: "Prodotti",
                  title: "Home Care & Prodotti",
                  desc: "Solo professionale selezionato. Routine su misura per mantenere il risultato a casa.",
                },
              ].map((service, index) => {
                const delayClasses = [
                  "reveal-delay-1",
                  "reveal-delay-2",
                  "reveal-delay-3",
                  "reveal-delay-4",
                  "reveal-delay-5",
                  "reveal-delay-6",
                ];
                return (
                <a
                  key={service.title}
                  href={salon.booking}
                  className={`card-sheen group relative overflow-hidden rounded-3xl border border-[#e1d4c6] bg-[#fffaf5] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-30px_rgba(43,32,23,0.6)] reveal-up ${delayClasses[index]}`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#e8c39a]/40 blur-2xl transition duration-300 group-hover:scale-125" />
                  <div className="pointer-events-none absolute -bottom-12 -left-6 h-28 w-28 rounded-full bg-[#c7d6d2]/50 blur-2xl transition duration-300 group-hover:scale-110" />
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">{service.tag}</p>
                  <h3 className="mt-3 text-xl font-semibold text-neutral-900 transition duration-300 group-hover:tracking-wide">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-700">{service.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-900">
                    Scopri di piu
                    <span className="text-base transition duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </a>
              )})}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
