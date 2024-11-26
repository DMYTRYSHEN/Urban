// import React from "react";
// import { motion } from "framer-motion";

// const HeroBlock = () => {
//   const text = "Перший у світі нестільниковий стандарт технології 5G";

//   // Варіанти анімації для кожної літери
//   const letterAnimation = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black text-white">
//       <motion.div
//         className="text-center"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           visible: {
//             transition: {
//               staggerChildren: 0.05, // Затримка між анімаціями літер
//             },
//           },
//         }}
//       >
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
//           {text.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               variants={letterAnimation}
//               className="inline-block"
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroBlock;


// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// const HeroBlock = () => {
//   const [isDispersed, setIsDispersed] = useState(false);
//   const controls = useAnimation();

//   const text = "Перший у світі нестільниковий стандарт технології 5G";

//   // Ефект розпаду
//   const handleMouseEnter = async () => {
//     setIsDispersed(true);
//     await controls.start("dispersed");
//   };

//   // Ефект повернення
//   const handleMouseLeave = async () => {
//     setIsDispersed(false);
//     await controls.start("assembled");
//   };

//   // Анімаційні варіанти для літер
//   const letterVariants = {
//     initial: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//     dispersed: {
//       opacity: 0,
//       x: () => Math.random() * 400 - 200, // Розкид по горизонталі
//       y: () => Math.random() * 400 - 200, // Розкид по вертикалі
//       rotate: () => Math.random() * 360, // Випадкове обертання
//       transition: { duration: 1 },
//     },
//     assembled: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       rotate: 0,
//       transition: { duration: 1 },
//     },
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <motion.div
//         className="text-center"
//         initial="initial"
//         animate="visible"
//         variants={{
//           visible: {
//             transition: { staggerChildren: 0.05 },
//           },
//         }}
//       >
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
//           {text.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               variants={letterVariants}
//               animate={isDispersed ? controls : "visible"}
//               className="inline-block"
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroBlock;


///////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const HeroBlock = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const text = "Перший у світі нестільниковий стандарт технології 5G";

//   // Відстеження прогресу скролу
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.scrollHeight - windowHeight;
//       const progress = Math.min(scrollY / documentHeight, 1); // Значення від 0 до 1
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Варіанти анімації для літер
//   const letterVariants = {
//     initial: {
//       y: 0,
//       rotate: 0,
//     },
//     scattered: (index) => ({
//       y: `${200 + scrollProgress * 500}px`, // Літають вниз
//       rotate: `${Math.random() * 360 * scrollProgress}deg`, // Хаотичне обертання
//       transition: {
//         duration: 1,
//         delay: index * 0.05, // Кожна буква затримується трохи довше
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-[200vh] bg-black text-white overflow-hidden">
//       {/* Стартовий текст */}
//       <motion.div
//         className="fixed top-1/3 text-center"
//         initial="initial"
//         animate="scattered"
//         variants={{
//           scattered: {
//             transition: { staggerChildren: 0.05 },
//           },
//         }}
//       >
//         <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
//           {text.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               custom={index}
//               variants={letterVariants}
//               className="inline-block"
//               style={{
//                 display: "inline-block",
//                 position: "relative",
//               }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div>

//       {/* Додатковий контент (щоб дозволити скрол) */}
//       <div className="absolute bottom-0 h-[100vh] w-full bg-gray-800 text-white flex items-center justify-center">
//         <p className="text-lg">Прокрутіть до кінця, щоб побачити розпад букв</p>
//       </div>
//     </div>
//   );
// };

// export default HeroBlock;


import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const HeroBlock = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  const text = "Перший у світі нестільниковий стандарт технології 5G";

  // Відстеження прокручування в межах HeroBlock
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const sectionTop = heroRef.current.offsetTop;
        const sectionHeight = heroRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const progress = Math.min(
          Math.max((scrollY - sectionTop) / sectionHeight, 0),
          1
        ); // Обмеження від 0 до 1
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Варіанти анімації літер
  const letterVariants = {
    initial: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    scattered: (index) => ({
      x: `${Math.random() * 500 * (Math.random() > 0.5 ? 1 : -1)}px`, // Хаотичний рух вліво/вправо
      y: `${Math.random() * 500 * (Math.random() > 0.5 ? 1 : -1)}px`, // Хаотичний рух вгору/вниз
      rotate: `${Math.random() * 360 * scrollProgress}deg`, // Хаотичне обертання
      opacity: 1 - scrollProgress, // Плавне зникнення при прокручуванні
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden"
    >
      <motion.div
        className="absolute text-center"
        initial="initial"
        animate="scattered"
        variants={{
          scattered: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroBlock;
