import { Scissors, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-600 p-2 rounded-full">
                <Scissors className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Eleganza e Stile</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Il tuo salone di fiducia per tagli, colori e trattamenti professionali.
              Passione e qualità al servizio della tua bellezza.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servizi" className="text-gray-400 hover:text-amber-400 transition">
                  I Nostri Servizi
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-400 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#prenota" className="text-gray-400 hover:text-amber-400 transition">
                  Prenota Ora
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-gray-400 hover:text-amber-400 transition">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Seguici</h3>
            <p className="text-gray-400 mb-4">
              Resta aggiornato sulle ultime tendenze e offerte speciali!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eleganza e Stile. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
