import React from "react";
import HeroSection from "@/components/section/HeroSection";
import CompanySection from "@/components/section/CompanySection";
import HowDoesItWorkSection from "@/components/section/HowDoesItWorkSection";
import BenefitSection from "@/components/section/BenefitSection";
import FeatureSection from "@/components/section/FeatureSection";
import StackingCard from "@/components/common/StackingCard";
import SavingSection from "@/components/section/SavingSection";

const HomePage = () => {
  return (
    <div className="flex flex-col md:gap-32 gap-16">
      <HeroSection />
      <CompanySection />
      <HowDoesItWorkSection />
      <BenefitSection />
      <SavingSection />
      <StackingCard />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
