import React from "react";
import { Box } from "@mui/material";
import ContactSection from "../components/section/ContactSection";
import FaqSection from "../components/section/FaqSection";
import LongContactSection from "../components/section/LongContactSection";
function ContactPage() {
    return (
        <Box>
            <LongContactSection />
            <FaqSection />
            <ContactSection />
        </Box>
    );
}

export default ContactPage;
