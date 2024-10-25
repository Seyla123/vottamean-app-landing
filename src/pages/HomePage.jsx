import React from 'react';
import HeroSection from '../components/section/HeroSection';
import HowDoesItWorkSection from '../components/section/HowDoesItWorkSection';
import BenefitSection from '../components/section/BenefitSection';
import StackingCard from '../components/common/StackingCard';
import SavingSection from '../components/section/SavingSection';
import TestiminialSection from '../components/section/TestiminialSection';
import FAQSection from '../components/section/FAQSection';
import StillGotQuestionSection from '@/components/section/StillGotQuestionSection';
import ConclusionSection from '@/components/section/ConclusionSection';
import PricingSection from '@/components/section/PricingSection';

function HomePage() {
  return (
    <div className='flex flex-col lg:gap-32 gap-16'>
      <HeroSection id='hero' />
      <HowDoesItWorkSection id='how-it-works' />
      <BenefitSection id='benefits' />
      <SavingSection id='saving' />
      <TestiminialSection id='testimonials' />
      <FAQSection id='faqs' />
      <StillGotQuestionSection />
      <PricingSection id='pricing' />
      <StackingCard id={'features'} />
      <ConclusionSection />
    </div>
  );
}

export default HomePage;
