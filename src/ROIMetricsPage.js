import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const ROIMetricsPage = () => {
  const [activeMetric, setActiveMetric] = useState('deployment');
  const [counts, setCounts] = useState({
    deployment: 0,
    maintenance: 0,
    automation: 0,
    energy: 0
  });

  // Дані для графіків
  const metrics = {
    deployment: {
      title: "Економія на розгортанні",
      value: 73,
      color: "#007AFF",
      data: Array.from({ length: 12 }, (_, i) => ({
        month: `Month ${i + 1}`,
        value: Math.floor(73 * (1 - Math.exp(-i / 3)))
      }))
    },
    maintenance: {
      title: "Зниження витрат на обслуговування",
      value: 89,
      color: "#34C759",
      data: Array.from({ length: 12 }, (_, i) => ({
        month: `Month ${i + 1}`,
        value: Math.floor(89 * (1 - Math.exp(-i / 4)))
      }))
    },
    automation: {
      title: "Автоматизація процесів",
      value: 95,
      color: "#5856D6",
      data: Array.from({ length: 12 }, (_, i) => ({
        month: `Month ${i + 1}`,
        value: Math.floor(95 * (1 - Math.exp(-i / 2)))
      }))
    },
    energy: {
      title: "Скорочення енергоспоживання",
      value: 64,
      color: "#FF2D55",
      data: Array.from({ length: 12 }, (_, i) => ({
        month: `Month ${i + 1}`,
        value: Math.floor(64 * (1 - Math.exp(-i / 3)))
      }))
    }
  };

  // Анімація чисел
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const newCounts = { ...prev };
        Object.keys(metrics).forEach(key => {
          if (newCounts[key] < metrics[key].value) {
            newCounts[key] += 1;
          }
        });
        return newCounts;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const MetricCard = ({ id, metric }) => (
    <button
      className={`p-6 rounded-2xl transition-all duration-300 ${
        activeMetric === id 
          ? 'bg-gray-900 text-white scale-105' 
          : 'bg-gray-100 hover:bg-gray-200'
      }`}
      onClick={() => setActiveMetric(id)}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium mb-4">{metric.title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">{counts[id]}</span>
            <span className="text-xl">%</span>
          </div>
        </div>
        <ArrowUpRight 
          className={`w-6 h-6 ${
            activeMetric === id ? 'text-white' : 'text-gray-400'
          }`}
        />
      </div>
    </button>
  );

  return (
    <div className=" bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Реальні результати
          </h1>
          <p className="text-xl text-gray-600">
            Досягніть вражаючих результатів з UrbanWave
          </p>
        </div>

        {/* Сітка метрик */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Object.entries(metrics).map(([id, metric]) => (
            <MetricCard key={id} id={id} metric={metric} />
          ))}
        </div>

        {/* Графік */}
        {/* <div className="bg-gray-100 p-8 rounded-3xl">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics[activeMetric].data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={metrics[activeMetric].color}
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div> */}

        {/* Кнопка дії */}
        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
            Розпочати впровадження
            <ChevronRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ROIMetricsPage;