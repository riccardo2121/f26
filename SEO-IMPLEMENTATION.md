# SEO Implementation Guide - I Giarratano Parrucchieri

## Meta Tags Ottimizzati (index.html)

```html
<title>Parrucchiere Sant'Ambrogio di Torino | I Giarratano – Taglio, Colore, Balayage</title>
<meta name="description" content="I Giarratano Parrucchieri a Sant'Ambrogio di Torino. Taglio, colore, balayage e trattamenti per capelli. 20+ anni di esperienza. Prenota su WhatsApp 011 939319. Corso Moncenisio 56/A, 10057">
<meta name="keywords" content="parrucchiere sant'ambrogio di torino, taglio capelli, colore capelli, balayage, piega, barbiere, hair salon torino, acconciature sposa">
```

## Structured Data (Schema.org)

### HairSalon Schema
```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "I Giarratano Parrucchieri",
  "description": "Parrucchiere a Sant'Ambrogio di Torino specializzato in taglio, colore, balayage e trattamenti per capelli. 20+ anni di esperienza.",
  "url": "https://www.igiarratanoparrucchieri.it",
  "telephone": "+39011939319",
  "email": "info@igiarratanoparrucchieri.it",
  "image": "https://www.igiarratanoparrucchieri.it/og-image.jpg",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Corso Moncenisio 56/A",
    "addressLocality": "Sant'Ambrogio di Torino",
    "addressRegion": "TO",
    "postalCode": "10057",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.0961",
    "longitude": "7.3669"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday"],
      "opens": "09:00",
      "closes": "12:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday"],
      "opens": "14:30",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "09:00",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "08:30",
      "closes": "18:30"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "120"
  },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=I+Giarratano+Parrucchieri+Sant+Ambrogio+Torino",
  "sameAs": [
    "https://www.instagram.com/igiarratanoparrucchieri"
  ],
  "paymentAccepted": "Contanti, Carta di credito, Bancomat",
  "currenciesAccepted": "EUR",
  "areaServed": {
    "@type": "City",
    "name": "Sant'Ambrogio di Torino"
  },
  "serviceType": ["Taglio capelli", "Colore", "Balayage", "Piega", "Barberia", "Trattamenti capelli"]
}
```

### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto costa un taglio di capelli a Sant'Ambrogio di Torino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da I Giarratano Parrucchieri il taglio donna + piega parte da €35. Il taglio uomo parte da €18. Ogni servizio include consulenza personalizzata e prodotti professionali."
      }
    },
    {
      "@type": "Question",
      "name": "Come posso prenotare un appuntamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puoi prenotare facilmente tramite WhatsApp al 011 939319, telefonando direttamente o passando in salone in Corso Moncenisio 56/A. Rispondiamo sempre entro 30 minuti!"
      }
    },
    {
      "@type": "Question",
      "name": "Che tecniche di colore usate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Siamo specializzati in balayage, airtouch, colore tradizionale e meches. La nostra Color Director Marianna Giarratano è certificata Wella Master Color Expert."
      }
    }
  ]
}
```

## Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/chi-siamo</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/contatti</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/recensioni</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## Robots.txt
```
User-agent: *
Allow: /

Sitemap: https://www.igiarratanoparrucchieri.it/sitemap.xml
```

## Keyword Mapping

| Pagina | Keyword Primaria | Keyword Secondarie |
|--------|------------------|-------------------|
| Home | parrucchiere sant'ambrogio di torino | taglio capelli, colore, balayage |
| Servizi (futuro) | taglio donna sant'ambrogio | taglio viso ovale, styling |
| Servizi (futuro) | balayage torino | airtouch, colore naturale |
| Servizi (futuro) | barbiere sant'ambrogio | taglio uomo, barba, sfumature |
| Servizi (futuro) | acconciatura sposa torino | matrimonio, wedding hair |

## Local SEO Checklist

- [ ] Google Business Profile ottimizzato
- [ ] NAP consistency su tutte le directory
- [ ] Pagine Gialle listing
- [ ] TripAdvisor listing
- [ ] Yelp listing
- [ ] Citazioni locali (almeno 10)

## Prossimi Passi

1. Aggiungere pagine dedicate per servizi (/servizi/taglio-donna, /servizi/balayage, etc.)
2. Implementare blog con articoli SEO ("Tagli capelli 2025", "Come curare il balayage")
3. Sistema di recensioni automatizzato post-visita
4. Link building con blog matrimonio Torino
