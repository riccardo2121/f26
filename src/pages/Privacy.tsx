import { useEffect } from "react";
import { salon } from "../content";

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="px-4 pt-28 md:pt-40 pb-24 bg-[var(--paper)] text-[var(--ink)]">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">Privacy Policy</h1>
        <p className="opacity-70 text-lg mb-10">
          Questa informativa descrive come raccogliamo e trattiamo i dati personali in conformità al Regolamento (UE) 2016/679
          (GDPR). Il sito è una vetrina informativa del salone e non effettua vendite o pagamenti online.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-serif mb-3">Titolare del trattamento</h2>
            <div className="space-y-2 opacity-80">
              <p>Nome: {salon.name} (personalizzabile)</p>
              <p>Indirizzo: {salon.address} (personalizzabile)</p>
              <p>P.IVA: ________ (personalizzabile)</p>
              <p>Email: ________ (personalizzabile)</p>
              <p>Telefono: {salon.phone} (personalizzabile)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Tipi di dati raccolti</h2>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>Dati di contatto forniti volontariamente: nome, telefono, email.</li>
              <li>Dati tecnici di navigazione: indirizzo IP, dispositivo, browser, pagine visitate.</li>
              <li>Eventuali messaggi inviati via telefono/WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Finalità del trattamento</h2>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>Rispondere a richieste di informazioni o prenotazioni.</li>
              <li>Gestire comunicazioni operative e di servizio.</li>
              <li>Migliorare l’esperienza utente e la qualità del sito.</li>
            </ul>
            <p className="mt-3 opacity-80">Base giuridica: consenso dell’utente e legittimo interesse del titolare.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Modalità di conservazione</h2>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>I dati di contatto sono conservati in sistemi sicuri e accessibili al solo personale autorizzato.</li>
              <li>Tempo di conservazione: massimo 24 mesi dal contatto, salvo necessità operative o legali.</li>
              <li>Al termine, i dati vengono cancellati o anonimizzati.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Comunicazione a terzi</h2>
            <p className="opacity-80">
              I dati non vengono ceduti a terzi per finalità di marketing. Potrebbero essere trattati da fornitori
              di servizi tecnici (hosting, strumenti di messaggistica) che agiscono come responsabili del trattamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Diritti dell’utente</h2>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>Accesso ai dati, rettifica, cancellazione.</li>
              <li>Limitazione o opposizione al trattamento.</li>
              <li>Portabilità dei dati.</li>
              <li>Revoca del consenso in qualsiasi momento.</li>
            </ul>
            <p className="mt-3 opacity-80">
              Per esercitare i diritti, contatta il titolare via email o telefono. Hai diritto a reclamo presso
              il Garante per la Protezione dei Dati Personali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Trasferimenti extra UE</h2>
            <p className="opacity-80">
              Il titolare, per quanto possibile, utilizza servizi con data center nell’UE. Eventuali trasferimenti
              verso paesi extra UE avvengono nel rispetto del GDPR, con garanzie adeguate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Cookie e strumenti di misurazione</h2>
            <p className="opacity-80">
              Il sito utilizza solo cookie tecnici essenziali. Eventuali statistiche di utilizzo sono configurate in modo
              rispettoso della privacy. Non vengono tracciati comportamenti per finalità di marketing senza consenso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-3">Aggiornamenti</h2>
            <p className="opacity-80">
              Questa informativa può essere aggiornata. Le modifiche rilevanti saranno pubblicate su questa pagina.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};
