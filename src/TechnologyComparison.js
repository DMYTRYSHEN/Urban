import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, Check, ArrowUpRight } from 'lucide-react';

const TechnologyComparison = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      name: "UrbanWave",
      description: "Інноваційна технологія для розумних міст",
      features: [
        "Швидкість до 3.4 Mбіт/с",
        "Наднизька затримка < 10 мс",
        "Радіус дії до 10 км + MESH",
        "Енергоспоживання < 1 Вт",
        "До 1,000,000 пристроїв на км²"
      ],
      specs: {
        speed: "1 Гбіт/с",
        range: "10 км",
        power: "< 1 Вт",
        devices: "100,000/км²",
        latency: "< 10 мс",
        cost: "Низька",
        security: "Військовий рівень"
      }
    },
    {
      name: "LoRaWAN",
      description: "Популярна LPWAN технологія",
      features: [
        "Швидкість до 50 кбіт/с",
        "Затримка 1-2 секунди",
        "Радіус дії до 15 км",
        "Наднизьке енергоспоживання",
        "До 10,000 пристроїв на км²"
      ],
      specs: {
        speed: "50 кбіт/с",
        range: "15 км",
        power: "< 0.1 Вт",
        devices: "10,000/км²",
        latency: "1-2 с",
        cost: "Середня",
        security: "Базовий рівень"
      }
    },
    {
      name: "Sigfox",
      description: "Глобальна IoT мережа",
      features: [
        "Швидкість до 100 біт/с",
        "Висока затримка 2-30 с",
        "Радіус дії до 50 км",
        "Наднизьке енергоспоживання",
        "До 1,000 пристроїв на км²"
      ],
      specs: {
        speed: "100 біт/с",
        range: "50 км",
        power: "< 0.1 Вт",
        devices: "1,000/км²",
        latency: "2-30 с",
        cost: "Висока",
        security: "Базовий рівень"
      }
    },
    {
      name: "NB-IoT",
      description: "Стільникова IoT мережа",
      features: [
        "Швидкість до 250 кбіт/с",
        "Затримка 1.5-10 с",
        "Радіус дії до 10 км",
        "Середнє енергоспоживання",
        "До 50,000 пристроїв на км²"
      ],
      specs: {
        speed: "250 кбіт/с",
        range: "10 км",
        power: "~ 2 Вт",
        devices: "50,000/км²",
        latency: "1.5-10 с",
        cost: "Висока",
        security: "Високий рівень"
      }
    },
    {
      name: "Zigbee",
      description: "Mesh-мережа для IoT",
      features: [
        "Швидкість до 250 кбіт/с",
        "Низька затримка < 100 мс",
        "Радіус дії до 100 м",
        "Низьке енергоспоживання",
        "До 65,000 пристроїв в мережі"
      ],
      specs: {
        speed: "250 кбіт/с",
        range: "100 м",
        power: "~ 0.5 Вт",
        devices: "65,000",
        latency: "< 100 мс",
        cost: "Низька",
        security: "Середній рівень"
      }
    }
  ];

  const handleOpenModal = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-grey-50 to-white-900 text-gray py-24">
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white-400 bg-clip-text text-gray">
            Нова ера IoT технологій
          </h2>
          <p className="text-xl text-white-400">
            Порівняйте NR+ з існуючими рішеннями та переконайтесь у перевагах
          </p>
        </div>
  
        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              // bg-[#1d1d1f]
              className="relative p-8 rounded-3xl  backdrop-blur-xl border border-white-800/50 hover:border-indigo-500/30 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
              <p className="text-gray-400 mb-6">{tech.description}</p>
              <ul className="space-y-3 mb-8">
                {tech.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* <Check className="w-5 h-5 text-indigo-500 shrink-0 mt-1" /> */}
                    <span className="text-indigo-500 text-xl mr-4">


                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                            <g clip-path="url(#clip0_269_6150)">
                                <path d="M11.9998 1.35693C17.8799 1.35693 22.6426 6.11966 22.6426 11.9998C22.6426 17.8799 17.8799 22.6426 11.9998 22.6426C6.11966 22.6426 1.35693 17.8799 1.35693 11.9998C1.35693 6.11966 6.11966 1.35693 11.9998 1.35693Z" fill="#4f46e5" stroke="#4f46e5" />
                                <path d="M10.7998 15.84L16.0455 7.88574" stroke="white" stroke-width="2" stroke-linecap="round" />
                                <path d="M10.8 15.84L7.88574 13.4058" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_269_6150">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <button
                onClick={() => handleOpenModal(tech)}
                // onClick={() => handleOpenModal(technologies[0])}
                className="group/button inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 transition-colors"
              >
                Дізнатись більше
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
  
      {/* Apple-style floating button */}
      <button
        onClick={() => handleOpenModal(technologies[0])}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/10 backdrop-blur-xl border border-black/20 text-gray px-8 py-4 rounded-full flex items-center gap-2 transition-all transform duration-500 hover:bg-white/20 ${
          showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        Порівняти технології
        <ChevronDown className="w-5 h-5" />
      </button>
  
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity">
          <div
            className={`w-full h-[90vh] md:h-[85vh] max-w-5xl bg-[#1d1d1f] rounded-t-3xl md:rounded-3xl transition-all duration-500 flex flex-col ${
              isClosing ? 'opacity-0 translate-y-full md:scale-95' : 'opacity-100 translate-y-0 md:scale-100'
            }`}
          >
            {/* Fixed Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white-800">
              <h3 className="text-2xl font-bold text-white">Порівняння технологій IoT</h3>
              {/* <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-white-800 hover:bg-white-700 transition-colors flex items-center justify-center group"
                aria-label="Закрити"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-gray transition-colors" />
              </button> */}
            </div>
  
            {/* Scrollable Content */}
            {/* <div className="flex-1 overflow-y-auto px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technologies.map((tech) => (
                  <div key={tech.name} className="space-y-6">
                    <div className="p-4 rounded-2xl bg-white-900">
                      <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(tech.specs).map(([key, value]) => (
                        <div key={key} className="p-4 rounded-2xl bg-white-900/50">
                          <p className="text-sm text-gray-400 capitalize">{key}</p>
                          <p className="text-lg font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
             <div className="flex-1 overflow-y-auto overflow-x-hidden px-8 py-6">
              {/* Feature Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {technologies.map((tech) => (
                  <div key={tech.name} className="space-y-6">
                    <div className="sticky top-0 z-10 pt-4 pb-6 bg-[#1d1d1f] bg-[#333333]">
                      <div className="text-center p-4 rounded-2xl bg-white-900">
                        <h4 className="text-xl font-bold mb-2  text-white">{tech.name}</h4>
                        <p className="text-indigo-400  text-white text-sm">{tech.description}</p>
                      </div>
                    </div>
                    
                    {/* Specifications */}
                    <div className="space-y-4">
                      {Object.entries(tech.specs).map(([key, value]) => (
                        <div key={key} className="p-4 rounded-2xl bg-white-900/50 bg-[#222222]  backdrop-blur-sm">
                          <p className="text-sm text-indigo-400  text-white capitalize">{key}</p>
                          <p className="text-lg font-medium text-indigo-400  text-white">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-white">Ключові особливості</h5>
                      {tech.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-white-900/30">
                          <Check className="w-5 h-5 text-indigo-500 shrink-0 mt-1" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Additional Details */}
                    <div className="p-6 rounded-2xl bg-white-900/30 space-y-4">
                      <h5 className="text-lg font-semibold text-white">Додаткова інформація</h5>
                      <p className="text-gray-400">
                        Детальний опис технології {tech.name}, її особливостей та переваг 
                        для розумної міської інфраструктури.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Footer */}
            <div className="border-t border-white-800 px-8 py-6">
            <div className="flex justify-center pb-8">
              <button
                onClick={handleCloseModal}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white-700 transition-colors flex items-center justify-center group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-gray transition-colors" />
              </button>
            </div>
           
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
  
};

export default TechnologyComparison;