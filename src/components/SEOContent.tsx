export const SEOContent = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center border-t border-[var(--line)]">
      <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[var(--ink)]">
        Parrucchiere di fiducia a Sant'Ambrogio di Torino
      </h2>
      <div className="space-y-4 text-base opacity-80 leading-relaxed">
        <p>
          Dal 2003, <strong>I Giarratano Parrucchieri</strong> è il salone di riferimento per chi cerca un{' '}
          <strong>parrucchiere a Sant'Ambrogio di Torino</strong> e nella{' '}
          <strong>Valle di Susa</strong>. Specializzati in{' '}
          <strong>taglio capelli</strong> personalizzato, <strong>colorazioni</strong> di alta qualità,{' '}
          <strong>balayage</strong> naturali e <strong>acconciature sposa</strong>.
        </p>
        <p>
          Il nostro team certificato Wella ti aspetta in <strong>Corso Moncenisio 56/A</strong>, 
          nel centro storico di Sant'Ambrogio di Torino. Offriamo servizi professionali per donna e uomo, 
          con particolare attenzione alle tendenze moda capelli e alle tecniche di colorazione più innovative.
        </p>
        <p>
          Che tu stia cercando un <strong>barbiere a Sant'Ambrogio</strong> per un taglio maschile di precisione, 
          o una <strong>colorazione capelli senza ammoniaca</strong> per un risultato naturale e luminoso, 
          il nostro salone è la scelta giusta. Serviamo anche i comuni limitrofi: Avigliana, Condove, 
          Bussoleno e tutta la zona della Valle di Susa.
        </p>
        <p>
          Prenota ora al <strong>011 939319</strong> o via WhatsApp per un'esperienza di bellezza unica. 
          Il tuo nuovo look ti aspetta da I Giarratano Parrucchieri!
        </p>
      </div>
      
      {/* NAP Footer per Local SEO */}
      <div className="mt-10 pt-8 border-t border-[var(--line)]" itemScope itemType="https://schema.org/HairSalon">
        <meta itemProp="name" content="I Giarratano Parrucchieri" />
        <meta itemProp="telephone" content="+39011939319" />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content="Corso Moncenisio 56/A" />
          <meta itemProp="addressLocality" content="Sant'Ambrogio di Torino" />
          <meta itemProp="addressRegion" content="TO" />
          <meta itemProp="postalCode" content="10057" />
          <meta itemProp="addressCountry" content="IT" />
        </div>
        <p className="text-sm opacity-60">
          <strong>I Giarratano Parrucchieri</strong> · Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino (TO) · Tel: 011 939319
        </p>
      </div>
    </section>
  );
};

export default SEOContent;
