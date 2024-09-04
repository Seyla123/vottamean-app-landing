import React from "react";
import { Box } from "@mui/material";
import { homeData } from "../../data/homeData";
import TestimonialCard from "../common/TestimonialCard";

const TestimonialSection = () => {
    return (
        <Box>
            <h2>{homeData.testimonialSection.mainTitle.title}</h2>
            <p>{homeData.testimonialSection.mainTitle.description}</p>
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
