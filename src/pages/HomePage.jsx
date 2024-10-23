import { Button } from "@/components/ui/button";
import React from "react";
import HeroSection from "@/components/section/HeroSection";
import CompanySection from "@/components/section/CompanySection";
import HowDoesItWorkSection from "@/components/section/HowDoesItWorkSection";
import BenefitSection from "@/components/section/BenefitSection";

const HomePage = () => {
  return (
    <div className="flex flex-col md:gap-16 gap-8">
      <HeroSection />
      <CompanySection />
      <HowDoesItWorkSection />
      <BenefitSection />
    </div>
  );
};

export default HomePage;
