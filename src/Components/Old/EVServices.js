import React from "react";

const EVServices = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Quality Services */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-green-500">Quality</span>
          <span className="text-gray-900">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* EV Scooter Rentals */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/ev-scooter.jpg"
              alt="EV Scooter Rentals"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-center font-semibold text-gray-800">
                EV Scooter Rentals
              </p>
            </div>
          </div>

          {/* EV Charging Station */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/images/ev-charging.jpg"
              alt="EV Charging Station"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-center font-semibold text-gray-800">
                EV Charging Station
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognizations */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-green-500">Our</span>
          <span className="text-gray-900">Recognizations</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-md shadow-md flex items-center justify-center p-4">
            <img
              src="/images/logo1.png"
              alt="Start In UP"
              className="max-h-16 object-contain"
            />
          </div>
          <div className="bg-white rounded-md shadow-md flex items-center justify-center p-4">
            <img
              src="/images/logo2.png"
              alt="Startup India"
              className="max-h-16 object-contain"
            />
          </div>
          <div className="bg-white rounded-md shadow-md flex items-center justify-center p-4">
            <img
              src="/images/logo3.png"
              alt="Shoonya"
              className="max-h-16 object-contain"
            />
          </div>
          <div className="bg-white rounded-md shadow-md flex items-center justify-center p-4">
            <img
              src="/images/logo4.png"
              alt="Incubation Centre"
              className="max-h-16 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVServices;
