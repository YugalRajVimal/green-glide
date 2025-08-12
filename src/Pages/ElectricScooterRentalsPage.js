import React from "react";
import ElectricScooterRentalsHeroSection from "../Components/ElectricScooterRentals/ElectricScooterRentalsHeroSection";
import ScooterBusinessSection from "../Components/ElectricScooterRentals/ScooterBusinessSection";
import WhyChooseGreenGlide from "../Components/ElectricScooterRentals/WhyChooseGreenGlide";
import EnterpriseMobilitySection from "../Components/ElectricScooterRentals/EnterpriseMobilitySection";
import ScooterRentalSection from "../Components/ElectricScooterRentals/ScooterRentalSection";
import WhoCanBenefit from "../Components/ElectricScooterRentals/WhoCanBenefit";
import TestimonialSlider from "../Components/New/TestimonialSlider";

const ElectricScooterRentalsPage = () => {
  return (
    <div>
      <ElectricScooterRentalsHeroSection />
      <ScooterBusinessSection />
      <WhyChooseGreenGlide />
      <EnterpriseMobilitySection />
      <ScooterRentalSection />
      <WhoCanBenefit />
      <TestimonialSlider />
    </div>
  );
};

export default ElectricScooterRentalsPage;
