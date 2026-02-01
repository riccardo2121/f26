import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ogType = 'website',
  canonical,
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const location = useLocation();
  const currentUrl = `https://www.igiarratanoparrucchieri.it${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noIndex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );

    // Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || currentUrl);

    // Update Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: ogTitle || title },
      { property: 'og:description', content: ogDescription || description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:title', content: ogTitle || title },
      { name: 'twitter:description', content: ogDescription || description },
      { name: 'twitter:image', content: ogImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add/update structured data
    if (structuredData) {
      const existingScript = document.getElementById('dynamic-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'dynamic-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const dynamicScript = document.getElementById('dynamic-structured-data');
      if (dynamicScript) {
        dynamicScript.remove();
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonical, noIndex, structuredData, currentUrl]);

  return null;
};

// Pre-configured SEO configs for each page
export const seoConfigs = {
  home: {
    title: "Parrucchiere Sant'Ambrogio di Torino | I Giarratano",
    description: "I Giarratano Parrucchieri a Sant'Ambrogio di Torino. Taglio, colore, balayage e acconciature sposa. 20+ anni di esperienza. Prenota su WhatsApp 011 939319.",
    keywords: "parrucchiere Sant'Ambrogio di Torino, taglio capelli, colore capelli, balayage, acconciatura sposa, barbiere, Valle di Susa, piega capelli",
    ogType: 'business.business' as const,
  },
  chiSiamo: {
    title: "Chi Siamo | I Giarratano Parrucchieri Sant'Ambrogio di Torino",
    description: "Scopri la storia di I Giarratano Parrucchieri. 20 anni di esperienza, team specializzato in taglio, colore e acconciature. Tradizione artigiana nel cuore della Valle di Susa.",
    keywords: "chi siamo parrucchiere, team Giarratano, storia salone, parrucchieri Sant'Ambrogio, esperienza parrucchiere",
    ogType: 'article' as const,
  },
  recensioni: {
    title: "Recensioni | I Giarratano Parrucchieri - 4.8★ su Google",
    description: "Leggi le recensioni vere di I Giarratano Parrucchieri. 127 clienti soddisfatti ci hanno valutato 4.8 stelle su Google. Scopri perché siamo i migliori a Sant'Ambrogio.",
    keywords: "recensioni parrucchiere, opinioni Giarratano, parrucchiere migliore Sant'Ambrogio, recensioni Google",
  },
  contatti: {
    title: "Contatti e Prenotazioni | Parrucchiere Sant'Ambrogio di Torino",
    description: "Prenota il tuo appuntamento da I Giarratano Parrucchieri. Tel: 011 939319, WhatsApp, o vieni in Corso Moncenisio 56/A a Sant'Ambrogio di Torino.",
    keywords: "contatti parrucchiere, prenotazione Sant'Ambrogio, telefono parrucchiere, dove siamo, indirizzo salone",
  },
  privacy: {
    title: "Privacy Policy | I Giarratano Parrucchieri",
    description: "Informativa sulla privacy e sul trattamento dei dati personali di I Giarratano Parrucchieri.",
    noIndex: true,
  },
  termini: {
    title: "Termini di Servizio | I Giarratano Parrucchieri",
    description: "Termini e condizioni di utilizzo dei servizi di I Giarratano Parrucchieri.",
    noIndex: true,
  },
};

export default SEO;
