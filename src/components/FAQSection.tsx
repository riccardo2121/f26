import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Dove si trova il parrucchiere I Giarratano a Sant'Ambrogio di Torino?",
    answer: "I Giarratano Parrucchieri si trova in Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino (TO), nel cuore della Valle di Susa. Facilmente raggiungibile in auto con parcheggio nelle vicinanze."
  },
  {
    question: "Quali sono gli orari di apertura del salone?",
    answer: "Siamo aperti dal Martedì al Sabato: Martedì e Mercoledì 9:00-12:30 e 14:30-18:30, Giovedì 9:00-18:30, Venerdì e Sabato 8:30-18:30. Domenica e Lunedì chiusi."
  },
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Puoi prenotare chiamandoci al numero 011 939319, scrivendoci su WhatsApp cliccando sul pulsante verde sul sito, o passando direttamente in salone. Per le spose consigliamo di prenotare con almeno 2 mesi di anticipo."
  },
  {
    question: "Quanto costa un taglio capelli da I Giarratano?",
    answer: "Il taglio donna con piega parte da 35€, il taglio uomo da 18€. Il balayage parte da 80€ mentre la colorazione da 40€. Prezzi indicativi, possono variare in base alla lunghezza e alle condizioni dei capelli."
  },
  {
    question: "Fate acconciature per matrimoni?",
    answer: "Sì, siamo specializzati in acconciature sposa nella zona di Sant'Ambrogio e Torino. Offriamo consulenza personalizzata, prove acconciatura e assistenza il giorno del matrimonio. Gli appuntamenti sono limitati per garantire la massima attenzione."
  },
  {
    question: "Che prodotti utilizzate per i trattamenti?",
    answer: "Utilizziamo esclusivamente prodotti professionali di alta qualità, tra cui Wella Professionals per la colorazione. Per i trattamenti di ricostruzione e idratazione selezioniamo i migliori brand del settore."
  },
  {
    question: "Quanto tempo prima devo prenotare per un balayage?",
    answer: "Per un servizio come il balayage che richiede 2-3 ore, consigliamo di prenotare almeno 1 settimana prima. Per il sabato e i giorni festivi, è preferibile prenotare con 2 settimane di anticipo."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 px-4 bg-[var(--surface)] border-y border-[var(--line)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
            Domande Frequenti
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
            Hai qualche <span className="italic text-[var(--accent)]">domanda</span>?
          </h2>
        </div>

        {/* FAQ List with Schema.org markup */}
        <div itemScope itemType="https://schema.org/FAQPage" className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              className={`border border-[var(--line)] rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-[var(--paper)] shadow-lg' : 'bg-[var(--surface)]'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--paper)] transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 
                  itemProp="name"
                  className="text-lg font-medium pr-4"
                >
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  className={`shrink-0 text-[var(--accent)] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p 
                    itemProp="text"
                    className="text-base opacity-80 leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-60 mb-4">
            Non hai trovato la risposta che cercavi?
          </p>
          <a 
            href="/contatti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:brightness-110 transition"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
