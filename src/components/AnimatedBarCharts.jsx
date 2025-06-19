// src/components/AnimatedBarCharts.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedBarCharts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const chartData = [
    {
      title: "Managed portfolio carbon footprint",
      unit: "tCO₂e",
      data: [
        { year: 2019, value: 38673, change: "+16%" },
        { year: 2020, value: 32813 },
        { year: 2021, value: 14111 },
        { year: 2022, value: 45048 },
      ],
    },
    {
      title: "Managed portfolio energy intensity",
      unit: "kWh/m²",
      data: [
        { year: 2019, value: 157, change: "-22%" },
        { year: 2020, value: 135 },
        { year: 2021, value: 128 },
        { year: 2022, value: 123 },
      ],
    },
    {
      title: "Managed portfolio energy consumption",
      unit: "kWh",
      data: [
        { year: 2019, value: 65198706, change: "-27%" },
        { year: 2020, value: 48784205 },
        { year: 2021, value: 49324077 },
        { year: 2022, value: 47790662 },
      ],
    },
  ];

  const max = Math.max(...chartData.flatMap((c) => c.data.map((d) => d.value)));

  return (
    <div className="p-6 bg-gray-100 text-gray-800 space-y-10">
      {chartData.map((chart, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">
            {chart.title} <span className="text-sm text-gray-600">({chart.unit})</span>
          </h3>
          <div className="space-y-3">
            {chart.data.map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="w-12 text-sm font-medium">{item.year}</span>
                <motion.div
                  className="h-6 bg-gradient-to-r from-rose-600 to-rose-400 rounded-md"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${(item.value / max) * 100}%` } : { width: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <span className="pl-2 text-white text-sm font-semibold">
                    {item.value.toLocaleString()}
                  </span>
                </motion.div>
                {item.change && (
                  <span className="text-xs text-gray-500">{item.change}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBarCharts;
