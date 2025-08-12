import { FaCheck } from "react-icons/fa";
import { LucideSun, LucideCalendar, LucideRocket } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/aboutUsBannerImg.jpg')", // Replace with your image path
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold mb-3">Services</h1>
          <div className="flex items-center justify-center gap-2 bg-white text-black rounded-full px-4 py-1 text-sm">
            <span>Green Glide</span>
            <span className="text-gray-500">{`»`}</span>
            <span className="font-medium">Services</span>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="max-w-5xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          GreenGlide is a sustainable urban mobility company that offers
          electric scooters for hire, making eco-friendly travel accessible and
          convenient in cities. Our fleet of sleek, app-connected e-scooters is
          perfect for short-distance commutes and spontaneous trips, helping
          reduce emissions and congestion while enhancing urban mobility.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {/* Daily Plan */}
          <div className="bg-white shadow-lg transition-transform hover:scale-105 min-w-[300px] max-w-[300px] rounded-2xl p-8 flex flex-col gap-4 items-start">
            <LucideSun className="text-green-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Plan</h3>
            <p className="text-4xl font-bold mb-1">₹200</p>
            <p className="text-gray-500 mb-6">/day</p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Perfect for short-term
                use
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Maintenance included
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> GPS tracking & app
                control
              </li>
            </ul>
            <button className="mt-auto bg-green-500 text-white rounded-full px-6 py-3 font-semibold hover:bg-green-600 transition">
              BOOK NOW →
            </button>
          </div>

          {/* Weekly Plan */}
          <div className="bg-green-200 shadow-lg transition-transform hover:scale-105 min-w-[300px] max-w-[300px] rounded-2xl p-8 flex flex-col gap-4 items-start">
            <LucideCalendar className="text-green-700 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Weekly Plan</h3>
            <p className="text-4xl font-bold mb-1">₹1,200</p>
            <p className="text-gray-600 mb-6">/week</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-600" /> Unlimited rides (within
                city)
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-600" /> Free maintenance &
                servicing
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-600" /> GPS tracking & app
                control
              </li>
            </ul>
            <button className="mt-auto bg-white border border-green-600 text-green-700 rounded-full px-6 py-3 font-semibold hover:bg-green-100 transition">
              GET STARTED →
            </button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-black shadow-lg transition-transform hover:scale-105 min-w-[300px] max-w-[300px] rounded-2xl p-8 flex flex-col gap-4 items-start text-white">
            <LucideRocket className="text-green-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
            <p className="text-4xl font-bold mb-1">₹4,500</p>
            <p className="text-gray-400 mb-6">/month</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Best value for commuters
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Charging at partner
                stations
              </li>
            </ul>
            <button className="mt-auto bg-green-500 text-white rounded-full px-6 py-3 font-semibold hover:bg-green-600 transition">
              SUBSCRIBE →
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Ride Green?</h2>
        <p className="mb-6 text-lg">
          Download our app and start your eco-friendly commute today.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          DOWNLOAD APP
        </button>
      </section>
    </div>
  );
}
