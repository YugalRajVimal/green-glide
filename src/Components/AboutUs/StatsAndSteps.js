import React from "react";
import { FaChargingStation, FaCarSide, FaNetworkWired, FaBolt, FaGasPump, FaWrench } from "react-icons/fa";
import { MdOutlineElectricCar } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const StatsAndSteps = () => {
  const stats = [
    {
      icon: <FaChargingStation className="text-green-500 text-3xl" />,
      number: "1582+",
      label: "Charging sessions",
    },
    {
      icon: <IoLocationSharp className="text-green-500 text-3xl" />,
      number: "650m",
      label: "Green kms driven",
    },
    {
      icon: <FaCarSide className="text-green-500 text-3xl" />,
      number: "562+",
      label: "Service Stations",
    },
    {
      icon: <MdOutlineElectricCar className="text-green-500 text-3xl" />,
      number: "282+",
      label: "Electric Vehicles",
    },
  ];

  const steps = [
    {
      icon: <FaNetworkWired className="text-green-500 text-3xl" />, // Replaced with actual icon
      title: "Our Network",
      description:
        "Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.",
    },
    {
      icon: <FaBolt className="text-green-500 text-3xl" />, // Replaced with actual icon
      title: "Charge Points",
      description:
        "Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.",
    },
    {
      icon: <FaGasPump className="text-green-500 text-3xl" />, // Replaced with actual icon
      title: "EV Stations",
      description:
        "Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.",
    },
    {
      icon: <FaWrench className="text-green-500 text-3xl" />, // Replaced with actual icon
      title: "Quality Service",
      description:
        "Sed sed condimentum massa. Morbi auctor vestibulum urna, ut interdum.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center pb-16">
      {/* Stats Section */}
      <div className="bg-black text-white w-[90%] md:w-2/3 flex -translate-y-1/2 flex-wrap justify-around rounded-tl-3xl rounded-br-3xl py-8 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3 my-2">
            {stat.icon}
            <div>
              <p className="text-2xl font-bold">{stat.number}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Steps Section */}
      <div className="text-center py-10">
        <p className="text-green-500 font-semibold">EV SERVICES STEPS</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          3 easy steps to get quick help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10 px-4 md:px-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {step.icon} {/* Replaced img with icon */}
              <h3 className="font-bold mt-4">
                <span className="text-green-500">
                  {String(index + 1).padStart(2, "0")}.
                </span>{" "}
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsAndSteps;
