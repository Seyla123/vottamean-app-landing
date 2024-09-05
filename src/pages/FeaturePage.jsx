import React from "react";
import OverviewSection from "../components/section/OverviewSection";
import HighlightSection from "../components/section/HighlightSection";
import FaqSection from "../components/section/FaqSection";
import ContactSection from "../components/section/ContactSection";
import { Box } from "@mui/material";

const FeaturePage = () => {
    return (
        <Box>
            <OverviewSection />
            <HighlightSection />
            <FaqSection />
            <ContactSection />
        </Box>
    );
};

export default FeaturePage;
