import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-[500px] md:h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.647574606375!2d77.38849431238526!3d28.567606992492625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5ab7522757%3A0x9ee00cb3a397d56e!2sSk-38!5e0!3m2!1sen!2sin!4v1755338131892!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
