import { salon } from "../content";
import { Button } from "./UI";
import { MessageCircle, ClipboardCheck, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="come-funziona" className="reveal relative mx-auto max-w-[1400px] px-4 py-16 md:py-24">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-[12px] font-semibold text-[var(--accent)] mb-2">Prenota in 30 secondi</p>
        <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight">In 3 step semplici</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--paper)]">
          <div className="flex items-center gap-3 mb-3">
            <MessageCircle size={22} className="text-[var(--accent)]" />
            <div className="font-semibold">Scrivici su WhatsApp</div>
          </div>
          <p className="opacity-80">Raccontaci l'obiettivo. Ti rispondiamo il prima possibile.</p>
        </div>
        <div className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--paper)]">
          <div className="flex items-center gap-3 mb-3">
            <ClipboardCheck size={22} className="text-[var(--accent)]" />
            <div className="font-semibold">Consulenza e costo</div>
          </div>
          <p className="opacity-80">Ti proponiamo tecnica, tempi e costo indicativo.</p>
        </div>
        <div className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--paper)]">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle size={22} className="text-[var(--accent)]" />
            <div className="font-semibold">Appuntamento</div>
          </div>
          <p className="opacity-80">Vieni in salone: prodotti professionali e risultato curato.</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={salon.whatsapp} variant="accent" className="px-8 py-4">Prenota su WhatsApp</Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
    </section>
  );
}
