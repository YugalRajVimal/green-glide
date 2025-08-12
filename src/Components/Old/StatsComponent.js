// src/components/StatsComponent.jsx
import React from "react";
import { FaUserCheck, FaBuilding, FaChartBar, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaUserCheck size={30} />,
    value: "500 +",
    label: "Happy Clients",
  },
  {
    icon: <FaBuilding size={30} />,
    value: "5 +",
    label: "Cities",
  },
  {
    icon: <FaChartBar size={30} />,
    value: "10 +",
    label: "Products",
  },
  {
    icon: <FaTrophy size={30} />,
    value: "5 +",
    label: "Years in Business",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const StatsComponent = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariant}
          >
            <div className="bg-white shadow-lg rounded-full p-6 mb-4">
              <div className="text-[#1a1a1a]">{stat.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
