import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Taglio professionale',
    category: 'Taglio'
  },
  {
    url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Colorazione capelli',
    category: 'Colore'
  },
  {
    url: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Styling moderno',
    category: 'Styling'
  },
  {
    url: 'https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Acconciatura elegante',
    category: 'Acconciature'
  },
  {
    url: 'https://images.pexels.com/photos/3065306/pexels-photo-3065306.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Trattamento capelli',
    category: 'Trattamenti'
  },
  {
    url: 'https://images.pexels.com/photos/3065307/pexels-photo-3065307.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cura professionale',
    category: 'Trattamenti'
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-rose-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            I Nostri Capolavori
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scopri alcuni dei nostri migliori risultati e lasciati ispirare per il tuo prossimo look
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              style={{
                paddingBottom: index % 3 === 0 ? '120%' : '100%',
              }}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ZoomIn className="w-12 h-12 text-white opacity-90" />
                  <div className="text-center px-4">
                    <p className="text-white font-bold text-xl mb-1">{image.alt}</p>
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Seguici su Instagram per vedere tutti i nostri lavori
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Seguici su Instagram
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-300 z-10"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentImage].url}
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full">
              <p className="text-white font-semibold">{galleryImages[currentImage].alt}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
            <p className="text-white text-sm font-medium">
              {currentImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
