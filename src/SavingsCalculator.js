// import React from 'react';
// import { useState } from 'react';

// const SavingsCalculator = () => {
//   const [infrastructure, setInfrastructure] = useState({
//     meters: 1000,
//     lights: 500,
//     chargers: 10,
//     barriers: 20
//   });
  
//   const [savings, setSavings] = useState(null);
  
//   const calculateSavings = () => {
//     // Приблизні розрахунки економії
//     const metersSavings = infrastructure.meters * 50; // 50 грн/місяць на лічильник
//     const lightsSavings = infrastructure.lights * 100; // 100 грн/місяць на ліхтар
//     const chargerIncome = infrastructure.chargers * 1000; // 1000 грн/місяць на зарядку
//     const barriersSavings = infrastructure.barriers * 200; // 200 грн/місяць на шлагбаум
    
//     const monthlySavings = metersSavings + lightsSavings + chargerIncome + barriersSavings;
//     const yearlyData = Array.from({length: 12}, (_, i) => ({
//       month: i + 1,
//       savings: monthlySavings * (i + 1)
//     }));
    
//     setSavings({
//       monthly: monthlySavings,
//       yearly: monthlySavings * 12,
//       chart: yearlyData
//     });
//   };

//   return (
//     <section className="py-20 bg-white" id="calculator">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Калькулятор економії</h2>
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Кількість лічильників
//               </label>
//               <input
//                 type="number"
//                 value={infrastructure.meters}
//                 onChange={(e) => setInfrastructure({...infrastructure, meters: parseInt(e.target.value) || 0})}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Кількість ліхтарів
//               </label>
//               <input
//                 type="number"
//                 value={infrastructure.lights}
//                 onChange={(e) => setInfrastructure({...infrastructure, lights: parseInt(e.target.value) || 0})}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Кількість зарядних станцій
//               </label>
//               <input
//                 type="number"
//                 value={infrastructure.chargers}
//                 onChange={(e) => setInfrastructure({...infrastructure, chargers: parseInt(e.target.value) || 0})}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Кількість шлагбаумів
//               </label>
//               <input
//                 type="number"
//                 value={infrastructure.barriers}
//                 onChange={(e) => setInfrastructure({...infrastructure, barriers: parseInt(e.target.value) || 0})}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//           </div>
          
//           <button
//             onClick={calculateSavings}
//             className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
//           >
//             <Calculator className="w-5 h-5" />
//             Розрахувати економію
//           </button>
          
//           {savings && (
//             <div className="mt-8">
//               <div className="grid md:grid-cols-2 gap-6 mb-8">
//                 <div className="p-6 bg-indigo-50 rounded-xl">
//                   <h4 className="text-lg font-semibold mb-2">Місячна економія</h4>
//                   <p className="text-2xl font-bold text-indigo-600">
//                     {savings.monthly.toLocaleString()} грн
//                   </p>
//                 </div>
//                 <div className="p-6 bg-indigo-50 rounded-xl">
//                   <h4 className="text-lg font-semibold mb-2">Річна економія</h4>
//                   <p className="text-2xl font-bold text-indigo-600">
//                     {savings.yearly.toLocaleString()} грн
//                   </p>
//                 </div>
//               </div>
              
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={savings.chart}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line 
//                       type="monotone" 
//                       dataKey="savings" 
//                       stroke="#2563eb" 
//                       strokeWidth={2}
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default calculateSavings;
// import { FaCalculator } from "react-icons/fa"; 


  import React, { useState } from "react";
  import { FaCalculator } from 'react-icons/fa'; // Іконка калькулятора
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts'; // Графіки

  
  const SavingsCalculator = () => {
    const [infrastructure, setInfrastructure] = useState({
      meters: 1000,
      lights: 500,
      chargers: 10,
      barriers: 20,
    });
  
    const [savings, setSavings] = useState(null);
  
    const calculateSavings = () => {
      const metersSavings = infrastructure.meters * 50; // 50 грн/місяць на лічильник
      const lightsSavings = infrastructure.lights * 100; // 100 грн/місяць на ліхтар
      const chargerIncome = infrastructure.chargers *120; // 1000 грн/місяць на зарядку
      const barriersSavings = infrastructure.barriers * 200; // 200 грн/місяць на шлагбаум
  
      const monthlySavings = metersSavings + lightsSavings + chargerIncome + barriersSavings;
      const yearlyData = Array.from({ length: 12 }, (_, i) => ({
        month: i + 1,
        savings: monthlySavings * (i + 1),
      }));
  
      setSavings({
        monthly: monthlySavings,
        yearly: monthlySavings * 12,
        chart: yearlyData,
      });
    };
  
    return (
      <section className="py-20 bg-white" id="calculator">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Калькулятор економії</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Кількість лічильників
                </label>
                <input
                  type="number"
                  value={infrastructure.meters}
                  onChange={(e) =>
                    setInfrastructure({
                      ...infrastructure,
                      meters: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Кількість ліхтарів
                </label>
                <input
                  type="number"
                  value={infrastructure.lights}
                  onChange={(e) =>
                    setInfrastructure({
                      ...infrastructure,
                      lights: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Кількість зарядних станцій
                </label>
                <input
                  type="number"
                  value={infrastructure.chargers}
                  onChange={(e) =>
                    setInfrastructure({
                      ...infrastructure,
                      chargers: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Кількість шлагбаумів
                </label>
                <input
                  type="number"
                  value={infrastructure.barriers}
                  onChange={(e) =>
                    setInfrastructure({
                      ...infrastructure,
                      barriers: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
  
            <button
              onClick={calculateSavings}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaCalculator className="w-5 h-5" />
              Розрахувати економію
            </button>
  
            {savings && (
              <div className="mt-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-indigo-50 rounded-xl">
                    <h4 className="text-lg font-semibold mb-2">Місячна економія</h4>
                    <p className="text-2xl font-bold text-indigo-600">
                      {savings.monthly.toLocaleString()} грн
                    </p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-xl">
                    <h4 className="text-lg font-semibold mb-2">Річна економія</h4>
                    <p className="text-2xl font-bold text-indigo-600">
                      {savings.yearly.toLocaleString()} грн
                    </p>
                  </div>
                </div>
  
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={savings.chart}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="savings" stroke="#2563eb" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default SavingsCalculator;
  


