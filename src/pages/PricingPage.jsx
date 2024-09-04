import React from "react";
import PricingSection from "../components/section/PricingSection";
import ContactSection from "../components/section/ContactSection";
import FaqSection from "../components/section/FaqSection";
import { Box } from "@mui/material";

const PricingPage = () => {
    return (
        <Box>
            <PricingSection />
            <FaqSection />
            <ContactSection />
        </Box>
    );
};

export default PricingPage;
