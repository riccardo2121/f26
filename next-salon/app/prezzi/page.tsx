import type { Metadata } from "next";
import { pricesWoman, pricesMen, salon } from "@/content";

export const metadata: Metadata = {
  title: "Prezzi – Donna e Uomo | I Giarratano Parrucchieri",
  description: "Lista prezzi indicativi. Consulenza inclusa. Chiama o scrivi su WhatsApp per dettagli.",
};

export default function PrezziPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <h1 className="text-4xl font-serif font-medium leading-tight">Prezzi</h1>
      <div className="mt-8 grid sm:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xs uppercase tracking-widest text-black/70">Donna</h2>
          <ul className="mt-4 space-y-3">
            {pricesWoman.map(([k, v]) => (
              <li key={k} className="flex justify-between border-b border-black/10 pb-2">
                <span className="opacity-80">{k}</span>
                <span className="font-serif font-semibold">{v}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-widest text-black/70">Uomo</h2>
          <ul className="mt-4 space-y-3">
            {pricesMen.map(([k, v]) => (
              <li key={k} className="flex justify-between border-b border-black/10 pb-2">
                <span className="opacity-80">{k}</span>
                <span className="font-serif font-semibold">{v}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="mt-10 flex gap-4">
        <a href={`tel:${salon.phone}`} className="px-6 py-3 rounded-full bg-black text-white text-sm uppercase tracking-widest">Prenota</a>
        <a href={salon.whatsapp} className="px-6 py-3 rounded-full border border-black text-sm uppercase tracking-widest">WhatsApp</a>
      </div>
    </main>
  );
}
