import React from "react";

import HeroSection from "../Components/HeroSection";
import EVChargingSection from "../Components/EVChargingSection";
import StatsComponent from "../Components/StatsComponent";
import ChargingSolution from "../Components/ChargingSolution";
import HireEScooter from "../Components/HireEScooter";
import ContactBanner from "../Components/ContactBanner";
import WhyChooseUs from "../Components/WhyChooseUs";
import BatterySwappingStations from "../Components/BatterySwappingStations";
import EVServices from "../Components/EVServices";
import TestimonialSwiper from "../Components/TestimonialSwiper";
import RaiseAnEnquiry from "../Components/RaiseAnEnquiry";
import DownloadApps from "../Components/DownloadApps";
import MissionSection from "../Components/New/MissionSection";
import AdvantagesSection from "../Components/New/AdvantageSection";
import PricingSection from "../Components/New/PricingSection";
import TestimonialSlider from "../Components/New/TestimonialSlider";
import ScooterCard from "../Components/New/ScooterCard";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <AdvantagesSection />
      <PricingSection />
      <TestimonialSlider />
      {/* <ScooterCard /> */}
      {/* <EVChargingSection />
      <StatsComponent />
      <ChargingSolution />
      <HireEScooter />
      <ContactBanner />
      <WhyChooseUs />
      <BatterySwappingStations />
      <EVServices />
      <TestimonialSwiper />
      <RaiseAnEnquiry />
      <DownloadApps /> */}
    </>
  );
};

export default LandingPage;
