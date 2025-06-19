import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBarCharts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const chartData = [
    {
      title: "User Interface Design Projects",
      unit: "Projects",
      data: [
        { year: 2019, value: 15, change: "+20%" },
        { year: 2020, value: 18 },
        { year: 2021, value: 25 },
        { year: 2022, value: 30 },
      ],
      gradient: { from: "#6366F1", to: "#818CF8" },
    },
    {
      title: "Web Development Features Implemented",
      unit: "Features",
      data: [
        { year: 2019, value: 45, change: "+10%" },
        { year: 2020, value: 50 },
        { year: 2021, value: 58 },
        { year: 2022, value: 65 },
      ],
      gradient: { from: "#4F46E5", to: "#6366F1" },
    },
    {
      title: "Frontend Architecture Components",
      unit: "Components",
      data: [
        { year: 2019, value: 12, change: "+8%" },
        { year: 2020, value: 13 },
        { year: 2021, value: 15 },
        { year: 2022, value: 16 },
      ],
      gradient: { from: "#EC4899", to: "#F472B6" },
    },
    {
      title: "Deployment Pipelines Automated",
      unit: "Pipelines",
      data: [
        { year: 2021, value: 3 },
        { year: 2022, value: 5, change: "+67%" },
        { year: 2023, value: 7 },
        { year: 2024, value: 10 },
      ],
      gradient: { from: "#3730A3", to: "#4338CA" },
    },
  ];

  const max = Math.max(...chartData.flatMap((c) => c.data.map((d) => d.value)));

  return (
    <div className="p-6 space-y-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg max-w-6xl mx-auto mb-10">
      {chartData.map((chart, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {chart.title} <span className="text-sm text-gray-600 dark:text-gray-400">({chart.unit})</span>
          </h3>
          <div className="space-y-3">
            {chart.data.map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="w-12 text-sm font-medium text-gray-700 dark:text-gray-300">{item.year}</span>
                <motion.div
                  className="h-6 rounded-md flex items-center cursor-pointer"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${(item.value / max) * 100}%` } : { width: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{ background: `linear-gradient(to right, ${chart.gradient.from}, ${chart.gradient.to})` }}
                  whileHover={{
                    scaleX: 1.02,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2) dark:shadow-lg-dark",
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scaleX: 1.01 }}
                >
                  <span className="pl-2 text-white text-sm font-semibold whitespace-nowrap">
                    {item.value.toLocaleString()}
                  </span>
                </motion.div>
                {item.change && (
                  <span
                    className={`text-xs ${
                      item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {item.change}
                  </span>
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