<<<<<<< HEAD
import React from 'react'
import FaqSection from '../components/section/FaqSection'
const HomePage = () => {
  return (
    <div>HomePage

      <FaqSection/>
    </div>
  )
}
=======
import React from 'react';
import HeroSection from '../components/section/HeroSection';
import TrustedSection from '../components/section/TrustedSection';
import OurFeatureSection from '../components/section/OurFeatureSection';
import { Box } from '@mui/material';

const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <TrustedSection />
            <OurFeatureSection />
        </Box>
    );
};
>>>>>>> 43dce3a (Feature : Tabs design)

export default HomePage;
