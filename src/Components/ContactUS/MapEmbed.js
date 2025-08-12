import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-[500px] md:h-[400px] relative">
      <iframe
        title="London Eye Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19817.91607355045!2d-0.123!3d51.5033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b9d0d77b15%3A0x90db50ac7d2c1b57!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1690488123456"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
