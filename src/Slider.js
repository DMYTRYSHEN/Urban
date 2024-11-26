// import React, { useState } from 'react';

// const pages = [
//   { title: "Behov", content: "Sammen afdekker vi, hvad I har brug for. Maskiner, betalingsmetode og indretning af vaskeriet." },
//   { title: "Aftale", content: "Vores aftale er enkel og forståelig. Vi arbejder sammen for at finde de bedste løsninger." },
//   { title: "Etablering", content: "Vi monterer, indretter og klargør jeres nye vaskeri." },
//   { title: "Onboarding", content: "Vi hjælper med at onboarde og træne jeres medarbejdere." },
//   { title: "Drift", content: "Vi hjælper med den løbende drift og vedligeholdelse." },
// ];

// const Slider = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupContent, setPopupContent] = useState("");

//   const handlePageChange = (index) => {
//     setCurrentPage(index);
//   };

//   const openPopup = (content) => {
//     setPopupContent(content);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto my-8">
//       {/* Слайдер */}
//       <div className="flex space-x-4 overflow-hidden border-2 rounded-lg bg-gray-100">
//         {pages.map((page, index) => (
//           <div
//             key={index}
//             className={`w-full flex-shrink-0 transition-transform duration-500 ${index === currentPage ? "transform scale-100" : "transform scale-95 opacity-50"}`}
//           >
//             <div className="p-6 text-center">
//               <h2 className="text-2xl font-semibold">{page.title}</h2>
//               <p className="mt-4">{page.content}</p>
//               <button
//                 onClick={() => openPopup(page.content)}
//                 className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Кнопки для переходу між сторінками */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {pages.map((page, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index)}
//             className={`px-4 py-2 text-white rounded-full ${index === currentPage ? 'bg-blue-500' : 'bg-gray-500'}`}
//           >
//             {page.title}
//           </button>
//         ))}
//       </div>

//       {/* Попап */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-lg font-semibold">Detaljer</h3>
//             <p className="mt-4">{popupContent}</p>
//             <button
//               onClick={closePopup}
//               className="mt-4 py-2 px-4 bg-red-500 text-white rounded-full"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Slider;


// import React, { useState } from 'react';
// import './Slider.css'; // Для додаткових стилів

// const pages = [
//   { title: "Behov", content: "Sammen afdekker vi, hvad I har brug for. Maskiner, betalingsmetode og indretning af vaskeriet." },
//   { title: "Aftale", content: "Vores aftale er enkel og forståelig. Vi arbejder sammen for at finde de bedste løsninger." },
//   { title: "Etablering", content: "Vi monterer, indretter og klargør jeres nye vaskeri." },
//   { title: "Onboarding", content: "Vi hjælper med at onboarde og træne jeres medarbejdere." },
//   { title: "Drift", content: "Vi hjælper med den løbende drift og vedligeholdelse." },
// ];

// const Slider = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handlePageChange = (index) => {
//     setCurrentPage(index);
//   };

//   return (
//     <div className="slider-book">
//       <div className="tabs">
//         {pages.map((page, index) => (
//           <div
//             key={index}
//             className={`tab ${index === currentPage ? 'active' : ''}`}
//             onClick={() => handlePageChange(index)}
//           >
//             {page.title}
//           </div>
//         ))}
//       </div>

//       <div className="content">
//         <div className="page">
//           <div className="page-title">{pages[currentPage].title}</div>
//           <div className="page-content">{pages[currentPage].content}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;



// import React, { useState } from "react";

// const options = [
//   {
//     background:
//       "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
//     icon: "fas fa-Usering",
//     main: "Blonkisoaz",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
//     icon: "fas fa-snowflake",
//     main: "Oretemauw",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
//     icon: "fas fa-ChevronLeft",
//     main: "Iteresuselle",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
//     icon: "fas fa-tint",
//     main: "Idiefe",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
//     icon: "fas fa-sun",
//     main: "Inatethi",
//     sub: "Omuke trughte a otufta",
//   },
// ];

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
//       <div className="flex space-x-2 w-full max-w-4xl h-96 overflow-hidden">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`relative flex-grow flex flex-col justify-end p-4 rounded-lg transition-all duration-700 ease-in-out ${
//               activeIndex === index ? "flex-[5] rounded-2xl" : "flex-[1]"
//             }`}
//             style={{
//               backgroundImage: `url(${option.background})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             onClick={() => setActiveIndex(index)}
//           >
//             <div
//               className={`absolute inset-0 bg-black transition-opacity ${
//                 activeIndex === index ? "opacity-20" : "opacity-50"
//               }`}
//             ></div>
//             <div
//               className={`relative z-10 transition-all duration-500 ${
//                 activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//               }`}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-white text-black flex justify-center items-center rounded-full">
//                   <i className={option.icon}></i>
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-lg">{option.main}</h3>
//                   <p className="text-sm">{option.sub}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useState } from "react";

// const options = [
//   {
//     background:
//       "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
//     icon: "fas fa-Usering",
//     main: "Blonkisoaz",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
//     icon: "fas fa-snowflake",
//     main: "Oretemauw",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
//     icon: "fas fa-tree",
//     main: "Iteresuselle",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
//     icon: "fas fa-tint",
//     main: "Idiefe",
//     sub: "Omuke trughte a otufta",
//   },
//   {
//     background:
//       "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
//     icon: "fas fa-sun",
//     main: "Inatethi",
//     sub: "Omuke trughte a otufta",
//   },
// ];

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
//       <div className="flex w-full max-w-6xl h-96">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`relative transition-all duration-700 ease-in-out ${
//               activeIndex === index
//                 ? "flex-[10] rounded-2xl"
//                 : "flex-[1] rounded-lg"
//             } overflow-hidden cursor-pointer`}
//             style={{
//               backgroundImage: `url(${option.background})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             onClick={() => setActiveIndex(index)}
//           >
//             {/* Темна тінь */}
//             <div
//               className={`absolute inset-0 bg-black transition-opacity ${
//                 activeIndex === index ? "opacity-30" : "opacity-50"
//               }`}
//             ></div>
//             {/* Іконка та текст */}
//             <div
//               className={`absolute bottom-5 left-5 z-10 transition-all duration-500 ${
//                 activeIndex === index
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-10 opacity-0"
//               }`}
//             >
//               <div className="flex items-center space-x-4">
//                 <div className="w-14 h-14 bg-white text-gray-900 rounded-full flex justify-center items-center">
//                   <i className={`${option.icon} text-2xl`}></i>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold">{option.main}</h3>
//                   <p className="text-sm">{option.sub}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useState } from "react";
import { Handshake,ChevronLeft, ChevronRight, Sun, Snowflake, Chevron, Droplet, User } from "lucide-react";
import u1 from './1.png'
import u2 from './2.png'
import u3 from './3.png'
import u4 from './4.png'
import u5 from './5.png'

import { useSwipeable } from "react-swipeable";

const options = [
  {
    background:
      // "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
      u3, 
    icon: <User size={28} />,
    main: "Mesh",
    sub: "Комфортна мережа без залежності від мобільних операторів",
  },
  {
    background:
      // "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      u2,
    icon: <Snowflake size={28} />,
    main: "Надійність даних",
    sub: "Захист та двостороній обмін данними", 
  },
  {
    background:
      // "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
       u1,
    icon: <Handshake size={28} />,
    main: "Універсальність",
    sub: "Позбутися проводів у вашій IOT мережі просто",
  },
  {
    background:
      // "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
      u4,
    icon: <Droplet size={28} />,
    main: "Автоматизований збір даних",
    sub: "Лічильник води, газу, електроенергії може передавати данні для взаєморозрахцнків або глибокого аналізу з ШІ",
  },
  {
    background:
      // "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
      u5,
    icon: <Sun size={28} />,
    main: "Децентралізована мережа",
    sub: "Мережа як блокчейн, просто та доступно",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % options.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? options.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl flex w-full max-w-6xl h-40 overflow-hidden relative">Коли Стів Джобс представив перший iPhone, світ змінився. Сьогодні UrbanWave робить те саме для світу IoT. </h1>
      <br />
      {/* Секція картинок */}
      <div
        {...swipeHandlers}
        className="flex w-full max-w-6xl h-96 overflow-hidden relative"
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`relative mx-[5px] transition-all duration-700 ease-in-out ${
              activeIndex === index
                ? "flex-[8] rounded-2xl"
                : "flex-[1] rounded-lg"
            } overflow-hidden cursor-pointer`}
            style={{
              backgroundImage: `url(${option.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className={`absolute inset-0 bg-black transition-opacity ${
                activeIndex === index ? "opacity-30" : "opacity-50"
              }`}
            ></div>
            <div
              className={`absolute bottom-5 left-5 z-10 transition-all duration-500 ${
                activeIndex === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white text-gray-900 rounded-full flex justify-center items-center">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{option.main}</h3>
                  <p className="text-sm">{option.sub}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Навігація */}
      <div className="flex items-center space-x-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <h1 className="text-5xl flex w-full max-w-6xl h-40 overflow-hidden relative"> Це не просто технологія. Це нова ера в історії комунікацій</h1>
     
    </div>
  );
};

export default Slider;
