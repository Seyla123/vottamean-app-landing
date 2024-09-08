import React from "react";
import { aboutData, ourVision, whyChooseWaveTrack } from "../data/aboutData";
import { Box, Container, Typography } from "@mui/material";
import TitleSection from "../components/section/TitleSection";
import ContactSection from "../components/section/ContactSection";
import FaqSection from "../components/section/FaqSection";

const AboutPage = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TitleSection
                        title={aboutData.aboutSection.mainTitle.title}
                        description={
                            aboutData.aboutSection.mainTitle.description
                        }
                    />
                    <Box
                        component="img"
                        src={aboutData.aboutSection.image}
                        alt="meeting picture"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        maxWidth: {
                            xs: "330px",
                            sm: "660px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                        mt: "32px",
                    }}
                >
                    {/* content with text */}
                    {aboutData.contents.map((data, index) => (
                        <Box key={index}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                fontWeight="bold"
                                sx={{
                                    mt: "16px",
                                }}
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                gutterBottom
                                sx={{
                                    mt: "8px",
                                }}
                            >
                                {data.description}
                            </Typography>
                        </Box>
                    ))}
                    {/* our vision content */}
                    {ourVision.map((data, index) => (
                        <Box key={index}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                fontWeight="bold"
                                sx={{
                                    mt: "16px",
                                    fontSize: {
                                        xs: "medium",
                                        sm: "large",
                                    },
                                }}
                            >
                                {data.title}
                            </Typography>
                            {data.subTitle && (
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                    sx={{
                                        fontSize: {
                                            xs: "small",
                                            sm: "medium",
                                        },
                                    }}
                                >
                                    {data.subTitle}
                                </Typography>
                            )}
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {data.content.map((item, index) => (
                                    <li key={index} style={{ margin: "8px 0" }}>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            color="text.secondary"
                                        >
                                            - {item}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    ))}
                    {/* why choose wavetrack */}
                    {whyChooseWaveTrack.map((item, index) => (
                        <Box key={index}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                fontWeight="bold"
                                sx={{
                                    mt: "16px",
                                    fontSize: {
                                        xs: "medium",
                                        sm: "large",
                                    },
                                }}
                            >
                                {item.title}
                            </Typography>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {item.content.map((data, index) => (
                                    <li key={index} style={{ margin: "8px 0" }}>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                            color="text.secondary"
                                        >
                                            - {data.header}: {data.text}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    ))}
                </Box>
                {/* short text from data */}
                <Typography
                    variant="body1"
                    gutterBottom
                    color="text.secondary"
                    sx={{
                        marginY: "16px",
                    }}
                >
                    {aboutData.aboutSection.description}
                </Typography>
            </Box>
            {/* FAQs Section component */}
            <FaqSection />
            {/* Contact Us Section calling the Contact Section component */}
            <ContactSection />
        </Box>
    );
};

export default AboutPage;
