import { Scissors, Instagram, Facebook, Mail, Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-2xl shadow-lg">
                <Scissors className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Eleganza e Stile
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Il tuo salone di fiducia per tagli, colori e trattamenti professionali.
              Passione e qualità al servizio della tua bellezza dal 2010.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <Heart className="w-5 h-5 fill-amber-400" />
              <span className="text-sm font-semibold">5000+ clienti soddisfatti</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Link Rapidi
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servizi"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  I Nostri Servizi
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#prenota"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Prenota Ora
                </a>
              </li>
              <li>
                <a
                  href="#prenota"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all duration-300"></span>
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Seguici
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Resta aggiornato sulle ultime tendenze, offerte speciali e i nostri migliori lavori!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="group bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="group bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@eleganzaestile.it"
                className="group bg-gray-800 hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-500 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Eleganza e Stile. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Termini di Servizio</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 p-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Torna su"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
        </button>
      )}
    </footer>
  );
}
