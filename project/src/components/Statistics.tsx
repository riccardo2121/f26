import { Award, Users, Scissors, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Stat {
  icon: any;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Clienti Felici',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    value: 15,
    suffix: '',
    label: 'Anni di Esperienza',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Scissors,
    value: 50000,
    suffix: '+',
    label: 'Servizi Completati',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Heart,
    value: 98,
    suffix: '%',
    label: 'Soddisfazione Cliente',
    color: 'from-rose-500 to-red-500'
  }
];

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.value);

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = newValue;
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            I Nostri Numeri Parlano
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Anni di esperienza e migliaia di clienti soddisfatti ci rendono il salone di fiducia a Roma
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: isVisible ? `fadeUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Counter */}
                <div className="text-center">
                  <div className={`text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {counters[index].toLocaleString()}{stat.suffix}
                  </div>
                  <p className="text-gray-300 font-semibold text-lg">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <stat.icon className="w-full h-full text-white transform rotate-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
