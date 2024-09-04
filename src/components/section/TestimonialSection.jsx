import React from "react";
import { Box, Typography, Grid } from "@mui/material";
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

            <Grid container spacing={2}>
                {homeData.testimonialSection.testimonials.map(
                    (testimonial, index) => (
                        <Grid item key={index} xs={12} md={6}>
                            <TestimonialCard
                                logo={testimonial.logo}
                                description={testimonial.description}
                                profile={testimonial.profile}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </Box>
    );
};

export default TestimonialSection;
