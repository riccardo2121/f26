import type { Metadata } from "next";
import { services } from "@/content";

export const metadata: Metadata = {
  title: "Servizi – Taglio, Colore, Trattamenti | I Giarratano Parrucchieri",
  description: "Taglio sartoriale, colorazioni d'autore e rituali di benessere. Consulenza inclusa.",
};

export default function ServiziPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <h1 className="text-4xl font-serif font-medium leading-tight">Servizi</h1>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.title} className="p-6 rounded-2xl border border-black/10 bg-white">
            <div className="text-xs uppercase tracking-widest text-black/70">{s.tag}</div>
            <h2 className="mt-3 text-2xl font-serif font-medium">{s.title}</h2>
            <p className="mt-3 opacity-80">{s.desc}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
