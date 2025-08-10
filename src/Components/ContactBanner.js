// components/ContactBanner.jsx

const ContactBanner = () => {
  return (
    <section
      className="bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpg')", // 🔁 Replace with actual image path in /public
      }}
    >
      <div className="bg-black/50 w-full">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white text-3xl font-semibold mb-4 md:mb-0">
            Feel Free to Contact Us
          </h2>
          <button className="bg-white text-purple-800 font-medium px-8 py-3 rounded-full hover:scale-105 transition duration-200">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
