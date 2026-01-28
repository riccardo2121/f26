export interface Salon {
  name: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  booking: string;
  maps: string;
  instagram: string;
  hours: string;
  privacy: string;
}

export interface Service {
  tag: string;
  title: string;
  desc: string;
}

export type PriceItem = [string, string];

export interface Review {
  name: string;
  text: string;
  stars: number;
}

export interface TeamMember {
  name: string;
  role: string;
  text: string;
}

export const salon: Salon = {
  name: "I Giarratano Parrucchieri",
  city: "Sant'Ambrogio di Torino",
  address: "Corso Moncenisio 56/A, 10057",
  phone: "011 939319",
  whatsapp: "https://wa.me/39011939319",
  booking: "/contatti",
  maps: "https://www.google.com/maps/search/?api=1&query=I+Giarratano+Parrucchieri+Sant+Ambrogio+Torino",
  instagram: "https://www.instagram.com/igiarratanoparrucchieri?igsh=NXVqMGt3eXM1eTI5",
  hours: "Mar-Mer: 09:00–12:30, 14:30–18:30\nGio: 09:00–18:30\nVen-Sab: 08:30–18:30\nDom-Lun: Chiuso",
  privacy: "/privacy",
};

export const services: Service[] = [
  { tag: "Donna", title: "Taglio Sartoriale & Styling", desc: "Tagli personalizzati che valorizzano il tuo viso. Piega e finish per un look perfetto." },
  { tag: "Color", title: "Colorazioni & Schiariture D'Autore", desc: "Dalle tinte organiche al Balayage. Tecniche moderne per colori luminosi e naturali." },
  { tag: "Care", title: "Rituali di Benessere & Cura", desc: "Ricostruzione, idratazione e cura della cute. Il benessere dei tuoi capelli al primo posto." },
  { tag: "Uomo", title: "Barber & Grooming Uomo", desc: "Stile classico o moderno. Precisione e cura dei dettagli per il look maschile." },
  { tag: "Sposa", title: "Sposa & Grandi Eventi", desc: "Il look perfetto per il tuo giorno speciale. Consulenza e prove incluse." },
  { tag: "Prodotti", title: "Home Care & Prodotti", desc: "I migliori prodotti professionali per curare i tuoi capelli anche a casa." },
];

export const pricesWoman: PriceItem[] = [
  ["Piega", "€[XX]"],
  ["Taglio + Piega", "€[XX]"],
  ["Colore", "€[XX]"],
  ["Balayage", "€[XX]"],
];

export const pricesMen: PriceItem[] = [
  ["Taglio", "€[XX]"],
  ["Barba / Rifinitura", "€[XX]"],
  ["Taglio + Barba", "€[XX]"],
  ["Trattamento cute", "€[XX]"],
];

export const gallery: string[] = [
  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export const reviews: Review[] = [
  { name: "Maria Simonetta", text: "Oggi per la prima volta mi sono recata in questo centro. Sono stata accolta in maniera professionale ma allo stesso tempo in maniera molto dolce.", stars: 5 },
  { name: "Mariateresa Pedicini", text: "Ottima esperienza. Il personale è accogliente e gentilissimo, sono attenti ai dettagli e c'è estrema professionalità nel taglio.", stars: 5 },
  { name: "Chiara Gonnon", text: "Non posso che fare solo complimenti a questo salone. Persone fantastiche che ti coccolano da quando metti piede all'interno fino a quando esci.", stars: 5 },
  { name: "Ginevra", text: "Super soddisfatta! Mi sono trovata benissimo e grazie alla loro professionalità hanno realizzato esattamente quello che desideravo.", stars: 5 },
  { name: "Simone Borrini", text: "Che dire di Giarratano.. i migliori parrucchieri della Valle.", stars: 5 },
  { name: "Fabrizio A", text: "Gentilezza e professionalità... con competenza sanno trovare la giusta soluzione, per realizzare le richieste del cliente contribuendo con buoni consigli.", stars: 5 },
];

export const team: TeamMember[] = [
  { name: "Gianni Giarratano", role: "Hair Stylist", text: "Esperienza pluriennale e attenzione ai dettagli. Specialista nel taglio maschile e femminile." },
  { name: "Marianna Giarratano", role: "Technical Director", text: "Maestra del colore e della cura del capello. Crea sfumature uniche per ogni cliente." },
  { name: "Mimma", role: "Senior Stylist", text: "Professionalità e cortesia. Esperta nel comprendere e realizzare i desideri di ogni cliente." },
];
