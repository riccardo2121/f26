import { galleryImages, salon } from "../content";
import { Button, Pill } from "./UI";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, Instagram } from "lucide-react";

export function GallerySection() {
  return (
    <section id="gallery" className="reveal relative mx-auto max-w-6xl px-4 py-12 md:py-32">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--surface)] to-[var(--paper)] border border-[var(--accent)]/20 shadow-sm mb-6">
          <ImageIcon className="w-4 h-4 text-[var(--accent)]" />
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)]">
            Portfolio
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
          L'arte di <br/>
          <span className="relative inline-block">
            <span className="italic text-[var(--accent)]">trasformare</span>
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--accent-light)]" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto mb-8">
          Ogni immagine racconta una storia di metamorfosi. Scopri il potenziale nascosto dei tuoi capelli attraverso i nostri lavori più recenti.
        </p>
        <div className="flex justify-center">
          <Button href={salon.instagram} variant="outline" className="py-4 px-8 w-full md:w-auto group">
            <Instagram className="w-5 h-5 mr-2 group-hover:text-[var(--accent)] transition-colors" />
            @igiarratanoparrucchieri
          </Button>
        </div>
      </div>
      <MobileGallerySlider images={galleryImages} />
      <div className="hidden md:grid mt-8 md:mt-12 grid-cols-3 gap-4 md:gap-6 md:auto-rows-[300px]">
        {galleryImages.map((img, i) => (
          <div 
            key={img.jpeg} 
            className={`relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] group ${
              i % 3 === 0 ? "md:col-span-2" : ""
            }`}
          >
            <picture>
              {img.avif && (
                <source type="image/avif" srcSet={img.avif} />
              )}
              {img.webp && (
                <source type="image/webp" srcSet={img.webp} />
              )}
              <img
                src={img.jpeg}
                alt={img.alt ?? `Lavoro ${i + 1}`}
                loading="lazy"
                decoding="async"
                width={img.width}
                height={img.height}
                className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110"
              />
            </picture>
            <div className="absolute top-4 left-4">
              <Pill>{img.category}</Pill>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent opacity-50"></div>
    </section>
  );
}

function MobileGallerySlider({ images }: { images: typeof galleryImages }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="block md:hidden mt-6 relative">
      <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] shadow-lg">
        <picture key={images[current]?.jpeg} className="animate-fade-in block h-[400px]">
          {images[current]?.avif && (
            <source type="image/avif" srcSet={images[current].avif as string} />
          )}
          {images[current]?.webp && (
            <source type="image/webp" srcSet={images[current].webp as string} />
          )}
          <img
            src={images[current]?.jpeg ?? ""}
            alt={images[current]?.alt ?? `Lavoro ${current + 1}`}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </picture>
        <div className="absolute top-4 left-4 z-10">
           <Pill>{images[current]?.category}</Pill>
        </div>
        <button
          aria-label="Immagine precedente"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[var(--accent)] text-[var(--paper)] p-3 rounded-full ring-2 ring-[var(--accent)]/40 shadow-xl hover:brightness-110 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          aria-label="Immagine successiva"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[var(--accent)] text-[var(--paper)] p-3 rounded-full ring-2 ring-[var(--accent)]/40 shadow-xl hover:brightness-110 transition"
        >
          <ChevronRight size={28} />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--paper)]/80 backdrop-blur border border-[var(--line)] text-[10px] uppercase tracking-[.2em] font-bold">
          <span>{current + 1}</span>
          <span className="opacity-60">/</span>
          <span>{images.length}</span>
        </div>
      </div>
    </div>
  );
}
