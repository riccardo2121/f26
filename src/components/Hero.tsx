import { Scissors, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[var(--accent-light)] to-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[var(--accent)] p-4 rounded-full">
              <Scissors className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Eleganza e Stile
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Il tuo salone di bellezza dove la professionalità incontra la creatività
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Prenota Ora
            </button>
            <button className="bg-white hover:bg-gray-50 text-[var(--accent)] px-8 py-4 rounded-full text-lg font-semibold border-2 border-[var(--accent)] transition-all">
              I Nostri Servizi
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[var(--accent-light)] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
