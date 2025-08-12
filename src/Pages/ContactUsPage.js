import React from "react";
import ContactUsHeader from "../Components/ContactUS/ContactUsHeader";
import ContactSection from "../Components/ContactUS/ContactSection";
import ContactSection2 from "../Components/ContactUS/ContactSection2";
import MapEmbed from "../Components/ContactUS/MapEmbed";

const ContactUsPage = () => {
  return (
    <div>
      <ContactUsHeader />
      <ContactSection />
      <ContactSection2 />
      <MapEmbed />
    </div>
  );
};

export default ContactUsPage;
