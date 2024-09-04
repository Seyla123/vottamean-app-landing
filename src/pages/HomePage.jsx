import React from "react";
import HeroSection from "../components/section/HeroSection";
import TrustedSection from "../components/section/TrustedSection";
import OurFeatureSection from "../components/section/OurFeatureSection";
import { Box } from "@mui/material";

const HomePage = () => {
    return (
        <Box>
            <HeroSection />
            <TrustedSection />
            <OurFeatureSection />
        </Box>
    );
};

export default HomePage;
