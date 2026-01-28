import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sofia Romano',
    role: 'Influencer & Fashion Blogger',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Un\'esperienza incredibile! Il team è super professionale e attento ai dettagli. Il mio nuovo colore è perfetto e ricevo complimenti ogni giorno!',
    rating: 5,
    service: 'Colore & Meches'
  },
  {
    name: 'Giulia Ferretti',
    role: 'Manager',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Ho finalmente trovato il mio salone di fiducia! Atmosfera rilassante, personale gentilissimo e risultati sempre impeccabili. Lo consiglio a tutti!',
    rating: 5,
    service: 'Taglio & Styling'
  },
  {
    name: 'Martina Colombo',
    role: 'Architetto',
    image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Professionalità al top! Mi hanno consigliato il trattamento perfetto per i miei capelli danneggiati. Dopo solo 3 sedute sono tornati splendenti!',
    rating: 5,
    service: 'Trattamenti'
  },
  {
    name: 'Elena Bianchi',
    role: 'Sposa',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Per il mio matrimonio hanno creato l\'acconciatura dei miei sogni! Sono rimasta perfetta per tutta la giornata. Grazie di cuore!',
    rating: 5,
    service: 'Acconciature'
  },
  {
    name: 'Chiara Moretti',
    role: 'Avvocato',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Eleganza e professionalità in ogni dettaglio. Il salone perfetto per chi cerca qualità e stile. Non potrei essere più soddisfatta!',
    rating: 5,
    service: 'Colore & Taglio'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      result.push({ ...testimonials[index], position: i });
    }
    return result;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Cosa Dicono di Noi
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La soddisfazione dei nostri clienti è la nostra migliore referenza
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center perspective-1000">
          {getVisibleTestimonials().map((testimonial, idx) => {
            const position = testimonial.position;
            const isCenter = position === 0;

            return (
              <div
                key={`${testimonial.name}-${idx}`}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: `
                    translateX(${position * 350}px)
                    translateZ(${isCenter ? 0 : -200}px)
                    rotateY(${position * -15}deg)
                    scale(${isCenter ? 1 : 0.85})
                  `,
                  opacity: Math.abs(position) > 1 ? 0 : isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 5 - Math.abs(position),
                  pointerEvents: isCenter ? 'auto' : 'none'
                }}
              >
                <div className="w-[350px] md:w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-20 h-20 text-amber-600" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Service Badge */}
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      {testimonial.service}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-md opacity-50"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="group bg-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-transparent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-amber-500 to-orange-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="group bg-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-transparent"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Add custom CSS for 3D effect */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
