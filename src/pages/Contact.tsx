import { salon } from "../content";
import { Button } from "../components/UI";

export const Contact = () => {
  return (
    <section id="prenota" className="border-t border-[var(--line)] bg-[var(--surface)] py-24 md:py-36 min-h-[70vh]">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <h2 className="text-5xl md:text-7xl font-serif font-medium leading-none mb-8">
            Riserva la tua <br/><span className="italic text-[var(--accent)]">esperienza</span>.
          </h2>
          <p className="text-xl opacity-80 mb-12 max-w-md leading-relaxed font-light">
            Il tuo momento di bellezza ti aspetta. Scegli lo slot online o contattaci su WhatsApp per una consulenza dedicata.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button href={salon.booking} variant="solid" className="shadow-2xl shadow-[var(--accent)]/30 px-10 py-5 text-lg">Prenota online</Button>
            <Button href={salon.whatsapp} variant="outline" className="px-10 py-5 text-lg">WhatsApp</Button>
          </div>

          <div className="space-y-6 text-base opacity-80 border-l-4 border-[var(--accent)] pl-8">
            <div><span className="font-bold block text-[var(--ink)] mb-2 text-[10px] uppercase tracking-[.2em]">Dove siamo</span> {salon.address}, {salon.city}</div>
            <div><span className="font-bold block text-[var(--ink)] mb-2 text-[10px] uppercase tracking-[.2em]">Orari</span> <span className="whitespace-pre-line block">{salon.hours}</span></div>
            <div>
              <span className="font-bold block text-[var(--ink)] mb-2 text-[10px] uppercase tracking-[.2em]">Contatti</span>
              <a className="hover:underline hover:text-[var(--accent)] transition-colors" href={`tel:${salon.phone}`}>{salon.phone}</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
           <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-0 duration-700 border-4 border-[var(--surface)]">
            <img
              src="https://images.pexels.com/photos/3993325/pexels-photo-3993325.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Dettaglio salone"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
