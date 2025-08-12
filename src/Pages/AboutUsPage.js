import React from "react";
import AboutUsHero from "../Components/AboutUs/AboutUsHeader";
import MissionSection from "../Components/New/MissionSection";
import TestimonialSlider from "../Components/AboutUs/TestimonialSlider";
import StatsAndSteps from "../Components/AboutUs/StatsAndSteps";
import TeamSection from "../Components/AboutUs/TeamSection";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHero />
      <MissionSection />
      <TestimonialSlider />
      <StatsAndSteps />
      <TeamSection />
    </div>
  );
};

export default AboutUsPage;
