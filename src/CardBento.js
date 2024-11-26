// import React from "react";

// export function CardBento() {
//   return (
//     <section className="grid h-screen place-items-center bg-gray-100 p-4">
//       <div className="max-w-[24rem] bg-white shadow-lg rounded-lg overflow-hidden">
//         {/* Card Header */}
//         <div className="p-4 bg-blue-50">
//           <p className="text-sm font-medium text-blue-gray-600">Enterprise</p>
//           <h2 className="mt-1 text-xl font-bold text-blue-gray-800">
//             Autodesk looks to the future of 3D printing with Project Escher
//           </h2>
//         </div>
//         {/* Card Body */}
//         <div className="p-4">
//           <p className="text-sm text-gray-600">
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers. I understand culture. I am
//             the nucleus.
//           </p>
//         </div>
//         {/* Card Footer */}
//         <div className="p-4 bg-blue-50 flex justify-end">
//           <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//             Read More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CardBento;




// import React from "react";

// const bentoItems = [
//   {
//     title: "Innovative Design",
//     description: "Revolutionizing how we approach technology and art.",
//     size: "col-span-2 row-span-1",
//   },
//   {
//     title: "Eco-Friendly Solutions",
//     description: "Promoting sustainable and green practices.",
//     size: "col-span-1 row-span-2",
//   },
//   {
//     title: "Cutting-Edge Tech",
//     description: "Leveraging the latest innovations for a better tomorrow.",
//     size: "col-span-1 row-span-1",
//   },
//   {
//     title: "Global Outreach",
//     description: "Connecting people and businesses across the world.",
//     size: "col-span-2 row-span-1",
//   },
//   {
//     title: "Seamless Integration",
//     description: "Uniting systems for a cohesive user experience.",
//     size: "col-span-1 row-span-1",
//   },
//   {
//     title: "Future-Ready Products",
//     description: "Preparing for the needs of tomorrow.",
//     size: "col-span-1 row-span-1",
//   },
//   {
//     title: "Sleek and Minimal",
//     description: "Redefining simplicity in design.",
//     size: "col-span-1 row-span-2",
//   },
//   {
//     title: "Reliable Support",
//     description: "Ensuring constant assistance for our users.",
//     size: "col-span-2 row-span-1",
//   },
// ];

// export function CardBento() {
//   return (
//     <section className="container mx-auto px-4 py-16 bg-blue-100">
//       <div
//         className="grid gap-6"
//         style={{
//           gridTemplateColumns: "repeat(auto-fit, 1fr)", 
//           gridAutoRows: "minmax(120px, auto)",
//         }}
//       >
//         {bentoItems.map((item, index) => (
//           <div
//             key={index}
//             className={`bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between group ${item.size}`}
//             style={{
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//           >
//             <h2 className="text-xl font-bold text-gray-800 group-hover:text-black">
//               {item.title}
//             </h2>
//             <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-800">
//               {item.description}
//             </p>
//             {/* Tooltip */}
//             <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-0 mt-2 w-full bg-black text-white p-2 text-xs rounded shadow-lg">
//               Learn more about "{item.title}"
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CardBento;


// import React from "react";

// const bentoItems = [
//   {
//     title: "Innovative Design",
//     description: "Revolutionizing how we approach technology and art.",
//     size: "col-span-2 row-span-1",
//   },
//   {
//     title: "Eco-Friendly Solutions",
//     description: "Promoting sustainable and green practices.",
//     size: "col-span-1 row-span-2",
//   },
//   {
//     title: "Cutting-Edge Tech",
//     description: "Leveraging the latest innovations for a better tomorrow.",
//     size: "col-span-1 row-span-1",
//   },
//   {
//     title: "Global Outreach",
//     description: "Connecting people and businesses across the world.",
//     size: "col-span-2 row-span-1",
//   },
//   {
//     title: "Seamless Integration",
//     description: "Uniting systems for a cohesive user experience.",
//     size: "col-span-1 row-span-1",
//   },
//   {
//     title: "Future-Ready Products",
//     description: "Preparing for the needs of tomorrow.",
//     size: "col-span-1 row-span-1",
//   },
//   {
//     title: "Sleek and Minimal",
//     description: "Redefining simplicity in design.",
//     size: "col-span-1 row-span-2",
//   },
//   {
//     title: "Reliable Support",
//     description: "Ensuring constant assistance for our users.",
//     size: "col-span-2 row-span-1",
//   },
// ];

// export function CardBento() {
//   return (
//     <section className="bg-black text-white min-h-screen px-4 py-8">
//       <div
//         className="grid gap-4 md:gap-6"
//         style={{
//           gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//           gridAutoRows: "minmax(100px, auto)",
//         }}
//       >
//         {bentoItems.map((item, index) => (
//           <div
//             key={index}
//             className={`relative bg-white text-black rounded-lg shadow-lg p-4 flex flex-col justify-between group ${item.size}`}
//             style={{
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//           >
//             {/* Title */}
//             <h2 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-black">
//               {item.title}
//             </h2>

//             {/* Description */}
//             <p className="mt-2 text-sm md:text-base text-gray-600 group-hover:text-gray-800">
//               {item.description}
//             </p>

//             {/* Tooltip */}
//             <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full left-0 mt-2 w-full bg-black text-white p-2 text-xs rounded shadow-lg">
//               Learn more about "{item.title}"
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default CardBento;




import React from "react";
import { X } from 'lucide-react';
import ic1 from './young-girl.jpg';
import ic2 from './domestic.jpg'
import AnimatedArrowButton from './AnimatedArrowButton';

const CardBento = () => {
  const cards = [
    {
      title: "Коли завтра стає запізно",
      image: ic1,
      // icon: "📱",
      bgColor: "bg-gray-100",
      description:"2024: UrbanWave доступний для всіх 2025: 40% ринку вже зайнято 2026: Залишилось 20% квот на впровадження 2027: Листа очікування на 2 роки вперед Запитання: на якому етапі ви хочете приєднатися до революції?",
      span: "col-span-2 row-span-2",
    },
    {
      title: "Одне рішення, що запускає ланцюгову реакцію успіху",
      description: "Марія ніколи не забуде той день. Презентація перед радою директорів. Її рекомендація впровадити UrbanWave здавалася ризикованою. 'Що як це не спрацює?' - шепотіли скептики. 'А що як спрацює?' - відповіла вона. Вже через рік: Продуктивність +156% Витрати -73% Інновації? Безмежні Сьогодні Марія - СЕО. А ті скептики? Вони шукають нову роботу.",
      // icon: "⚡",
      bgColor: "bg-indigo-100 ",
    },
    {
      title: "Час - це більше, ніж гроші",
      description:
        "Кожного тижня: 37 компаній стають клієнтами UrbanWave 158 тендерів виграються завдяки нашій технології 1,247 нових проектів запускаються на нашій платформі 23 стартапи створюють революційні рішення А ви все ще думаєте?",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Момент істини",
      description: "3:47 ранку. Система моніторингу критичної інфраструктури. Збій основного каналу зв'язку.Два сценарії:Без UrbanWave:4:12 - втрата зв'язку з 70% датчиків 4:23 - повна зупинка виробництва 4:45 - перші публікації в ЗМІ 5:30 - падіння акцій на 12% Збитки: $2.7 мільйона З UrbanWave: 3:47:01 - миттєве перемикання на резервний канал 3:47:02 - відновлення роботи всіх систем Збитки: $0 А яку історію ви хочете розповісти своїм акціонерам?",
      bgColor: "bg-red-100 ",
    },
    {
      title: "Час вибирати своє майбутнє",
      description:"Кожна секунда - це вибір. Кожна хвилина - це можливість. Кожне рішення - це майбутнє. Ваш вибір зараз визначить, де ви будете завтра. Натисніть кнопку.  Майбутнє не чекає. А ми не чекаємо вічно.",
      image: ic2,
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Заголовок */}
      <br /> <br /><br /><br /><br />
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold">Технології завтрашнього дня вже сьогодні</h1>
        <p className="text-gray-600 mt-4">
        Уявіть мережу, де кожен пристрій є одночасно і клієнтом, і ретранслятором. Наша  технологія створює самоорганізовану mesh-мережу, що автоматично масштабується та самовідновлюється. 
        Це як мати власну приватну 5G мережу, але без величезних інвестицій в інфраструктуру.
        </p>
      </div>

      {/* Сітка карток */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md ${card.bgColor} p-6 ${
              card.span || ""
            }`}
          >
            {/* Зображення, якщо є */}
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}

            {/* Контент */}
            <div className={`relative z-10 ${card.image ? "text-white" : ""}`}>
              {card.icon && <div className="text-4xl mb-4">{card.icon}</div>}
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              {card.description && <p className="text-sm">{card.description}</p>}
            </div>

            {/* Плавна кнопка */}
            {/* <div className="absolute bottom-4 right-4 z-10 text-xl font-bold">+</div> */}
       
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBento;


