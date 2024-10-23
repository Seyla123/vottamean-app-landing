import React from "react";
import HeroSection from "@/components/section/HeroSection";
import CompanySection from "@/components/section/CompanySection";
import HowDoesItWorkSection from "@/components/section/HowDoesItWorkSection";
import BenefitSection from "@/components/section/BenefitSection";
import FeatureSection from "@/components/section/FeatureSection";

const HomePage = () => {
  return (
    <div className="flex flex-col md:gap-32 gap-16">
      <HeroSection />
      <CompanySection />
      <HowDoesItWorkSection />
      <BenefitSection />
      <FeatureSection />
      
    </div>
  );
};

export default HomePage;
