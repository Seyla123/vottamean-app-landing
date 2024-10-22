import { Button } from '@/components/ui/button';
import React from 'react';
import HeroSection from '@/components/section/HeroSection';
import CompanySection from '@/components/section/CompanySection';
import HowDoesItWorkSection from '@/components/section/HowDoesItWorkSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <HowDoesItWorkSection />
    </>
  );
};

export default HomePage;
