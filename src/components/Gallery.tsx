const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Taglio professionale'
  },
  {
    url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Colorazione capelli'
  },
  {
    url: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Styling moderno'
  },
  {
    url: 'https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Acconciatura elegante'
  },
  {
    url: 'https://images.pexels.com/photos/3065306/pexels-photo-3065306.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Trattamento capelli'
  },
  {
    url: 'https://images.pexels.com/photos/3065307/pexels-photo-3065307.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cura professionale'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Nostri Lavori
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scopri alcuni dei nostri migliori risultati e lasciati ispirare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
              style={{ paddingBottom: '100%' }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
