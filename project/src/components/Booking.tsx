import { Clock, MapPin, Phone, Mail, Send, CheckCircle, Calendar } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Taglio & Styling',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email non valida';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Il telefono è obbligatorio';
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Telefono non valido';
    }

    if (!formData.date) {
      newErrors.date = 'La data è obbligatoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Taglio & Styling',
          date: '',
          message: ''
        });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <section id="prenota" className="py-24 bg-gradient-to-b from-white to-amber-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Contattaci
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Prenota il Tuo Appuntamento
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Compila il form o contattaci direttamente. Siamo qui per rendere i tuoi capelli straordinari!
            </p>

            <div className="space-y-8">
              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Orari di Apertura</h3>
                  <p className="text-gray-600 leading-relaxed">Lun-Ven: 9:00 - 19:00</p>
                  <p className="text-gray-600 leading-relaxed">Sabato: 9:00 - 18:00</p>
                  <p className="text-gray-600 leading-relaxed">Domenica: Chiuso</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Dove Siamo</h3>
                  <p className="text-gray-600 leading-relaxed">Via Roma 123</p>
                  <p className="text-gray-600 leading-relaxed">00100 Roma, Italia</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-purple-400 to-indigo-500 p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Telefono</h3>
                  <a href="tel:+390612345678" className="text-gray-600 hover:text-amber-600 transition-colors leading-relaxed">
                    +39 06 1234 5678
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Email</h3>
                  <a href="mailto:info@eleganzaestile.it" className="text-gray-600 hover:text-amber-600 transition-colors leading-relaxed">
                    info@eleganzaestile.it
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Success message */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center z-10 border-2 border-green-500">
                <div className="text-center p-8">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Richiesta Inviata!</h3>
                  <p className="text-lg text-gray-600">Ti contatteremo al più presto per confermare il tuo appuntamento.</p>
                </div>
              </div>
            )}

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Compila il Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    placeholder="Mario Rossi"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    placeholder="mario.rossi@email.it"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    placeholder="+39 123 456 7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">
                    Servizio Richiesto *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                  >
                    <option>Taglio & Styling</option>
                    <option>Colore & Meches</option>
                    <option>Trattamenti</option>
                    <option>Acconciature</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-gray-900 mb-2">
                    Data Preferita *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 ${
                        errors.date ? 'border-red-500' : 'border-gray-200'
                      } focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white`}
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-sm mt-2">{errors.date}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Messaggio (opzionale)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Note aggiuntive o preferenze..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Send className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Invia Richiesta</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
