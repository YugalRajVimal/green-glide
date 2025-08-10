// Battery Swapping Stations Component

export default function BatterySwappingStations() {
    return (
      <section className="w-full bg-white py-20 px-4 md:px-16 lg:px-32 text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  
          {/* Left Image Section */}
          <div>
            <img
              src="/battery-swapping-station.png" // Replace with your image path
              alt="Battery Swapping Station"
              className="w-full rounded-[40px] shadow-xl"
            />
          </div>
  
          {/* Right Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-[#8DC63F]">Battery Swapping</span>{" "}
              <span className="text-[#0C2340]">Stations</span>
            </h2>
  
            <p className="text-[#8DC63F] font-medium mb-4">Ready To Drive In 30 Seconds</p>
  
            <h3 className="text-2xl font-bold text-[#0C2340] mb-4">
              Zeway Swapping Stations
            </h3>
  
            <p className="mb-4 text-gray-600">
              <span className="font-semibold text-[#0C2340]">
                Zeway battery swapping stations
              </span>{" "}
              are equipped with powering machines capable of charging minimum 8-10 batteries at a time.
              These stations facilitate riders to swap batteries within 60 seconds and get ready for a new ride immediately.
            </p>
  
            <p className="text-gray-600">
              <span className="font-semibold text-[#0C2340]">
                Zeway Battery swapping stations
              </span>{" "}
              can be installed at public places e.g. shopping malls, Schools, Universities, Multiplexes, Manufacturing Hubs etc.
            </p>
          </div>
        </div>
      </section>
    );
  }
  