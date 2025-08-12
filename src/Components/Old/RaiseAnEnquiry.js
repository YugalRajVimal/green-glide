import React from "react";

const RaiseAnEnquiry = () => {
  return (
    <section className="bg-purple-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Raise An Enquiry</h2>
          <p className="text-gray-200">
            Ensure assistance from the best leader that has years of experience
            in addressing business problems with automation & innovation.
          </p>
        </div>

        {/* Right Side */}
        <form className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-300"
            />
            <input
              type="text"
              placeholder="Your Number"
              className="bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none placeholder-gray-300"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default RaiseAnEnquiry;
