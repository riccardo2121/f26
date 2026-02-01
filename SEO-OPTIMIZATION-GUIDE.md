# 🎯 GUIDA SEO COMPLETA - I Giarratano Parrucchieri

## Executive Summary

Questa guida fornisce tutte le ottimizzazioni SEO necessarie per posizionare "I Giarratano Parrucchieri" ai vertici delle ricerche locali nel settore beauty/wellness a Sant'Ambrogio di Torino e zona Valle di Susa.

---

## 📊 KEYWORD STRATEGY

### Keyword Target Principali
| Keyword | Volume Stimato | Difficoltà | Priorità |
|---------|-----------------|------------|----------|
| parrucchiere sant'ambrogio di torino | Alto | Media | 1 |
| taglio capelli sant'ambrogio | Medio | Bassa | 1 |
| balayage torino | Alto | Alta | 2 |
| barbiere sant'ambrogio | Medio | Bassa | 1 |
| acconciatura sposa torino | Medio | Media | 2 |
| colorazione capelli valle di susa | Medio | Bassa | 2 |
| parrucchiere valle di susa | Medio | Bassa | 2 |
| taglio uomo sant'ambrogio | Basso | Bassa | 3 |
| piega capelli torino | Alto | Alta | 3 |

### Keyword Long-Tail
- "miglior parrucchiere sant'ambrogio di torino"
- "parrucchiere specializzato balayage valle susa"
- "acconciatura sposa sant'ambrogio torino"
- "taglio capelli donna valle di susa"
- "colore capelli senza ammoniaca torino"
- "barbiere uomo sant'ambrogio"
- "trattamenti cheratina capelli torino"

---

## 1️⃣ STRUCTURED DATA AVANZATA (Schema.org)

### Schema Principale - HairSalon Completo

```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.igiarratanoparrucchieri.it/#business",
  "name": "I Giarratano Parrucchieri",
  "alternateName": "Parrucchiere Giarratano Sant'Ambrogio",
  "description": "Parrucchiere a Sant'Ambrogio di Torino specializzato in taglio, colore, balayage, trattamenti per capelli e acconciature sposa. 20+ anni di esperienza nella Valle di Susa.",
  "url": "https://www.igiarratanoparrucchieri.it",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.igiarratanoparrucchieri.it/logo.png",
    "width": 512,
    "height": 512
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://www.igiarratanoparrucchieri.it/og-image.jpg",
    "width": 1200,
    "height": 630
  },
  "telephone": "+39011939319",
  "email": "info@igiarratanoparrucchieri.it",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Contanti, Carta di credito, Bancomat",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Corso Moncenisio 56/A",
    "addressLocality": "Sant'Ambrogio di Torino",
    "addressRegion": "TO",
    "postalCode": "10057",
    "addressCountry": "IT",
    "addressNeighborhood": "Centro storico"
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
      "dayOfWeek": "Friday",
      "opens": "08:30",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:30",
      "closes": "18:30"
    }
  ],
  
  "areaServed": [
    {
      "@type": "City",
      "name": "Sant'Ambrogio di Torino",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Città Metropolitana di Torino"
      }
    },
    {
      "@type": "City",
      "name": "Avigliana"
    },
    {
      "@type": "City",
      "name": "Condove"
    },
    {
      "@type": "City",
      "name": "Susa"
    },
    {
      "@type": "City",
      "name": "Bussoleno"
    }
  ],
  
  "hasMap": "https://www.google.com/maps/search/?api=1&query=I+Giarratano+Parrucchieri+Sant+Ambrogio+Torino",
  
  "sameAs": [
    "https://www.instagram.com/igiarratanoparrucchieri",
    "https://www.facebook.com/igiarratanoparrucchieri",
    "https://g.page/r/XXXXXXX"
  ],
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  "foundingDate": "2003",
  "founders": [
    {
      "@type": "Person",
      "name": "Gianni Giarratano"
    },
    {
      "@type": "Person",
      "name": "Marianna Giarratano"
    }
  ],
  
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "3"
  },
  
  "knowsLanguage": ["it", "en"],
  
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Parrucchiere",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Taglio Capelli Donna",
          "description": "Taglio personalizzato con analisi viso, lavaggio trattante e styling"
        },
        "price": "35",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Colore Capelli",
          "description": "Tinte organiche e colorazioni personalizzate"
        },
        "price": "40",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Balayage",
          "description": "Schiariture naturali con tecnica balayage francese"
        },
        "price": "80",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Taglio Uomo",
          "description": "Taglio maschile con rifinitura barba"
        },
        "price": "18",
        "priceCurrency": "EUR"
      }
    ]
  }
}
```

### Schema Service per Ogni Servizio

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Taglio Capelli Donna",
  "provider": {
    "@type": "HairSalon",
    "name": "I Giarratano Parrucchieri",
    "@id": "https://www.igiarratanoparrucchieri.it/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Sant'Ambrogio di Torino"
  },
  "description": "Taglio personalizzato che valorizza la forma del viso. Include consulenza, lavaggio trattante e styling finale.",
  "offers": {
    "@type": "Offer",
    "price": "35",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "45"
  }
}
```

### Schema Review Collection

```json
{
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.igiarratanoparrucchieri.it/#business",
  "name": "I Giarratano Parrucchieri",
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Simonetta"
      },
      "datePublished": "2025-05-18",
      "reviewBody": "Oggi per la prima volta mi sono recata in questo centro. Sono stata accolta in maniera professionale ma allo stesso tempo in maniera molto dolce.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "HairSalon",
        "name": "I Giarratano Parrucchieri"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mariateresa Pedicini"
      },
      "datePublished": "2025-04-02",
      "reviewBody": "Ottima esperienza. Il personale è accogliente e gentilissimo, sono attenti ai dettagli e c'è estrema professionalità nel taglio.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
```

### Schema FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Dove si trova il parrucchiere I Giarratano a Sant'Ambrogio di Torino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I Giarratano Parrucchieri si trova in Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino (TO), nel cuore della Valle di Susa. Facilmente raggiungibile in auto con parcheggio nelle vicinanze."
      }
    },
    {
      "@type": "Question",
      "name": "Quali sono gli orari di apertura del salone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Siamo aperti dal Martedì al Sabato: Martedì e Mercoledì 9:00-12:30 e 14:30-18:30, Giovedì 9:00-18:30, Venerdì e Sabato 8:30-18:30. Domenica e Lunedì chiusi."
      }
    },
    {
      "@type": "Question",
      "name": "Come posso prenotare un appuntamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puoi prenotare chiamandoci al numero 011 939319, scrivendoci su WhatsApp cliccando sul pulsante verde sul sito, o passando direttamente in salone. Per le spose consigliamo di prenotare con almeno 2 mesi di anticipo."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto costa un taglio capelli da I Giarratano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il taglio donna con piega parte da 35€, il taglio uomo da 18€. Il balayage parte da 80€ mentre la colorazione da 40€. Prezzi indicativi, possono variare in base alla lunghezza e alle condizioni dei capelli."
      }
    },
    {
      "@type": "Question",
      "name": "Fate acconciature per matrimoni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, siamo specializzati in acconciature sposa nella zona di Sant'Ambrogio e Torino. Offriamo consulenza personalizzata, prove acconciatura e assistenza il giorno del matrimonio. Gli appuntamenti sono limitati per garantire la massima attenzione."
      }
    },
    {
      "@type": "Question",
      "name": "Che prodotti utilizzate per i trattamenti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Utilizziamo esclusivamente prodotti professionali di alta qualità, tra cui Wella Professionals per la colorazione. Per i trattamenti di ricostruzione e idratazione selezioniamo i migliori brand del settore."
      }
    }
  ]
}
```

### Schema BreadcrumbList Completo (per ogni pagina)

**Home:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.igiarratanoparrucchieri.it/"
    }
  ]
}
```

**Pagina Chi Siamo:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.igiarratanoparrucchieri.it/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Chi Siamo",
      "item": "https://www.igiarratanoparrucchieri.it/chi-siamo"
    }
  ]
}
```

**Pagina Recensioni:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.igiarratanoparrucchieri.it/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Recensioni",
      "item": "https://www.igiarratanoparrucchieri.it/recensioni"
    }
  ]
}
```

**Pagina Contatti:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.igiarratanoparrucchieri.it/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contatti",
      "item": "https://www.igiarratanoparrucchieri.it/contatti"
    }
  ]
}
```

---

## 2️⃣ META TAGS OTTIMIZZATI

### Homepage (index.html)

```html
<!doctype html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  
  <!-- ===== PRIMARY META TAGS ===== -->
  <title>Parrucchiere Sant'Ambrogio di Torino | I Giarratano</title>
  <meta name="description" content="I Giarratano Parrucchieri a Sant'Ambrogio di Torino. Taglio, colore, balayage e acconciature sposa. 20+ anni di esperienza. Prenota su WhatsApp 011 939319." />
  <meta name="keywords" content="parrucchiere Sant'Ambrogio di Torino, taglio capelli, colore capelli, balayage, acconciatura sposa, barbiere, Valle di Susa" />
  <meta name="author" content="I Giarratano Parrucchieri" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.igiarratanoparrucchieri.it/" />
  
  <!-- Language & Region -->
  <link rel="alternate" hreflang="it-it" href="https://www.igiarratanoparrucchieri.it/" />
  <meta name="geo.region" content="IT-TO" />
  <meta name="geo.placename" content="Sant'Ambrogio di Torino" />
  <meta name="geo.position" content="45.0961;7.3669" />
  <meta name="ICBM" content="45.0961, 7.3669" />
  
  <!-- Mobile & Theme -->
  <meta name="theme-color" content="#B38B59" />
  <meta name="msapplication-TileColor" content="#B38B59" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="I Giarratano" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="apple-touch-icon" href="/logo.png" />
  
  <!-- ===== OPEN GRAPH / FACEBOOK ===== -->
  <meta property="og:type" content="business.business" />
  <meta property="og:url" content="https://www.igiarratanoparrucchieri.it/" />
  <meta property="og:title" content="I Giarratano Parrucchieri | Parrucchiere Sant'Ambrogio di Torino" />
  <meta property="og:description" content="Taglio, colore, balayage e trattamenti per capelli. 20+ anni di esperienza nella Valle di Susa. Prenota ora su WhatsApp!" />
  <meta property="og:image" content="https://www.igiarratanoparrucchieri.it/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="I Giarratano Parrucchieri - Salone a Sant'Ambrogio di Torino" />
  <meta property="og:locale" content="it_IT" />
  <meta property="og:site_name" content="I Giarratano Parrucchieri" />
  
  <!-- Business Contact Data -->
  <meta property="business:contact_data:street_address" content="Corso Moncenisio 56/A" />
  <meta property="business:contact_data:locality" content="Sant'Ambrogio di Torino" />
  <meta property="business:contact_data:region" content="TO" />
  <meta property="business:contact_data:postal_code" content="10057" />
  <meta property="business:contact_data:country_name" content="Italy" />
  <meta property="business:contact_data:phone_number" content="+39011939319" />
  <meta property="business:contact_data:website" content="https://www.igiarratanoparrucchieri.it" />
  
  <!-- Business Hours -->
  <meta property="business:hours:day" content="tuesday" />
  <meta property="business:hours:start" content="09:00" />
  <meta property="business:hours:end" content="12:30" />
  <meta property="business:hours:day" content="tuesday" />
  <meta property="business:hours:start" content="14:30" />
  <meta property="business:hours:end" content="18:30" />
  
  <!-- ===== TWITTER CARDS ===== -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@igiarratanoparrucchieri" />
  <meta name="twitter:creator" content="@igiarratanoparrucchieri" />
  <meta name="twitter:url" content="https://www.igiarratanoparrucchieri.it/" />
  <meta name="twitter:title" content="I Giarratano Parrucchieri | Parrucchiere Sant'Ambrogio di Torino" />
  <meta name="twitter:description" content="Taglio, colore, balayage e trattamenti. 20+ anni di esperienza. Prenota su WhatsApp!" />
  <meta name="twitter:image" content="https://www.igiarratanoparrucchieri.it/og-image.jpg" />
  <meta name="twitter:image:alt" content="I Giarratano Parrucchieri - Salone a Sant'Ambrogio di Torino" />
  
  <!-- ===== PRECONNECT & PRELOAD ===== -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.pexels.com" crossorigin>
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  
  <!-- Preload Critical Resources -->
  <link rel="preload" as="image" href="/hero-image.webp" type="image/webp" fetchpriority="high">
  <link rel="preload" as="font" href="/fonts/playfair-display.woff2" type="font/woff2" crossorigin>
  
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  
  <!-- ===== STRUCTURED DATA ===== -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://www.igiarratanoparrucchieri.it/#business",
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
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.instagram.com/igiarratanoparrucchieri"
    ]
  }
  </script>
</head>
```

### Meta Tags per Pagina "Chi Siamo"

```html
<title>Chi Siamo | I Giarratano Parrucchieri Sant'Ambrogio di Torino</title>
<meta name="description" content="Scopri la storia di I Giarratano Parrucchieri. 20 anni di esperienza, team specializzato in taglio, colore e acconciature. Tradizione artigiana nel cuore della Valle di Susa." />
<link rel="canonical" href="https://www.igiarratanoparrucchieri.it/chi-siamo" />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:url" content="https://www.igiarratanoparrucchieri.it/chi-siamo" />
<meta property="og:title" content="Chi Siamo | I Giarratano Parrucchieri" />
<meta property="og:description" content="20 anni di passione per la bellezza. Conosci il nostro team di professionisti a Sant'Ambrogio di Torino." />
```

### Meta Tags per Pagina "Recensioni"

```html
<title>Recensioni | I Giarratano Parrucchieri - 4.8★ su Google</title>
<meta name="description" content="Leggi le recensioni vere di I Giarratano Parrucchieri. 127 clienti soddisfatti ci hanno valutato 4.8 stelle su Google. Scopri perché siamo i migliori a Sant'Ambrogio." />
<link rel="canonical" href="https://www.igiarratanoparrucchieri.it/recensioni" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.igiarratanoparrucchieri.it/recensioni" />
<meta property="og:title" content="Recensioni | I Giarratano Parrucchieri" />
<meta property="og:description" content="127 recensioni positive su Google. Scopri cosa dicono i nostri clienti di Sant'Ambrogio!" />
```

### Meta Tags per Pagina "Contatti"

```html
<title>Contatti e Prenotazioni | Parrucchiere Sant'Ambrogio di Torino</title>
<meta name="description" content="Prenota il tuo appuntamento da I Giarratano Parrucchieri. Tel: 011 939319, WhatsApp, o vieni in Corso Moncenisio 56/A a Sant'Ambrogio di Torino." />
<link rel="canonical" href="https://www.igiarratanoparrucchieri.it/contatti" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.igiarratanoparrucchieri.it/contatti" />
<meta property="og:title" content="Contatti | I Giarratano Parrucchieri" />
<meta property="og:description" content="Prenota ora! Tel: 011 939319 o WhatsApp. Corso Moncenisio 56/A, Sant'Ambrogio di Torino." />
```

---

## 3️⃣ LOCAL SEO - OTTIMIZZAZIONE COMPLETA

### NAP Consistency (Name, Address, Phone)

| Piattaforma | Nome | Indirizzo | Telefono |
|-------------|------|-----------|----------|
| **Sito Web** | I Giarratano Parrucchieri | Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino TO | 011 939319 |
| **Google Business** | I Giarratano Parrucchieri | Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino TO | +39 011 939319 |
| **Facebook** | I Giarratano Parrucchieri | Corso Moncenisio 56/A, Sant'Ambrogio di Torino | 011 939319 |
| **Instagram** | I Giarratano Parrucchieri | Sant'Ambrogio di Torino | - |
| **Yelp** | I Giarratano Parrucchieri | Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino | 011 939319 |

### Google Business Profile Ottimizzazione

**Categorie Primarie:**
- Parrucchiere
- Salone di bellezza

**Categorie Secondarie:**
- Negozio di prodotti per capelli
- Barber shop
- Salone per acconciature da sposa

**Attributi da attivare:**
- ✅ Wi-Fi gratuito
- ✅ Pagamento con carta
- ✅ Accesso per disabili
- ✅ Parcheggio nelle vicinanze
- ✅ Personale di genere femminile e maschile
- ✅ Su appuntamento (consigliato)
- ✅ Servizi per bambini

**Orari Google Business:**
```
Lunedì: Chiuso
Martedì: 09:00-12:30, 14:30-18:30
Mercoledì: 09:00-12:30, 14:30-18:30
Giovedì: 09:00-18:30
Venerdì: 08:30-18:30
Sabato: 08:30-18:30
Domenica: Chiuso
```

**Descrizione Google Business (max 750 caratteri):**
```
I Giarratano Parrucchieri è il punto di riferimento per la cura dei capelli a Sant'Ambrogio di Torino e nella Valle di Susa dal 2003. 

Specializzati in taglio personalizzato, colorazioni (tinte organiche, balayage, airtouch), trattamenti ricostruzione e idratazione, barberia uomo e acconciature sposa.

Il nostro team di professionisti certificati Wella ti accompagna nella scelta del look perfetto, valorizzando la tua personalità e le caratteristiche del tuo viso.

Prenota su WhatsApp o chiama il 011 939319. Ti aspettiamo in Corso Moncenisio 56/A.
```

**Servizi da aggiungere su Google Business:**
1. Taglio capelli donna - Da 35€
2. Taglio capelli uomo - Da 18€
3. Colorazione capelli - Da 40€
4. Balayage - Da 80€
5. Piega - Da 20€
6. Trattamenti ricostruzione - Da 25€
7. Acconciatura sposa - Su preventivo
8. Barba uomo - Da 12€

### Citation Building - Directory Locali

1. **Pagine Gialle** - paginegialle.it
2. **TripAdvisor** - tripadvisor.it
3. **Yelp Italia** - yelp.it
4. **Mappa Misterimprese** - misterimprese.it
5. **Pagine SI** - paginesi.it
6. **Trova Imprese** - trovaimpresa.it
7. **Cylex** - cylex.it

**Dati da inserire in ogni directory (stessi NAP):**
- Nome: I Giarratano Parrucchieri
- Categoria: Parrucchiere / Salone di bellezza
- Indirizzo: Corso Moncenisio 56/A, 10057 Sant'Ambrogio di Torino TO
- Telefono: 011 939319
- Sito: https://www.igiarratanoparrucchieri.it
- Orari: come sopra
- Descrizione: copia da Google Business

---

## 4️⃣ CONTENT SEO - CONTENT BRIEF PER OGNI PAGINA

### Homepage

**H1:** Parrucchiere a Sant'Ambrogio di Torino - I Giarratano

**H2 Structure:**
```
H1: Parrucchiere a Sant'Ambrogio di Torino - I Giarratano
├── H2: I nostri servizi per la tua bellezza
│   ├── H3: Taglio capelli donna personalizzato
│   ├── H3: Colorazioni e balayage d'autore
│   ├── H3: Trattamenti ricostruzione capelli
│   ├── H3: Barberia e grooming uomo
│   ├── H3: Acconciature sposa e eventi
│   └── H3: Prodotti professionali home care
├── H2: La nostra galleria
├── H2: Listino prezzi trasparente
├── H2: Cosa dicono i nostri clienti
└── H2: Il nostro team di professionisti
```

**Keyword Density Target:**
- "parrucchiere sant'ambrogio di torino" - 3-4 volte
- "taglio capelli" - 2-3 volte
- "balayage" - 2 volte
- "colore capelli" - 2 volte
- "valle di susa" - 1-2 volte

**Testo SEO da aggiungere in fondo homepage:**
```html
<section class="seo-content py-16 px-4 max-w-4xl mx-auto text-center">
  <h2 class="text-2xl font-serif mb-6">Parrucchiere di fiducia a Sant'Ambrogio di Torino</h2>
  <p class="text-base opacity-80 leading-relaxed mb-4">
    Dal 2003, <strong>I Giarratano Parrucchieri</strong> è il salone di riferimento per chi cerca un 
    <strong>parrucchiere a Sant'Ambrogio di Torino</strong> e nella <strong>Valle di Susa</strong>. 
    Specializzati in <strong>taglio capelli</strong> personalizzato, <strong>colorazioni</strong> di alta qualità, 
    <strong>balayage</strong> naturali e <strong>acconciature sposa</strong>.
  </p>
  <p class="text-base opacity-80 leading-relaxed">
    Il nostro team certificato Wella ti aspetta in <strong>Corso Moncenisio 56/A</strong>. 
    Prenota ora al <strong>011 939319</strong> o via WhatsApp per un'esperienza di bellezza unica.
  </p>
</section>
```

### Pagina Chi Siamo

**H1:** Chi Siamo - Il Team I Giarratano Parrucchieri

**H2 Structure:**
```
H1: Chi Siamo - Il Team I Giarratano Parrucchieri
├── H2: La nostra storia dal 2003
├── H2: Il nostro team
│   ├── H3: Marianna Giarratano - Color Director
│   ├── H3: Mimma - Senior Stylist
│   └── H3: Caterina - Coordinatrice Salone
└── H2: Perché scegliere I Giarratano
```

**Keyword:**
- "parrucchiere valle di susa" - 2 volte
- "esperienza parrucchiere" - 1 volta
- "team specializzato" - 2 volte

### Pagina Recensioni

**H1:** Recensioni Clienti - I Giarratano Parrucchieri (4.8★)

**H2 Structure:**
```
H1: Recensioni Clienti - I Giarratano Parrucchieri
├── H2: Cosa dicono su Google
├── H2: Esperienze dei nostri clienti
└── H2: Lascia anche tu una recensione
```

**Rich Snippet Review da aggiungere:**
```html
<div itemscope itemtype="https://schema.org/AggregateRating" class="rating-snippet">
  <span itemprop="itemReviewed" itemscope itemtype="https://schema.org/HairSalon">
    <span itemprop="name">I Giarratano Parrucchieri</span>
  </span>
  <div class="stars">★★★★★</div>
  <span itemprop="ratingValue">4.8</span> su 
  <span itemprop="bestRating">5</span> stelle - 
  <span itemprop="reviewCount">127</span> recensioni su Google
</div>
```

### Pagina Contatti

**H1:** Contatti e Prenotazioni - Parrucchiere Sant'Ambrogio

**H2 Structure:**
```
H1: Contatti e Prenotazioni
├── H2: Come prenotare il tuo appuntamento
├── H2: Dove trovarci
│   ├── H3: Indirizzo
│   └── H3: Come arrivare
├── H2: Orari di apertura
└── H2: Domande frequenti (FAQ)
```

### Ottimizzazione Alt Text Immagini

| Immagine | Alt Text Ottimizzato |
|----------|---------------------|
| Logo | "Logo I Giarratano Parrucchieri - Salone a Sant'Ambrogio di Torino" |
| Hero/Homepage | "Interno salone I Giarratano Parrucchieri a Sant'Ambrogio di Torino" |
| Team/Marianna | "Marianna Giarratano - Color Director certificata Wella" |
| Team/Mimma | "Mimma - Senior Stylist specialista taglio e acconciature" |
| Servizio Taglio | "Taglio capelli donna professionale a Sant'Ambrogio di Torino" |
| Servizio Colore | "Colorazione capelli con tecnica balayage - I Giarratano" |
| Galleria 1 | "Risultato taglio e piega - Cliente soddisfatta Sant'Ambrogio" |
| Galleria 2 | "Schiariture capelli balayage naturale - Valle di Susa" |
| Contatti | "Salone I Giarratano - Corso Moncenisio 56/A Sant'Ambrogio" |

---

## 5️⃣ TECHNICAL SEO

### URL Structure Raccomandata

```
# Pagine Principali (già implementate con HashRouter)
/
/chi-siamo
/recensioni
/contatti
/privacy
/termini

# URL Ottimizzati per SEO (consigliati per futuro)
/servizi/taglio-capelli-donna
/servizi/colorazione-capelli
/servizi/balayage-torino
/servizi/acconciatura-sposa
/servizi/barbiere-uomo
/servizi/trattamenti-capelli

# Landing Page Localizzate (consigliate)
/parrucchiere-sant-ambrogio-torino
/parrucchiere-valle-di-susa
/taglio-capelli-sant-ambrogio
/balayage-valle-susa
```

### Redirects 301 (se cambi URL)

```apache
# .htaccess o config server
Redirect 301 /about /chi-siamo
Redirect 301 /contact /contatti
Redirect 301 /reviews /recensioni
```

### Implementazione React Router per SEO

**Attuale:** HashRouter (/#/chi-siamo)
**Consigliato:** BrowserRouter con SSR o prerendering

Per mantenere HashRouter ma migliorare SEO:
```javascript
// Aggiungere meta dinamici per ogni route
useEffect(() => {
  // Aggiorna title e meta description
  document.title = pageTitle;
  document.querySelector('meta[name="description"]').setAttribute('content', pageDescription);
}, [location]);
```

---

## 📁 FILE DA CREARE

### 1. robots.txt

```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.igiarratanoparrucchieri.it/sitemap.xml

# Disallow admin/utility pages
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Crawl rate
Crawl-delay: 1

# Specific bots
User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

User-agent: Bingbot
Allow: /
Crawl-delay: 1
```

### 2. sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Homepage -->
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="it-it" href="https://www.igiarratanoparrucchieri.it/" />
    <image:image>
      <image:loc>https://www.igiarratanoparrucchieri.it/og-image.jpg</image:loc>
      <image:title>I Giarratano Parrucchieri Sant'Ambrogio</image:title>
      <image:caption>Salone parrucchiere a Sant'Ambrogio di Torino</image:caption>
    </image:image>
  </url>
  
  <!-- Chi Siamo -->
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/chi-siamo</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="it-it" href="https://www.igiarratanoparrucchieri.it/chi-siamo" />
  </url>
  
  <!-- Recensioni -->
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/recensioni</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="it-it" href="https://www.igiarratanoparrucchieri.it/recensioni" />
  </url>
  
  <!-- Contatti -->
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/contatti</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="it-it" href="https://www.igiarratanoparrucchieri.it/contatti" />
  </url>
  
  <!-- Privacy -->
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/privacy</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Termini -->
  <url>
    <loc>https://www.igiarratanoparrucchieri.it/termini</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>
```

---

## ⚡ CORE WEB VITALS & MOBILE

### Performance Targets

| Metric | Target | Attuale Stimato |
|--------|--------|-----------------|
| LCP (Largest Contentful Paint) | < 2.5s | Ottimizzare |
| FID (First Input Delay) | < 100ms | OK |
| CLS (Cumulative Layout Shift) | < 0.1 | OK |
| FCP (First Contentful Paint) | < 1.8s | Ottimizzare |
| TTFB (Time to First Byte) | < 600ms | OK |

### Ottimizzazioni Consigliate

1. **Lazy Loading Immagini**
```html
<img 
  src="image.webp" 
  alt="..." 
  loading="lazy" 
  decoding="async"
  width="800"
  height="600"
/>
```

2. **Preload Font**
```html
<link rel="preload" href="/fonts/playfair-display.woff2" as="font" type="font/woff2" crossorigin>
```

3. **Critical CSS Inline**
```html
<style>
  /* Critical CSS per above-the-fold */
  .hero { /* ... */ }
  .nav { /* ... */ }
</style>
```

4. **Image Optimization**
   - Usare formato WebP/AVIF
   - Dimensioni responsive: srcset
   - Comprimere con TinyPNG o Squoosh

---

## ✅ CHECKLIST IMPLEMENTAZIONE

### Fase 1: On-Page SEO (Immediata)
- [ ] Aggiornare title tag in index.html
- [ ] Aggiornare meta description
- [ ] Aggiungere structured data HairSalon completo
- [ ] Aggiungere Schema FAQPage
- [ ] Verificare canonical URL
- [ ] Ottimizzare tutti gli alt text immagini
- [ ] Aggiungere testo SEO in fondo homepage
- [ ] Creare file robots.txt
- [ ] Creare file sitemap.xml

### Fase 2: Local SEO (Settimana 1)
- [ ] Verificare NAP su tutte le piattaforme
- [ ] Ottimizzare Google Business Profile
- [ ] Aggiungere foto su Google Business (min 10)
- [ ] Rispondere a tutte le recensioni esistenti
- [ ] Aggiungere servizi su Google Business
- [ ] Creare post su Google Business (2/settimana)
- [ ] Registrarsi su directory locali

### Fase 3: Content (Settimana 2-3)
- [ ] Aggiungere sezione FAQ con 6+ domande
- [ ] Ottimizzare heading H1, H2, H3
- [ ] Aggiungere breadcrumb navigation
- [ ] Creare contenuto blog (1 articolo/settimana)
- [ ] Aggiungere internal linking

### Fase 4: Technical (Settimana 3-4)
- [ ] Ottimizzare immagini (WebP)
- [ ] Implementare lazy loading
- [ ] Aggiungere preconnect/preload
- [ ] Verificare mobile-friendliness
- [ ] Test Core Web Vitals
- [ ] Implementare hreflang

### Fase 5: Monitoraggio (Continuo)
- [ ] Aggiungere Google Search Console
- [ ] Aggiungere Google Analytics 4
- [ ] Monitorare ranking keyword
- [ ] Tracciare click-to-call e WhatsApp
- [ ] Analizzare bounce rate per pagina

---

## 📈 KPI E METRICHE

### Metriche da Monitorare

| Metrica | Target 3 Mesi | Target 6 Mesi |
|---------|---------------|---------------|
| Posizione "parrucchiere sant'ambrogio" | Top 5 | Top 3 |
| Posizione "balayage torino" | Top 20 | Top 10 |
| Traffico organico mensile | +50% | +100% |
| Click-to-call dal sito | 30/mese | 60/mese |
| Richieste WhatsApp | 50/mese | 100/mese |
| Recensioni Google | +20 | +50 |
| Domain Authority | 15 | 25 |

---

## 🚀 PROSSIMI PASSI

1. **Oggi:** Implementare meta tags e Schema.org aggiornati
2. **Questa settimana:** Ottimizzare Google Business Profile
3. **Prossima settimana:** Registrarsi su directory locali
4. **Mese 1:** Iniziare content marketing locale
5. **Mese 2:** Valutare necessità di landing page specifiche

---

**Nota:** Questa guida è personalizzata per "I Giarratano Parrucchieri" e il territorio di Sant'Ambrogio di Torino / Valle di Susa. Tutte le ottimizzazioni sono pronte per l'implementazione immediata.
