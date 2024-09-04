import React from "react";
import HeroSection from "../components/section/HeroSection";
import TrustedSection from "../components/section/TrustedSection";
import OurFeatureSection from "../components/section/OurFeatureSection";
import TestimonialSection from "../components/section/TestimonialSection";
import { Box } from "@mui/material";

const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <TrustedSection />
            <OurFeatureSection />
            <TestimonialSection />
        </Box>
    );
};

export default HomePage;
