import React from "react";

const DownloadApps = () => {
  return (
    <section className="bg-[#0c2c3c] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* E-Charging App */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Download E-Charging App!</h3>
          <p className="text-gray-300 mb-4">
            Find and book your nearest electric vehicle charging station within
            few minutes with just a few clicks using the Green Glide Mobility
            charging app.
          </p>
          <img
            src="/images/google-play.png"
            alt="Google Play"
            className="h-12"
          />
        </div>

        {/* E-Scooter Rental App */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Download E-Scooter Rental App!
          </h3>
          <p className="text-gray-300 mb-4">
            Experience seamless electric scooter rentals in minutes with just a
            few taps using the Green Glide Mobility app.
          </p>
          <img
            src="/images/google-play.png"
            alt="Google Play"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApps;
