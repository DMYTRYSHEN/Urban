import React from "react";

interface StatsCardPropsType {
  count: string;
  title: string;
  description: string;
}

function StatsCard({ count, title, description }: StatsCardPropsType) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-4xl font-bold text-blue-gray-800">{count}</h2>
      <hr className="mt-2 mb-4 max-w-xs mx-auto" />
      <h3 className="text-xl font-semibold text-blue-gray-800">{title}</h3>
      {/* <p className="text-gray-500 mt-2 text-base leading-7">{description}</p> */}
    </div>
  );
}

const stats = [
  {
    count: "3.4 Мбіт/с ",
    title: "Швидкість передачі даних",
    // description: "You're racing ahead in your marathon training goals.",
  },
  {
    count: "<10 мс",
    title: "Наднизька затримка",
    // description: "Your financial acumen is paying off—literally.",
  },
  {
    count: "5+ км +MESH",
    title: "Вражаючий радіус покриття",
    // description:"Your commitment to health is inspiring and your stats show it.",
  },
  {
    count: "256-біт",
    title: "Військовий рівень шифрування",
    // description: "Your contributions have made an impact in your community.",
  },
];

export function StatsSection8() {
  return (
    <section className="container mx-auto py-10 px-4 lg:py-28">
      <div className="lg:mb-24 mb-10 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-gray-800 mb-4">
          Відкрий нові можливості для свого стартапу чи бізнесу
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Створюйй рішеня, які будуть перевершувати очікування твоїх клієнтів
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 xl:grid-cols-2 lg:gap-24 items-center">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <br /> <br />
          <h2 className="text-5xl font-bold text-green-500">Нульові витрати на базові станції та чистоти</h2>
          <h3 className="text-xl font-semibold text-blue-gray-800 mt-2">
          Нестільникова mesh-мережа нового покоління для розумних міст та бізнесу.
          Швидкість 5G без базових станцій.
          </h3>
          <br /><a href="#" title="" class="
 inline-flex
 items-center
 justify-center
 px-8
 py-3
 text-base
 font-bold
 leading-7
 text-white
 transition-all
 duration-200
 bg-gray-900
 border border-transparent
 rounded-md
 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
 hover:bg-gray-600
 focus:ring-offset-[#FFE942]
 " role="button">Замовити демо</a><br />
          
        </div>
        <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
          {stats.map((props, index) => (
            <StatsCard key={index} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection8;
