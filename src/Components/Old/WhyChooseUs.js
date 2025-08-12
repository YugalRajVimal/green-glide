// components/WhyChooseUs.jsx

import { FaBatteryFull, FaNetworkWired, FaGasPump, FaCar } from "react-icons/fa";

const benefits = [
  {
    icon: <FaBatteryFull />, // Replaced with SVGs/icons as needed
    title: "Environment Friendly",
    desc: "Zeway’s electric scooters produce zero emissions, contributing to a cleaner, greener planet. With no fuel burning, they help lower carbon footprints and support global sustainability efforts.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Cost Effective",
    desc: "Appreciate amazingly reasonable rides at only ₹1.5/-* per Km. A completely energized battery conveys a scope of 70 to 100 kilometres, making it an economical and efficient choice for everyday driving.",
  },
  {
    icon: <FaGasPump />,
    title: "No Driving License Needed",
    desc: "Don’t have a driving license? No worries! Our scooters are easy to ride, with speeds between 25 km/h and 30 km/h, so anyone can use them.",
  },
  {
    icon: <FaCar />,
    title: "Easy to Use",
    desc: "Our mobile app makes everything simple! You can track your rides, check how much you’ve used, book rentals, and keep an eye on your activity—all in one place.",
  },
  {
    icon: <FaBatteryFull />,
    title: "Reliable Performance",
    desc: "Our electric scooters are designed to deliver best experience with dependable performance, ensuring smooth rides and hassle-free operation every time you hit the road.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Zero Pollution",
    desc: "Switch to e-scooters and help the environment! They don’t make noise or release harmful gases, keeping the air clean and the streets quiet.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f7f9fc] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          <span className="text-green-600 font-bold">Why </span>
          <span className="text-gray-800">Choose Us?</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 bg-white shadow-md rounded-full p-4 text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition">
            View Zeway Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
