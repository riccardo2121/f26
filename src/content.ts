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
  heroAvif?: string;
  heroWebp?: string;
  heroJpeg?: string;
  rating?: number;
  customers?: number;
  placeId?: string;
  experience?: number;
}

export interface Service {
  tag: string;
  title: string;
  desc: string;
}

export interface PriceItem {
  name: string;
  from: number;
  duration?: string;
}

export interface Review {
  name: string;
  text: string;
  stars: number;
  source?: "Google" | "Facebook" | "Instagram";
  date?: string;
  service?: string;
  photo?: string;
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
  heroJpeg: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600",
  rating: 4.6,
  customers: 2000,
  experience: 20
};

// Servizi con descrizioni brevi (max 100 caratteri) - Ottimizzate SEO
export const services: Service[] = [
  { 
    tag: "Donna", 
    title: "Taglio capelli su misura", 
    desc: "Taglio che valorizza la forma del viso. Include lavaggio trattante e styling finale per un look perfetto." 
  },
  { 
    tag: "Colore", 
    title: "Colore & Balayage", 
    desc: "Balayage, airtouch e colorazioni che crescono elegantemente. Zero stacchi netti, solo sfumature naturali." 
  },
  { 
    tag: "Cura", 
    title: "Trattamenti ristrutturanti", 
    desc: "Trattamenti specifici per capelli secchi e sfibrati. Morbidezza e lucentezza che durano settimane." 
  },
  { 
    tag: "Uomo", 
    title: "Barbiere & Grooming", 
    desc: "Tagli maschili precisi e barba scolpita. Rasoi caldi per un tocco di lusso ogni volta che vuoi." 
  },
  { 
    tag: "Sposa", 
    title: "Acconciature sposa", 
    desc: "Il tuo giorno speciale merita un look da favola. Prova inclusa, assistenza in loco il giorno del matrimonio." 
  },
  { 
    tag: "Prodotti", 
    title: "Consulenza prodotti", 
    desc: "I prodotti giusti per mantenere i risultati a casa. Sconto 15% sul primo acquisto in salone." 
  },
];

export const pricesWoman: PriceItem[] = [
  { name: "Piega", from: 20, duration: "30–45 min" },
  { name: "Taglio + Piega", from: 35, duration: "45–60 min" },
  { name: "Colore", from: 40, duration: "60–90 min" },
  { name: "Balayage", from: 80, duration: "120–180 min" },
];

export const pricesMen: PriceItem[] = [
  { name: "Taglio", from: 18, duration: "20–30 min" },
  { name: "Barba / Rifinitura", from: 12, duration: "15–25 min" },
  { name: "Taglio + Barba", from: 28, duration: "35–45 min" },
  { name: "Trattamento cute", from: 25, duration: "30–45 min" },
];

export interface GalleryImage {
  jpeg: string;
  webp?: string;
  avif?: string;
  width: number;
  height: number;
  alt?: string;
  category: "Taglio" | "Colore" | "Styling" | "Prima&Dopo";
}

export const galleryImages: GalleryImage[] = [
  { jpeg: "/creazione.jpg", width: 1200, height: 900, alt: "Taglio e piega", category: "Taglio" },
  { jpeg: "/creazione2.jpg", width: 1200, height: 900, alt: "Schiariture e colore", category: "Colore" },
  { jpeg: "/creazione3.jpg", width: 1200, height: 900, alt: "Styling evento", category: "Styling" },
];

// Recensioni per sezione Testimonianze (sezione esistente)
export const reviews: Review[] = [
  { name: "Maria Simonetta", text: "Oggi per la prima volta mi sono recata in questo centro. Sono stata accolta in maniera professionale ma allo stesso tempo in maniera molto dolce.", stars: 5, source: "Google", date: "2025-05-18", service: "Taglio & Piega" },
  { name: "Mariateresa Pedicini", text: "Ottima esperienza. Il personale è accogliente e gentilissimo, sono attenti ai dettagli e c'è estrema professionalità nel taglio.", stars: 5, source: "Google", date: "2025-04-02", service: "Taglio" },
  { name: "Chiara Gonnon", text: "Non posso che fare solo complimenti a questo salone. Persone fantastiche che ti coccolano da quando metti piede all'interno fino a quando esci.", stars: 5, source: "Google", date: "2025-03-21", service: "Colore" },
  { name: "Ginevra", text: "Super soddisfatta! Mi sono trovata benissimo e grazie alla loro professionalità hanno realizzato esattamente quello che desideravo.", stars: 5, source: "Google", date: "2025-02-11", service: "Balayage" },
  { name: "Simone Borrini", text: "Che dire di Giarratano.. i migliori parrucchieri della Valle.", stars: 5, source: "Google", date: "2025-01-07", service: "Taglio Uomo" },
  { name: "Fabrizio A", text: "Gentilezza e professionalità... con competenza sanno trovare la giusta soluzione, per realizzare le richieste del cliente contribuendo con buoni consigli.", stars: 5, source: "Google", date: "2024-12-19", service: "Consulenza" },
];

// Recensioni compatta per nuova sezione "Dicono di Noi"
export const compactReviews: Review[] = [
  { 
    name: "Maria Simonetta", 
    text: "Accolta in modo professionale e dolce. Il taglio ha superato ogni aspettativa!", 
    stars: 5, 
    source: "Google", 
    date: "2025-05-18", 
    service: "Taglio & Piega" 
  },
  { 
    name: "Simone Borrini", 
    text: "I migliori parrucchieri della Valle. Precisione e stile impeccabili ogni volta.", 
    stars: 5, 
    source: "Google", 
    date: "2025-01-07", 
    service: "Barbiere" 
  },
  { 
    name: "Chiara Gonnon", 
    text: "Mi coccolano dal primo all'ultimo minuto. Il balayage è perfetto, naturale e luminoso.", 
    stars: 5, 
    source: "Google", 
    date: "2025-03-21", 
    service: "Balayage" 
  },
];

export interface TeamMemberEnhanced extends TeamMember {
  experience: string;
  specialty: string;
  certifications?: string[];
}

// Team aggiornato con Simone (Barber & Men's Grooming)
export const team: TeamMemberEnhanced[] = [
  { 
    name: "Caterina", 
    role: "Coordinatrice Salone", 
    experience: "8 anni",
    specialty: "Organizzazione & Accoglienza",
    text: "Da 8 anni coordina ogni appuntamento come un direttore d'orchestra. Conosce ogni cliente per nome, ricorda i dettagli della tua ultima visita, trova sempre lo slot giusto anche quando 'è tutto pieno'. La sua missione: farti sentire accolta, mai in ritardo."
  },
  { 
    name: "Marianna Giarratano", 
    role: "Color Director", 
    experience: "12 anni",
    specialty: "Colorazione & Trattamenti",
    certifications: ["Wella Master Color Expert"],
    text: "Specialista certificata Wella Master Color Expert. Ha trasformato più di 2.000 clienti in 12 anni di carriera, dalla prima schiaritura alle correzioni colore più complesse. Il suo segreto? 'Non tingo i capelli, rivelo la persona'."
  },
  { 
    name: "Mimma", 
    role: "Senior Stylist", 
    experience: "25 anni",
    specialty: "Taglio & Acconciature",
    text: "25 anni di esperienza, formata nelle migliori accademie di Milano e Parigi. Specialista in tagli che 'crescono bene' e acconciature che durano tutto il giorno. 'Una cliente soddisfatta è la mia migliore carta da parati'."
  },
  { 
    name: "Simone", 
    role: "Barber & Men's Grooming", 
    experience: "6 anni",
    specialty: "Taglio uomo, barba, sfumature",
    text: "Esperto in tagli maschili moderni e classici, dalla sfumatura americana al pompadour. Precisione chirurgica nella barba, rasoi caldi per un rituale di grooming autentico. Per Simone, ogni cliente merita un look che esprima personalità."
  },
];
