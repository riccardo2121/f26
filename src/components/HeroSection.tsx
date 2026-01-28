import { salon } from "../content";
import { MessageCircle, Star, Sparkles, Award, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./UI";

export function HeroSection() {
  const [hover, setHover] = useState(0);
  const [selected, setSelected] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const reviewUrl = salon.placeId
    ? `https://search.google.com/local/writereview?hl=it&placeid=${salon.placeId}`
    : `https://www.google.com/search?q=${encodeURIComponent(`${salon.name} ${salon.city} recensioni Google`)}&hl=it`;
  return (
    <section className="relative pt-16 md:pt-32 md:pb-16 overflow-hidden">
      {/* Decorative floating elements - Mobile optimized */}
      <div className="absolute top-16 right-4 w-16 h-16 rounded-full bg-[var(--accent)]/15 blur-2xl animate-float md:hidden"></div>
      <div className="absolute top-32 left-4 w-24 h-24 rounded-full bg-[var(--accent-light)]/40 blur-3xl animate-float-delayed md:hidden"></div>
      
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 rounded-full bg-[var(--accent)]/10 blur-2xl animate-float" style={{transform: `translateY(${scrollY * 0.1}px)`}}></div>
      <div className="hidden md:block absolute top-40 right-20 w-32 h-32 rounded-full bg-[var(--accent-light)]/30 blur-3xl animate-float-delayed" style={{transform: `translateY(${scrollY * 0.15}px)`}}></div>
      <div className="hidden md:block absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-transparent blur-2xl animate-float-slow"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-28 right-6 md:right-20 opacity-30 md:opacity-20">
        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[var(--accent)] animate-pulse-slow" />
      </div>
      <div className="absolute bottom-40 left-4 md:left-8 opacity-20 md:opacity-15">
        <Award className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent)] animate-float" />
      </div>
      
      <div className="mx-auto max-w-[1400px] relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-center w-full">
          <div className="lg:col-span-5 relative z-10 order-2 md:order-2 lg:order-1 reveal is-visible px-3 md:px-0 w-full max-w-full">
            <div className="opacity-0 inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[var(--surface)] to-[var(--paper)] border border-[var(--accent)]/20 shadow-sm mb-5 md:mb-8 animate-fade-in group" style={{animationDelay: '0.1s'}}>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"/>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
                Arte <span className="font-serif italic font-normal lowercase">e</span> Passione dal 2003
              </span>
            </div>
            <h1 className="opacity-0 text-[1.75rem] leading-[1.2] sm:text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 md:mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="block bg-gradient-to-r from-[var(--ink)] via-[var(--accent-dark)] to-[var(--accent)] bg-clip-text text-transparent">
                La tua bellezza
              </span>
              <span className="block mt-1 md:mt-2">
                merita eccellenza
              </span>
              <span className="relative inline-block mt-1 md:mt-2">
                <span className="italic text-[var(--accent)] relative z-10">made in Italy</span>
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2.5 md:h-3 text-[var(--accent-light)] -z-0 title-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path className="title-underline-path" d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="opacity-0 text-[14px] md:text-xl font-light text-[var(--ink)]/70 mb-5 md:mb-6 max-w-md leading-relaxed animate-fade-in border-l-2 border-[var(--accent)]/30 pl-3 md:pl-4" style={{animationDelay: '0.3s'}}>
              Dove l'artigianalità incontra l'innovazione. Tagli che esaltano, colori che emozionano, un'esperienza che ti trasforma.
            </p>
            <div className="opacity-0 flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in w-full" style={{animationDelay: '0.4s'}}>
              <Button href={salon.whatsapp} variant="accent" className="!w-full sm:!w-auto justify-center px-4 py-3.5 md:px-10 md:py-5 text-sm md:text-lg font-semibold group relative overflow-hidden shadow-lg shadow-[var(--accent)]/30 active:scale-[0.98] transition-transform">
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 relative z-10 shrink-0" />
                <span className="relative z-10">Prenota ora</span>
              </Button>
              <Button href={`tel:${salon.phone.replace(/\s+/g,"")}`} variant="outline" className="!w-full sm:!w-auto justify-center px-4 py-3.5 md:px-8 md:py-4 text-sm md:text-base border-2 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-all duration-300 active:scale-[0.98]">
                <Phone className="w-4 h-4 mr-2 md:hidden shrink-0" />
                <span>Chiama ora</span>
              </Button>
            </div>
            
            {/* Trust badges - mobile scrollable */}
            <div className="mt-6 md:mt-8 overflow-x-auto scrollbar-hide -mx-1 px-1">
              <div className="flex items-center gap-2 text-[11px] md:text-xs opacity-70 w-max md:w-auto pb-1">
                <div className="flex items-center gap-1.5 bg-[var(--surface)] px-2.5 py-1.5 rounded-full border border-[var(--line)] shrink-0">
                  <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--accent)]" />
                  <span>+20 anni</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--surface)] px-2.5 py-1.5 rounded-full border border-[var(--line)] shrink-0">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--accent)]" />
                  <span>Sant'Ambrogio</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--surface)] px-2.5 py-1.5 rounded-full border border-[var(--line)] md:hidden shrink-0">
                  <Star className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>4.6★</span>
                </div>
              </div>
            </div>
            {/* Reviews Card - Mobile optimized */}
            <div className="mt-6 md:mt-10 p-3 md:p-5 rounded-2xl bg-gradient-to-br from-[var(--surface)] to-[var(--paper)] border border-[var(--line)] shadow-sm w-full max-w-full overflow-hidden">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[var(--accent)]/30 bg-[var(--paper)] p-1.5 md:p-2 flex items-center justify-center shadow-md">
                    <img src="/logo.png" alt="Reviews" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[var(--accent)] rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-white fill-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[var(--accent)] font-serif font-bold text-xl md:text-2xl italic">4.6</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((n) => (
                        <Star key={n} className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--accent)] fill-[var(--accent)]" />
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider font-bold opacity-60">Su Google Reviews</div>
                </div>
              </div>
              
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[var(--line)]">
                <div className="text-[10px] md:text-xs uppercase tracking-[.15em] font-bold opacity-70 mb-2 md:mb-3">Lascia una recensione</div>
                <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                  <div className="inline-flex items-center bg-[var(--paper)] rounded-full px-1.5 py-1 border border-[var(--line)]">
                    {[1,2,3,4,5].map((n) => (
                      <button
                        key={n}
                        onMouseEnter={() => setHover(n)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => { setSelected(n); window.open(reviewUrl, "_blank"); }}
                        onTouchStart={() => setHover(n)}
                        aria-label={`${n} stelle`}
                        className="p-0.5 hover:scale-110 active:scale-95 transition-transform"
                      >
                        <Star
                          size={14}
                          className={(hover >= n || selected >= n) ? "text-[var(--accent)]" : "text-[var(--ink)]/20"}
                          fill={(hover >= n || selected >= n) ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>
                  <a
                    href={reviewUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[11px] md:text-xs font-semibold text-[var(--accent)] hover:underline transition"
                  >
                    Scrivi su Google
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative overflow-hidden rounded-none md:rounded-[2.5rem] md:card-premium group md:rotate-1 md:hover:rotate-0 transition-all duration-700 order-1 md:order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0 will-change-transform md:ring-1 md:ring-[var(--line)] md:hover:ring-[var(--accent)]/40 md:hover:shadow-2xl md:hover:shadow-[var(--accent)]/10 w-full">
            {salon.heroAvif || salon.heroWebp ? (
              <picture>
                {salon.heroAvif && (
                  <source
                    type="image/avif"
                    srcSet={`${salon.heroAvif} 1600w`}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                )}
                {salon.heroWebp && (
                  <source
                    type="image/webp"
                    srcSet={`${salon.heroWebp} 1600w`}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                )}
                <img
                  src={salon.heroJpeg ?? ""}
                  alt={`Salone ${salon.name}`}
                  loading="eager"
                  decoding="async"
                  width={1600}
                  height={600}
                  className="h-[340px] sm:h-[400px] md:h-[600px] w-full object-cover object-center transition-transform duration-700 md:group-hover:scale-105"
                />
              </picture>
            ) : (
              <img
                src={salon.heroJpeg ?? ""}
                srcSet="
                  https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=480 480w,
                  https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800 800w,
                  https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w,
                  https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600 1600w
                "
                sizes="(max-width: 768px) 100vw, 800px"
                alt={`Salone ${salon.name}`}
                loading="eager"
                decoding="async"
                width={1600}
                height={600}
                className="h-[340px] sm:h-[400px] md:h-[600px] w-full object-cover object-center transition-transform duration-700 md:group-hover:scale-105"
              />
            )}
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-28 bg-gradient-to-b from-[var(--paper)] to-transparent opacity-90 md:opacity-80"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-24 bg-gradient-to-t from-[var(--paper)] to-transparent opacity-80 md:opacity-0"></div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--paper)" fillOpacity="1"></path>
        </svg>
      </div>
    </section>
  );
}
