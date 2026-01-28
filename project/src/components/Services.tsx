import { Scissors, Sparkles, Palette, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Scissors,
    title: 'Taglio & Styling',
    description: 'Tagli personalizzati per ogni tipo di capello, con consulenza stilistica professionale.',
    price: 'da €35',
    color: 'from-amber-400 to-orange-500',
    features: ['Consulenza inclusa', 'Lavaggio e piega', 'Styling professionale']
  },
  {
    icon: Palette,
    title: 'Colore & Meches',
    description: 'Colorazioni moderne, balayage, meches e trattamenti colore di alta qualità.',
    price: 'da €60',
    color: 'from-rose-400 to-pink-500',
    features: ['Prodotti premium', 'Test allergia', 'Trattamento protettivo']
  },
  {
    icon: Sparkles,
    title: 'Trattamenti',
    description: 'Trattamenti rigeneranti, ricostruzione e cura profonda per capelli sani e lucenti.',
    price: 'da €40',
    color: 'from-purple-400 to-indigo-500',
    features: ['Analisi capello', 'Prodotti naturali', 'Risultati duraturi']
  },
  {
    icon: Star,
    title: 'Acconciature',
    description: 'Acconciature per eventi speciali, matrimoni e cerimonie con prova inclusa.',
    price: 'da €80',
    color: 'from-yellow-400 to-amber-500',
    features: ['Prova inclusa', 'A domicilio', 'Accessori disponibili']
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              I Nostri Servizi
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Trasformiamo i Tuoi Capelli
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Offriamo una gamma completa di servizi professionali per la cura e lo styling dei tuoi capelli
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Features - shown on hover */}
                  <div className={`space-y-2 mb-6 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <p className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </p>
                    <button className="group/btn flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all duration-300">
                      <span className="text-sm">Scopri</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <service.icon className="w-full h-full text-gray-900 transform rotate-12" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Non trovi il servizio che cerchi?
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Contattaci per una Consulenza Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
