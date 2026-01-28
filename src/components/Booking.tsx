import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function Booking() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Prenota il Tuo Appuntamento
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Compila il form o contattaci direttamente. Siamo qui per rendere i tuoi capelli straordinari!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Orari di Apertura</h3>
                  <p className="text-gray-600">Lun-Ven: 9:00 - 19:00</p>
                  <p className="text-gray-600">Sabato: 9:00 - 18:00</p>
                  <p className="text-gray-600">Domenica: Chiuso</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Dove Siamo</h3>
                  <p className="text-gray-600">Via Roma 123</p>
                  <p className="text-gray-600">00100 Roma, Italia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Telefono</h3>
                  <p className="text-gray-600">+39 06 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@eleganzaestile.it</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="tua@email.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                  Servizio Richiesto
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                >
                  <option>Taglio & Styling</option>
                  <option>Colore & Meches</option>
                  <option>Trattamenti</option>
                  <option>Acconciature</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Messaggio (opzionale)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="Note aggiuntive..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
