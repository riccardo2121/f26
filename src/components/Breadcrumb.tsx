import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path?: string;
}

const pathMap: Record<string, string> = {
  'chi-siamo': 'Chi Siamo',
  'recensioni': 'Recensioni',
  'contatti': 'Contatti',
  'privacy': 'Privacy Policy',
  'termini': 'Termini di Servizio',
};

export const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);
  
  // Don't show breadcrumb on homepage
  if (paths.length === 0) return null;

  const items: BreadcrumbItem[] = [
    { name: 'Home', path: '/' },
    ...paths.map((path, index) => ({
      name: pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1),
      path: index === paths.length - 1 ? undefined : `/${paths.slice(0, index + 1).join('/')}`,
    })),
  ];

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.path ? `https://www.igiarratanoparrucchieri.it${item.path}` : undefined,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Visual Breadcrumb */}
      <nav 
        aria-label="Breadcrumb"
        className="py-4 px-4 border-b border-[var(--line)] bg-[var(--surface)]/50"
      >
        <ol 
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
          className="max-w-[1400px] mx-auto flex items-center gap-2 text-sm"
        >
          {items.map((item, index) => (
            <li 
              key={index}
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <ChevronRight size={14} className="opacity-40" />
              )}
              
              {item.path ? (
                <Link
                  to={item.path}
                  itemProp="item"
                  className="flex items-center gap-1.5 opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition"
                >
                  {index === 0 && <Home size={14} />}
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span 
                  itemProp="name"
                  className="font-medium text-[var(--accent)]"
                  aria-current="page"
                >
                  {item.name}
                </span>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
