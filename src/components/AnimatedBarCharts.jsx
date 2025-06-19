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
        { year: 2020, value: 32813, change: "" },
        { year: 2021, value: 14111, change: "" },
        { year: 2022, value: 45048, change: "" },
      ],
    },
    {
      title: "Managed portfolio energy intensity",
      unit: "kWh/m²",
      data: [
        { year: 2019, value: 157, change: "-22%" },
        { year: 2020, value: 135, change: "" },
        { year: 2021, value: 128, change: "" },
        { year: 2022, value: 123, change: "" },
      ],
    },
    {
      title: "Managed portfolio energy consumption",
      unit: "kWh",
      data: [
        { year: 2019, value: 65198706, change: "-27%" },
        { year: 2020, value: 48784205, change: "" },
        { year: 2021, value: 49324077, change: "" },
        { year: 2022, value: 47790662, change: "" },
      ],
    },
  ];

  const barVariants = {
    hidden: { width: 0 },
    visible: { width: (value) => `${(value / Math.max(...chartData.flatMap(c => c.data.map(d => d.value)))) * 100}%`, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className="p-4 bg-gray-100 text-gray-800">
      {chartData.map((chart, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            {chart.title} <span className="text-sm">{chart.unit}</span>
          </h3>
          <div className="flex flex-col space-y-2">
            {chart.data.map((item, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  className="h-6 bg-gradient-to-r from-rose-700 to-rose-400 rounded-r"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={barVariants}
                  custom={item.value}
                >
                  <AnimatePresence>
                    {isVisible && (
                      <motion.span
                        className="ml-2 text-white font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {item.value.toLocaleString()}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                <span className="ml-4 text-sm">{item.year}</span>
                {item.change && (
                  <span className="ml-2 text-sm text-gray-600">{item.change}</span>
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
