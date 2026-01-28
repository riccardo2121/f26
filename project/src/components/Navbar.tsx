import { Scissors, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'servizi', 'gallery', 'prenota'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'servizi', label: 'Servizi' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'prenota', label: 'Prenota' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className={`bg-gradient-to-br from-amber-500 to-orange-600 p-2.5 rounded-2xl shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                isScrolled ? 'shadow-amber-500/20' : 'shadow-amber-500/30'
              }`}>
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className={`font-bold text-xl bg-gradient-to-r from-gray-900 to-amber-900 bg-clip-text text-transparent transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-90'
              }`}>
                Eleganza e Stile
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/30'
                      : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-800 hover:bg-white/50'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 blur-lg opacity-30 animate-pulse"></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('prenota')}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full font-bold shadow-lg shadow-amber-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Prenota Ora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-24 right-4 left-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 space-y-3 animate-fade-in">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-between group ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
                <span className={`text-2xl transition-transform duration-300 ${
                  activeSection === link.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`}>
                  →
                </span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('prenota')}
              className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl font-bold shadow-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              Prenota Ora
            </button>
          </div>
        </div>
      )}
    </>
  );
}
