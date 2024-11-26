import React, { useEffect, useState } from 'react';
import { ArrowRight, Globe, Wifi, Battery, Lock } from 'lucide-react';

const HeroSection2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 background-image: url('./images/placeholder.jpg'); opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Розумне місто
            <span className="block text-blue-400">майбутнього сьогодні</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Інноваційна IoT екосистема на базі технології NR+ для розумної міської інфраструктури
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all group">
              Розпочати проект
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium backdrop-blur-sm transition-all">
              Дізнатись більше
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
          {[
            {
              icon: <Globe className="w-8 h-8" />,
              title: "NR+ Технологія",
              description: "Швидкісний зв'язок без 5G інфраструктури"
            },
            {
              icon: <Wifi className="w-8 h-8" />,
              title: "Розумна інфраструктура",
              description: "Автоматизований збір даних та управління"
            },
            {
              icon: <Battery className="w-8 h-8" />,
              title: "Енергоефективність",
              description: "Наднизьке споживання енергії"
            },
            {
              icon: <Lock className="w-8 h-8" />,
              title: "Безпека даних",
              description: "Захищений протокол передачі даних"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-100/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;