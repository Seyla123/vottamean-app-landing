import React from "react";
import HeroSection from "../components/section/HeroSection";
import TrustedSection from "../components/section/TrustedSection";
import OurFeatureSection from "../components/section/OurFeatureSection";
import TestimonialSection from "../components/section/TestimonialSection";
import PricingSection from "../components/section/PricingSection";
import { Box } from "@mui/material";
import FaqSection from "../components/section/FaqSection";
import ContactSection from "../components/section/ContactSection";

const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <TrustedSection />
            <OurFeatureSection />
            <TestimonialSection />
            <PricingSection />
            <FaqSection />
            <ContactSection />
        </Box>
    );
};

export default HomePage;
