import React from "react";
import HeroSection from "../components/section/HeroSection";
import HowDoesItWorkSection from "../components/section/HowDoesItWorkSection";
import BenefitSection from "../components/section/BenefitSection";
import StackingCard from "../components/common/StackingCard";
import SavingSection from "../components/section/SavingSection";
import TestiminialSection from "../components/section/TestiminialSection";
import FAQSection from "../components/section/FAQSection";
import StillGotQuestionSection from "@/components/section/StillGotQuestionSection";
import ConclusionSection from "@/components/section/ConclusionSection";
import PricingSection from "@/components/section/PricingSection";

function HomePage() {
  return (
    <div className="flex flex-col lg:gap-32 gap-16">
      <HeroSection />
      <HowDoesItWorkSection />
      <BenefitSection />
      <SavingSection />
      <StackingCard />
      <TestiminialSection />
      <FAQSection />
      <StillGotQuestionSection />
      <PricingSection />
      <ConclusionSection />
    </div>
  );
}

export default HomePage;
