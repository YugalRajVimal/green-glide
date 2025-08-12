import React from "react";

import HeroSection from "../Components/New/HeroSection";
import EVChargingSection from "../Components/Old/EVChargingSection";
import StatsComponent from "../Components/Old/StatsComponent";
import ChargingSolution from "../Components/Old/ChargingSolution";
import HireEScooter from "../Components/Old/HireEScooter";
import ContactBanner from "../Components/Old/ContactBanner";
import WhyChooseUs from "../Components/Old/WhyChooseUs";
import BatterySwappingStations from "../Components/Old/BatterySwappingStations";
import EVServices from "../Components/Old/EVServices";
import TestimonialSwiper from "../Components/Old/TestimonialSwiper";
import RaiseAnEnquiry from "../Components/Old/RaiseAnEnquiry";
import DownloadApps from "../Components/Old/DownloadApps";
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
