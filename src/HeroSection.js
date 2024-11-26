import React, { useState, useEffect } from "react";
import { ArrowRight, Globe, Wifi, Battery, Lock } from "lucide-react";
import Vid from "./hero1.mp4";
 import Vid23 from './gold.mp4';
import Vid2 from "./20svideo.mp4";
import video3 from "./Timeline.mp4";


const HeroSection = () => {


  const [isBlockVisible, setIsBlockVisible] = useState(true);

      const toggleVisibility = () => {
        setIsBlockVisible((prev) => !prev); // Змінюємо стан видимості
    };

  


   

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden " style={{ borderRadius: "40px 40PX 0PX 0PX" }}>
 
            <video className="absolute inset-0 w-full h-full object-cover z-0" src={video3} autoPlay loop muted playsInline></video>

   
           { isBlockVisible &&  
           <div id="Hideunhide" className={`relative z-20 max-w-3xl text-center transform transition-all duration-700 p-8 `}>
             
                <span class="w-fit mx-auto flex items-left justify-center bg-emerald-50 rounded-full text-white-600 text-center text-sm font-medium leading-5 px-3 py-1  bg-white/5 backdrop-blur-lg border border-white/10 hover:border-indigo-500/50">
                    Зустрічайте майбутнє бездротового зв'язку
                </span>
                

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Майбутнє міст — у ваших руках із <span className="text-indigo-500">UrbanWave</span>.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-400">
                    Інновації, що зв'язують усе навколо. Mesh-мережа, де кожен пристрій є одночасно клієнтом і ретранслятором. UrbanWave з технологією нестільникового 5G – це як перейти від свічки до лазера. Це не просто крок вперед. Це
                    квантовий стрибок у майбутнє комунікацій
                </p><div class="flex justify-center pb-8 bg-red" bis_skin_checked="1">
                <button class="w-12 h-12 rounded-full bg-red backdrop-blur-xl hover:bg-red-700 transition-colors flex items-center justify-center group" onClick={toggleVisibility}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fffff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6 text-gray-400 group-hover:text-gray transition-colors">
                 <path d="M18 6 6 18"></path><path d="m6 6 12 12">
                  </path>
                 </svg>
                </button>
               </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
                    {[
                        {
                            icon: <Globe className="w-8 h-8" />,
                            title: "Нестільникова 5G",
                            description: "Швидкісний зв'язок без 5G інфраструктури",
                        },
                        {
                            icon: <Wifi className="w-8 h-8" />,
                            title: "SMART інфраструктура",
                            description: "Автоматизований збір даних та управління",
                        },
                        {
                            icon: <Battery className="w-8 h-8 " />,
                            title: "Ефективність",
                            description: "Наднизьке споживання енергії",
                        },
                        {
                            icon: <Lock className="w-8 h-8" />,
                            title: "Безпека даних",
                            description: "Захищений протокол передачі даних",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="text-indigo-400 mb-4">{feature.icon}</div>
                            <h3 className="text font-semibold text-white mb-2 ">{feature.title}</h3>
                            {/* mt-3 text-3xl text-gray-700 sm:text-4xl xl:text-5xl */}
                            <p className="text-indigo-100/80 xl:text">{feature.description}</p>
                        </div>
                    ))}
                </div>
                {/* <div className="mt-8 flex justify-center gap-4">
                <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-lg font-medium transition-all">
                     Дізнатись більше
                 </button>
                <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-lg font-medium transition-all" 
           
                >
            Спробувати безкоштовно Click
                 </button>
                 <button
                     onClick={toggleVisibility}
                     className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-lg font-medium transition-all"
                 > Приховати надпис та дивить відео
                    {isBlockVisible ? "Сховати" : "Показати"}
               </button>

              

                 </div> */}
            
          </div>}
    
        </section>
    );
};

export default HeroSection;
































// ////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { ArrowRight, Globe, Wifi, Battery, Lock } from "lucide-react";
// import video3 from "./Timeline.mp4";

// const HeroSection = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [isBlockVisible, setIsBlockVisible] = useState(true); // Стан видимості блоку

//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });
//         const target = document.querySelector("#hero");
//         if (target) observer.observe(target);
//         return () => observer.disconnect();
//     }, []);

//     const toggleVisibility = () => {
//         setIsBlockVisible((prev) => !prev); // Змінюємо стан видимості
//     };

//     return (
//         <section id="hero" className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden " style={{ borderRadius: "40px 40PX 0PX 0PX" }}>
//             {/* Background video */}
//             <video className="absolute inset-0 w-full h-full object-cover z-0" src={video3} autoPlay loop muted playsInline></video>

//             {/* Content */}
//             {isBlockVisible && (
//                 <div
//                     id="Hideunhide"
//                     className={`relative z-20 max-w-3xl text-center transform transition-all duration-700 ${
//                         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//                     }`}
//                 >
//                     <span className="w-fit mx-auto flex items-left justify-center bg-emerald-50 rounded-full text-white-600 text-center text-sm font-medium leading-5 px-3 py-1 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-indigo-500/50">
//                         Зустрічайте майбутнє бездротового зв'язку
//                     </span>

//                     <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//                         Майбутнє міст — у ваших руках із <span className="text-indigo-500">UrbanWave</span>.
//                     </h1>
//                     <p className="mt-4 text-lg md:text-xl text-gray-400">
//                         Інновації, що зв'язують усе навколо. Mesh-мережа, де кожен пристрій є одночасно клієнтом і ретранслятором. UrbanWave з технологією нестільникового 5G – це як перейти від свічки до лазера. Це не просто крок вперед. Це
//                         квантовий стрибок у майбутнє комунікацій.
//                     </p>
//                     <button  onClick={toggleVisibility}
//                     className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-lg font-medium transition-all">
//              Спробувати безкоштовно Click= Hideunhide 
//           </button>
//                 </div>
//             )}


//             <div className="mt-8">
//                 <button
//                     onClick={toggleVisibility}
//                     className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-lg font-medium transition-all"
//                 > враовраовраорвоарвоарвраовроаваор
//                     {isBlockVisible ? "Сховати" : "Показати"}
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
