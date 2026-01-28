import { Scissors, Calendar, Sparkles, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-gradient-to-br from-amber-300/30 to-orange-300/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[600px] h-[600px] bg-gradient-to-tr from-rose-300/30 to-pink-300/20 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-yellow-200/20 to-amber-200/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <Sparkles className="w-8 h-8 text-amber-600 animate-pulse" />
      </div>
      <div className="absolute bottom-40 right-32 opacity-20">
        <Star className="w-6 h-6 text-rose-600" style={{ animation: 'float 4s ease-in-out infinite' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="text-center">
          {/* Logo/Icon */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-full shadow-2xl">
                <Scissors className="w-14 h-14 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-amber-900 to-gray-900 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Eleganza e Stile
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-3xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Il tuo salone di bellezza dove la professionalità incontra la creatività
          </p>

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-10 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-gray-700">Esperienza dal 2010 • 5000+ clienti soddisfatti</span>
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => scrollToSection('prenota')}
              className="group relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Calendar className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Prenota Ora</span>
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-10 py-5 rounded-full text-lg font-bold border-2 border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl"
            >
              I Nostri Servizi
            </button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
