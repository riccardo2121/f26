import { Scissors, Sparkles, Palette, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Taglio & Styling',
    description: 'Tagli personalizzati per ogni tipo di capello, con consulenza stilistica professionale.',
    price: 'da €35'
  },
  {
    icon: Palette,
    title: 'Colore & Meches',
    description: 'Colorazioni moderne, balayage, meches e trattamenti colore di alta qualità.',
    price: 'da €60'
  },
  {
    icon: Sparkles,
    title: 'Trattamenti',
    description: 'Trattamenti rigeneranti, ricostruzione e cura profonda per capelli sani e lucenti.',
    price: 'da €40'
  },
  {
    icon: Star,
    title: 'Acconciature',
    description: 'Acconciature per eventi speciali, matrimoni e cerimonie con prova inclusa.',
    price: 'da €80'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi professionali per la cura e lo styling dei tuoi capelli
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-amber-600 font-bold text-xl">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
