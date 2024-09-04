import React from "react";
import { Box, Typography } from "@mui/material";
import { homeData } from "../../data/homeData";
import TestimonialCard from "../common/TestimonialCard";
import TitleSection from "./TitleSection";

const TestimonialSection = () => {
    return (
        <Box>
            <TitleSection
                title={homeData.testimonialSection.mainTitle.title}
                description={homeData.testimonialSection.mainTitle.description}
            />

            <Box display="flex" flexDirection="column" gap={2}>
                {homeData.testimonialSection.testimonials.map(
                    (testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            logo={testimonial.logo}
                            title={testimonial.title}
                            description={testimonial.description}
                            profile={testimonial.profile}
                        />
                    )
                )}
            </Box>
        </Box>
    );
};

export default TestimonialSection;
