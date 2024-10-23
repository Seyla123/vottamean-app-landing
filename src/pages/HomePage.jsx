import { Button } from "@/components/ui/button";
import React from "react";
import HeroSection from "@/components/section/HeroSection";
import CompanySection from "@/components/section/CompanySection";
import HowDoesItWorkSection from "@/components/section/HowDoesItWorkSection";
import BenefitSection from "@/components/section/BenefitSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <HowDoesItWorkSection />
      <BenefitSection />
    </>
  );
};

export default HomePage;
