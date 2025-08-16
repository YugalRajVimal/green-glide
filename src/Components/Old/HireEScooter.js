// components/HireEScooter.jsx

export default function HireEScooter() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          <span className="text-green-600 font-bold">Hire</span>{" "}
          <span className="text-[#152C4E]">E - Scooter</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Green Glide Lite */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <img
                src="/zeway-lite.png"
                alt="Zeway Lite Logo"
                width={100}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Green Glide Lite
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                * Scheme valid for annual Subscription. <br />
                Security deposit required.
              </p>

              <div className="bg-lime-500 text-white font-semibold text-lg rounded-full py-2 px-4 mt-6">
                Hire at <span className="text-xl font-bold">Rs.99*</span> /Day
              </div>

              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                Light weight, affordable, scooter for students and office staffs
                | 30-40 Km in One Charge | Detachable Battery | Charge with
                Normal 16Amp Socket | Zero Maintenance | No DL Required
              </p>
            </div>

            <button className="mt-6 w-full bg-black text-white rounded-full py-2 font-semibold hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

          {/* Green Glide Plus */}
          <div className="bg-[#C6F6A3] rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <img
                src="/zeway-plus.png"
                alt="Green Glide Plus Logo"
                width={100}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Green Glide Plus
              </h3>
              <p className="text-sm text-green-900 mt-1">
                * Scheme valid for annual Subscription. <br />
                Security deposit required.
              </p>

              <div className="bg-white text-black font-semibold text-lg rounded-full py-2 px-4 mt-6 inline-block">
                Hire at <span className="text-xl font-bold">Rs.149*</span> /Day
              </div>

              <p className="text-sm text-gray-800 mt-4 leading-relaxed">
                Light weight, affordable, scooter for all age groups | 50-60 Km
                in Single Charge | Detachable Battery | Charge with Normal 16Amp
                Socket | Zero Maintenance | No DL Required
              </p>
            </div>

            <button className="mt-6 w-full bg-black text-white rounded-full py-2 font-semibold hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

          {/* Green Glide Prime */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <img
                src="/zeway-prime.png"
                alt="Green Glide Prime Logo"
                width={100}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900">
                Green Glide Prime
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                * Scheme valid for annual Subscription. <br />
                Security deposit required.
              </p>

              <div className="bg-lime-500 text-white font-semibold text-lg rounded-full py-2 px-4 mt-6">
                Hire at <span className="text-xl font-bold">Rs.199*</span> /Day
              </div>

              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                Affordable, scooter for all age groups | 90-100 Km in Single
                Charge | Detachable Battery | Charge with Normal 16Amp Socket |
                Zero Maintenance
              </p>
            </div>

            <button className="mt-6 w-full bg-black text-white rounded-full py-2 font-semibold hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
