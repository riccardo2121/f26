import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Scissors, Menu, X, MapPin, Image, Tag, Users, Star, Phone, MessageCircle, Instagram } from "lucide-react";
import { salon } from "../content";
import { useBusinessStatus } from "../hooks/useBusinessStatus";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const businessStatus = useBusinessStatus();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If targetId is empty string, it's a route navigation (not a scroll anchor)
    // In that case, we let the Link component handle navigation but we must close the menu.
    if (!targetId) {
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      scrollToElement(targetId);
      // Update URL hash manually for shareability, but be careful with Router
      // window.history.replaceState(null, "", `/#${targetId}`); 
    } else {
      // Navigate to home and pass targetId in state to handle scrolling after render
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  const scrollToElement = (id: string) => {
    // If mobile menu is closing, wait a bit
    const delay = isMobileMenuOpen ? 300 : 0;
    setTimeout(() => {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
    }, delay);
  };

  // Handle scroll when location changes (e.g. navigation from another page)
  useEffect(() => {
    if (location.pathname === "/" && location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
      // Clear state to avoid scrolling on refresh? React Router state persists on refresh usually.
      // Actually, replace state to clear it is good practice but maybe overkill.
      window.history.replaceState({}, document.title);
    } else if (location.pathname === "/" && location.hash) {
       // Handle direct access with hash (e.g. /#servizi)
       const id = location.hash.replace("#", "");
       if (id) {
         setTimeout(() => {
           scrollToElement(id);
         }, 100);
       }
    }
  }, [location]);

  useEffect(() => {
    // Reset scroll when location changes (except for hash navigation handled elsewhere)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    
    // Re-initialize reveal animations on route change
    setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              observer.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
  }, [location.pathname]);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      observerRef.current?.disconnect();
      return;
    }
    
    // Attendi che il componente Home sia montato
    const timer = setTimeout(() => {
      const ids = ["servizi", "gallery", "prezzi", "chi-siamo", "come-funziona"];
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      
      if (!sections.length) return;
      
      observerRef.current?.disconnect();
      
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActiveSection((e.target as HTMLElement).id);
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
      );
      
      sections.forEach((s) => observerRef.current?.observe(s));
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/recensioni") setActiveSection("recensioni");
    else if (location.pathname === "/contatti") setActiveSection("contatti");
    else setActiveSection("");
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <a href="#contenuto" className="skip-link">Vai al contenuto</a>
       

      {/* Header fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 safe-top">
        {/* Top bar */}
        <div className="hidden md:block bg-[var(--ink)] text-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-4 py-2.5 text-[11px] font-medium flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[var(--accent)]" />
                {salon.city}
              </span>
              <span className="opacity-30">|</span>
              <span className="opacity-90">{salon.address}</span>
              <span className="opacity-30">|</span>
              <span className="opacity-90">{salon.hours.split("\n")[0]}</span>
            </div>
            <div className="flex items-center gap-4">
              {/* Stato apertura in tempo reale */}
              <span className={`flex items-center gap-1.5 ${businessStatus.isOpen ? 'text-green-400' : 'text-amber-400'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${businessStatus.isOpen ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`}></span>
                {businessStatus.isOpen ? 'Aperto' : 'Chiuso'}
              </span>
              <span className="opacity-30">|</span>
              <a className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors" href={salon.whatsapp}>
                <MessageCircle size={12} />
                WhatsApp
              </a>
              <span className="opacity-30">|</span>
              <a className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors" href={`tel:${salon.phone.replace(/\s+/g,"")}`}>
                <Phone size={12} />
                {salon.phone}
              </a>
              <span className="opacity-30">|</span>
              <a className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors" href={salon.maps} target="_blank" rel="noreferrer noopener" aria-label="Apri su Google Maps">
                <MapPin size={12} />
                Indicazioni
              </a>
            </div>
          </div>
        </div>
        
        {/* Main nav bar */}
        <div className="header-glass border-b border-[var(--line)]">
        <div className="mx-auto max-w-[1400px] px-4 py-3 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 flex-1 min-w-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt={salon.name} className="h-10 w-auto object-contain rounded-lg border border-[var(--line)] shadow-sm" />
            <div className="leading-tight">
              <div className="font-semibold text-sm whitespace-nowrap md:font-sans font-serif">{salon.name}</div>
              <div className="text-[12px] opacity-60 hidden sm:block truncate">Parrucchiere • {salon.city}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center">
            <div className="nav-wrap">
              <a href="/#servizi" className={`nav-link ${activeSection==="servizi" ? "nav-link-active" : ""}`} onClick={(e) => handleNavClick(e, "servizi")}><Scissors size={16} /> Servizi</a>
              <a href="/#gallery" className={`nav-link ${activeSection==="gallery" ? "nav-link-active" : ""}`} onClick={(e) => handleNavClick(e, "gallery")}><Image size={16} /> Galleria</a>
              <a href="/#prezzi" className={`nav-link ${activeSection==="prezzi" ? "nav-link-active" : ""}`} onClick={(e) => handleNavClick(e, "prezzi")}><Tag size={16} /> Prezzi</a>
              <Link to="/chi-siamo" className={`nav-link ${location.pathname==="/chi-siamo" ? "nav-link-active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}><Users size={16} /> Chi siamo</Link>
              <Link className={`nav-link ${activeSection==="recensioni" ? "nav-link-active" : ""}`} to="/recensioni"><Star size={16} /> Recensioni</Link>
              <Link className={`nav-link ${activeSection==="contatti" ? "nav-link-active" : ""}`} to="/contatti"><Phone size={16} /> Contatti</Link>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            {/* Map Button */}
            <a 
              href={salon.maps} 
              target="_blank" 
              rel="noreferrer noopener"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-[var(--paper)] px-4 py-2 text-sm font-semibold shadow-lg ring-2 ring-[var(--accent)]/30 hover:brightness-110 transition animate-pulse-ring"
              title="Dove Siamo"
              aria-label="Apri mappa"
            >
              <MapPin size={22} />
              <span className="inline">Mappa</span>
            </a>

            {/* Mobile Directions quick button */}
            <a
              href={salon.maps}
              target="_blank"
              rel="noreferrer noopener"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--paper)] ring-2 ring-[var(--accent)]/30 hover:brightness-110 transition"
              aria-label="Indicazioni"
              title="Indicazioni"
            >
              <MapPin size={20} className="mx-auto" />
            </a>

            {/* Hamburger Button */}
            <button 
              className="md:hidden p-2 rounded-full border border-[var(--line)] bg-[var(--paper)] hover:text-[var(--accent)] transition-colors z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            
          </div>
        </div>
        </div>
      </header>

      

      {/* Mobile Menu - Modern Bottom Sheet Style */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-[var(--ink)]/60 backdrop-blur-sm md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Bottom Sheet */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--paper)] rounded-t-[2rem] md:hidden animate-slide-up shadow-2xl max-h-[85vh] overflow-hidden">
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-12 h-1.5 rounded-full bg-[var(--ink)]/20"></div>
            </div>
            
            {/* Header */}
            <div className="px-6 pb-4 border-b border-[var(--line)]">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt={salon.name} className="h-12 w-12 object-contain rounded-xl border border-[var(--line)]" />
                <div>
                  <div className="font-semibold text-sm">{salon.name}</div>
                  <div className="text-xs opacity-60">{salon.city}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="px-4 py-4 overflow-y-auto max-h-[50vh]">
              <div className="grid grid-cols-2 gap-2">
                <a href="/#servizi" onClick={(e) => handleNavClick(e, "servizi")} className={`flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95 ${activeSection==="servizi" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface)] hover:bg-[var(--accent)]/10"}`}>
                  <Scissors size={20} />
                  <span className="font-medium">Servizi</span>
                </a>
                <a href="/#gallery" onClick={(e) => handleNavClick(e, "gallery")} className={`flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95 ${activeSection==="gallery" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface)] hover:bg-[var(--accent)]/10"}`}>
                  <Image size={20} />
                  <span className="font-medium">Galleria</span>
                </a>
                <a href="/#prezzi" onClick={(e) => handleNavClick(e, "prezzi")} className={`flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95 ${activeSection==="prezzi" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface)] hover:bg-[var(--accent)]/10"}`}>
                  <Tag size={20} />
                  <span className="font-medium">Prezzi</span>
                </a>
                <Link to="/chi-siamo" onClick={(e) => handleNavClick(e, "")} className={`flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95 ${location.pathname==="/chi-siamo" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface)] hover:bg-[var(--accent)]/10"}`}>
                  <Users size={20} />
                  <span className="font-medium">Chi siamo</span>
                </Link>
                <Link to="/recensioni" onClick={(e) => handleNavClick(e, "")} className={`flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95 ${location.pathname==="/recensioni" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface)] hover:bg-[var(--accent)]/10"}`}>
                  <Star size={20} />
                  <span className="font-medium">Recensioni</span>
                </Link>
                <Link to="/contatti" onClick={(e) => handleNavClick(e, "")} className={`flex items-center gap-3 p-4 rounded-2xl transition-all active:scale-95 ${location.pathname==="/contatti" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface)] hover:bg-[var(--accent)]/10"}`}>
                  <Phone size={20} />
                  <span className="font-medium">Contatti</span>
                </Link>
              </div>
            </nav>
            
            {/* Quick Actions */}
            <div className="px-4 pb-6 pt-2 bg-[var(--surface)]">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mb-3 px-1">Azioni rapide</div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={salon.whatsapp}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#25D366] text-white active:scale-95 transition-transform"
                >
                  <MessageCircle size={20} />
                  <span className="text-[10px] font-semibold">WhatsApp</span>
                </a>
                <a
                  href={salon.maps}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--accent)] text-white active:scale-95 transition-transform"
                >
                  <MapPin size={20} />
                  <span className="text-[10px] font-semibold">Mappa</span>
                </a>
                <a
                  href={`tel:${salon.phone}`}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[var(--ink)] text-white active:scale-95 transition-transform"
                >
                  <Phone size={20} />
                  <span className="text-[10px] font-semibold">Chiama</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Decorative Badge - Removed as requested */}
      {/* 
      <div className="fixed top-28 right-6 z-40 hidden lg:flex items-center justify-center pointer-events-none mix-blend-multiply opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <div className="relative w-32 h-32 animate-[spin_12s_linear_infinite]">
           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <defs>
                 <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="10" fontWeight="bold" letterSpacing="3" fill="currentColor">
                 <textPath xlinkHref="#circle">
                    I GIARRATANO • PARRUCCHIERI •
                 </textPath>
              </text>
           </svg>
        </div>
        <Scissors className="absolute w-8 h-8 text-[var(--accent)]" strokeWidth={1.5} />
      </div>
      */}

      <main id="contenuto" className="mt-16 md:mt-32">
        {children}
      </main>

      {/* Sticky CTA (mobile) - Modern Floating Design */}
      {!isMobileMenuOpen && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-[60] safe-area-bottom">
          <div className="mx-auto max-w-[1400px] px-3 pb-[calc(8px+env(safe-area-inset-bottom))]">
            <div className="rounded-2xl bg-[var(--ink)] border border-[var(--accent)]/30 shadow-2xl shadow-black/40 p-2">
              <div className="flex items-center gap-2">
                {/* Primary CTA - WhatsApp */}
                <a
                  href={salon.whatsapp}
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-lg shadow-[#25D366]/30 active:scale-[0.98] transition-all"
                  aria-label="Prenota su WhatsApp"
                >
                  <MessageCircle size={20} strokeWidth={2.5} className="shrink-0" />
                  <span className="truncate">Prenota Ora</span>
                </a>
                
                {/* Secondary CTAs */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`tel:${salon.phone.replace(/\s+/g,"")}`}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/30 active:scale-[0.98] transition-all"
                    aria-label="Chiama"
                  >
                    <Phone size={22} strokeWidth={2.5} />
                  </a>
                  <a
                    href={salon.maps}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--surface)] text-[var(--ink)] border border-[var(--line)] active:scale-[0.98] transition-all"
                    aria-label="Indicazioni"
                  >
                    <MapPin size={20} strokeWidth={2} />
                  </a>
                </div>
              </div>
              
              {/* Quick info bar - Stato in tempo reale */}
              <div className="flex items-center justify-center gap-3 mt-2 pt-2 border-t border-white/10">
                {businessStatus.isOpen ? (
                  <span className="text-[11px] font-bold text-green-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Aperto ora
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    Chiuso
                    {businessStatus.nextOpening && (
                      <span className="text-white/70 font-normal ml-1">
                        • Apre {businessStatus.nextOpening.day.toLowerCase()} alle {businessStatus.nextOpening.time}
                      </span>
                    )}
                  </span>
                )}
                <span className="text-white/30">|</span>
                <span className="text-sm font-bold text-white">{salon.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] bg-[var(--surface)] pb-24 md:pb-0">
        {/* Mobile CTA Banner */}
        <div className="md:hidden px-4 py-6 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider opacity-90 mb-1">Pronta per trasformarti?</p>
            <p className="text-lg font-serif font-medium mb-4">Prenota ora, paga in salone</p>
            <a 
              href={salon.whatsapp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--accent)] rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform"
            >
              <MessageCircle size={18} />
              Prenota su WhatsApp
            </a>
          </div>
        </div>
        
        <div className="mx-auto max-w-[1400px] px-4 py-10 md:py-14 grid md:grid-cols-3 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src="/logo.png" alt={salon.name} className="h-12 w-12 object-contain rounded-xl border border-[var(--line)] shadow-sm" />
              <div className="text-left">
                <div className="text-sm font-semibold">{salon.name}</div>
                <div className="text-xs opacity-60">{salon.city}</div>
              </div>
            </div>
            <p className="opacity-70 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Dal 2003 creiamo bellezza autentica nella Valle di Susa. Dove la tradizione artigiana incontra l'innovazione.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
              <a href={salon.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--paper)] border border-[var(--line)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
                <Instagram size={18} />
              </a>
              <a href={salon.whatsapp} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--paper)] border border-[var(--line)] hover:border-[#25D366] hover:text-[#25D366] transition">
                <MessageCircle size={18} />
              </a>
              <a href={salon.maps} target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--paper)] border border-[var(--line)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xs uppercase tracking-[.2em] font-bold mb-4 opacity-80">Contatti</h3>
            <div className="space-y-3 text-sm">
              <a className="flex items-center justify-center md:justify-start gap-2 hover:text-[var(--accent)] transition" href={`tel:${salon.phone.replace(/\s+/g,"")}`}>
                <div className="w-8 h-8 rounded-lg bg-[var(--paper)] flex items-center justify-center border border-[var(--line)]">
                  <Phone size={14} />
                </div>
                <span>{salon.phone}</span>
              </a>
              <a className="flex items-center justify-center md:justify-start gap-2 hover:text-[var(--accent)] transition" href={salon.whatsapp} target="_blank" rel="noreferrer noopener">
                <div className="w-8 h-8 rounded-lg bg-[var(--paper)] flex items-center justify-center border border-[var(--line)]">
                  <MessageCircle size={14} />
                </div>
                <span>WhatsApp</span>
              </a>
              <a className="flex items-center justify-center md:justify-start gap-2 hover:text-[var(--accent)] transition" href={salon.maps} target="_blank" rel="noreferrer noopener">
                <div className="w-8 h-8 rounded-lg bg-[var(--paper)] flex items-center justify-center border border-[var(--line)]">
                  <MapPin size={14} />
                </div>
                <span className="text-xs opacity-80">{salon.address}</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xs uppercase tracking-[.2em] font-bold mb-4 opacity-80">Link utili</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Link className="px-3 py-1.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition" to="/#servizi">Servizi</Link>
              <Link className="px-3 py-1.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition" to="/#gallery">Galleria</Link>
              <Link className="px-3 py-1.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition" to="/#prezzi">Prezzi</Link>
              <Link className="px-3 py-1.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition" to="/chi-siamo">Chi siamo</Link>
              <Link className="px-3 py-1.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition" to="/recensioni">Recensioni</Link>
              <Link className="px-3 py-1.5 rounded-full bg-[var(--paper)] border border-[var(--line)] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition" to="/contatti">Contatti</Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mx-auto max-w-[1400px] px-4 py-5 border-t border-[var(--line)] text-xs flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="uppercase tracking-[.15em] font-semibold opacity-60 text-center md:text-left">
            © {new Date().getFullYear()} {salon.name}
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 opacity-60">
            <Link className="hover:opacity-100 hover:text-[var(--accent)] transition" to="/privacy">Privacy Policy</Link>
            <Link className="hover:opacity-100 hover:text-[var(--accent)] transition" to="/termini">Termini di Servizio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
