import { useEffect } from "react";
import { salon } from "../content";

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="px-4 pt-28 md:pt-40 pb-24 bg-[var(--paper)] text-[var(--ink)]">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Termini e Condizioni</h1>
        <p className="opacity-70 text-lg mb-10">
          Questi termini regolano l’uso del sito di {salon.name}. Il sito è una vetrina informativa del salone.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-serif mb-3">Natura informativa del sito</h2>
            <p className="opacity-80">
              Il sito presenta servizi, immagini e informazioni del salone. Non è un e-commerce e non consente
              acquisti o pagamenti online. Per prenotazioni o richieste, usa i contatti indicati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Prezzi indicativi</h2>
            <p className="opacity-80">
              Eventuali prezzi indicati hanno valore orientativo e possono variare in base a consulenza, prodotti
              e tempi necessari. Il prezzo definitivo viene comunicato in salone prima del trattamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Prenotazione e cancellazione</h2>
            <p className="opacity-80">
              La prenotazione avviene offline tramite telefono o WhatsApp. Ti chiediamo di avvisare il salone in
              caso di impossibilità a presentarti, preferibilmente con almeno 24 ore di anticipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Limitazione di responsabilità</h2>
            <p className="opacity-80">
              Il risultato dei trattamenti dipende dalla condizione dei capelli e da vari fattori tecnici. Il
              salone opera con cura e professionalità, ma non può garantire un risultato identico alle immagini di
              riferimento. Eventuali indicazioni pubblicate sul sito sono generiche e non sostituiscono la
              consulenza personalizzata in salone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Uso del sito</h2>
            <p className="opacity-80">
              È vietato utilizzare il sito per scopi illeciti o tentare di compromettere sicurezza e funzionalità.
              I contenuti (testi, immagini, marchi) sono di proprietà del salone o concessi in uso; non è
              consentita la copia non autorizzata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Contatti</h2>
            <div className="space-y-2 opacity-80">
              <p>Telefono: {salon.phone}</p>
              <p>Email: ________</p>
              <p>WhatsApp: {salon.whatsapp}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Aggiornamenti</h2>
            <p className="opacity-80">
              I presenti termini possono essere aggiornati. Le modifiche rilevanti saranno pubblicate su questa
              pagina.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};
