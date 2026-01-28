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
  rating: 4.6
};

export const services: Service[] = [
  { tag: "Donna", title: "Taglio Sartoriale & Styling", desc: "Tagli che esaltano la tua bellezza naturale. Analisi del viso, consulenza personalizzata e finish impeccabile per un look che ti rappresenta davvero." },
  { tag: "Colore", title: "Colorazioni & Schiariture D'Autore", desc: "Dal balayage naturale alle tinte più audaci. Tecniche innovative, prodotti premium e una palette infinita per dare vita al colore dei tuoi sogni." },
  { tag: "Cura", title: "Rituali di Benessere & Rigenerazione", desc: "Trattamenti esclusivi per capelli che splendono di salute. Ricostruzione molecolare, idratazione profonda e rituali personalizzati per una chioma rinata." },
  { tag: "Uomo", title: "Grooming & Styling Maschile", desc: "Precisione artigianale per il gentleman moderno. Tagli classici e contemporanei, barba curata nei minimi dettagli, consigli di styling su misura." },
  { tag: "Sposa", title: "Sposa & Eventi Speciali", desc: "Il tuo momento, la nostra passione. Acconciature da favola, prove meticolose e assistenza il giorno del grande evento per un look da sogno." },
  { tag: "Prodotti", title: "Consulenza Home Care", desc: "Porta la professionalità del salone a casa tua. Prodotti di eccellenza selezionati e routine personalizzate per mantenere i risultati nel tempo." },
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

export const reviews: Review[] = [
  { name: "Maria Simonetta", text: "Oggi per la prima volta mi sono recata in questo centro. Sono stata accolta in maniera professionale ma allo stesso tempo in maniera molto dolce.", stars: 5, source: "Google", date: "2025-05-18", service: "Taglio & Piega" },
  { name: "Mariateresa Pedicini", text: "Ottima esperienza. Il personale è accogliente e gentilissimo, sono attenti ai dettagli e c'è estrema professionalità nel taglio.", stars: 5, source: "Google", date: "2025-04-02", service: "Taglio" },
  { name: "Chiara Gonnon", text: "Non posso che fare solo complimenti a questo salone. Persone fantastiche che ti coccolano da quando metti piede all'interno fino a quando esci.", stars: 5, source: "Google", date: "2025-03-21", service: "Colore" },
  { name: "Ginevra", text: "Super soddisfatta! Mi sono trovata benissimo e grazie alla loro professionalità hanno realizzato esattamente quello che desideravo.", stars: 5, source: "Google", date: "2025-02-11", service: "Balayage" },
  { name: "Simone Borrini", text: "Che dire di Giarratano.. i migliori parrucchieri della Valle.", stars: 5, source: "Google", date: "2025-01-07", service: "Taglio Uomo" },
  { name: "Fabrizio A", text: "Gentilezza e professionalità... con competenza sanno trovare la giusta soluzione, per realizzare le richieste del cliente contribuendo con buoni consigli.", stars: 5, source: "Google", date: "2024-12-19", service: "Consulenza" },
];

export const team: TeamMember[] = [
  { name: "Caterina", role: "Accoglienza & Appuntamenti", text: "Il primo sorriso che incontri quando entri. Caterina gestisce gli appuntamenti con precisione e professionalità, trovando sempre la soluzione migliore per i tuoi impegni." },
  { name: "Marianna Giarratano", role: "Directrice Creativa", text: "Visionaria del colore e alchimista dei trattamenti. Marianna ha il dono di leggere la personalità di ogni cliente e tradurla in sfumature che illuminano il volto." },
  { name: "Mimma", role: "Senior Stylist & Consulente", text: "Mimma non ascolta solo i tuoi desideri, li anticipa. Con sensibilità artistica e tecnica raffinata, crea esperienze personalizzate che fanno sentire ogni cliente unico." },
];
