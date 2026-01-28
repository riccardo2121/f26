import type { Metadata } from "next";
import { salon } from "@/content";

export const metadata: Metadata = {
  title: "Contatti – I Giarratano Parrucchieri",
  description: "Indirizzo, orari e contatti. Prenota su WhatsApp o chiama.",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <h1 className="text-4xl font-serif font-medium leading-tight">Contatti</h1>
      <div className="mt-6 space-y-4">
        <p className="opacity-80">Indirizzo: {salon.address}</p>
        <p className="opacity-80">Telefono: {salon.phone}</p>
        <p className="opacity-80">Orari: {salon.hours}</p>
      </div>
      <div className="mt-8 flex gap-4">
        <a href={salon.maps} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-black text-sm uppercase tracking-widest">Apri su Maps</a>
        <a href={salon.whatsapp} className="px-6 py-3 rounded-full bg-black text-white text-sm uppercase tracking-widest">WhatsApp</a>
        <a href={`tel:${salon.phone}`} className="px-6 py-3 rounded-full border border-black text-sm uppercase tracking-widest">Chiama</a>
      </div>
    </main>
  );
}
