// import { useState, useEffect } from 'react';

// const AnimatedArrowButton = ({ href = "#", text = "More", target = "_blank" }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [position, setPosition] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition(prev => (prev + 1) % 3);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <a
//       href={href}
//       target={target}
//       className="group inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <span className="relative font-medium">
//         {text}
//       </span>
//       <span className="relative w-32 h-5">
//         {/* Normal State Arrow */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 170 19"
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             isHovered ? 'opacity-0' : 'opacity-100'
//           }`}
//         >
//           <g transform={`translate(${84 + position * 20}, 9)`}>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               d="M51.039,0.059 C51.057,0.059 51.075,0.059 51.093,0.059 L73.087,0.054 L73.087,0.055 L73.087,8 L83.093,0.055 L72.968,-8"
//             />
//           </g>
//         </svg>
        
//         {/* Hover State Arrow */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 170 19"
//           className={`absolute inset-0 transition-opacity duration-300 ${
//             isHovered ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <g transform="translate(134, 0)">
//             <g transform="translate(17.835, 9.449)">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 d="M-16,0.054 L5.993,0.054 L5.993,8 L16,0.054 L5.875,-8"
//               />
//             </g>
//           </g>
//         </svg>
//       </span>
//     </a>
//   );
// };

// export default AnimatedArrowButton;

import { useState } from 'react';

const CircleArrowButton = ({ onClick, size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Map sizes to classes
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <button
    //   className={`relative ${sizeClasses[size]} rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 group`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* bg-black  rounded-full   */}
      <div className="absolute inset-0 flex items-center justify-center
       
      
      
      " style={{
    rotate: '270deg'
}}>
        <div className="relative w-6 h-6">
          {[1, 2, 3].map((index) => (
            <span
              key={index}
              className={`
                absolute 
                block 
                w-3 
                h-3 
                border-r-2 
                border-b-2 
                border-white 
                rotate-45
                opacity-0
                animate-pulse
                group-hover:animate-arrow-bounce
              `}
              style={{
                animation: 'arrow-animate 2s infinite',
                animationDelay: `${-0.2 * (index - 1)}s`,
                top: `${(index - 1) * 8}px`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes arrow-animate {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-10px, -10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(10px, 10px);
          }
        }

        .animate-arrow-bounce {
          animation: arrow-animate 2s infinite;
        }
      `}</style>
    </button>
  );
};

// Використання з текстом поруч
const AnimatedArrowButton = ({ text = "", href = "#", size = 'sm' }) => {
  return (
    <a 
      href={href}
      className="inline-flex items-center gap-4 hover:no-underline group 
     
      "
    >
      {/* <span className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors ">
        {text}
      </span> */}
      <CircleArrowButton size={size} />
    </a>
  );
};

export default AnimatedArrowButton;