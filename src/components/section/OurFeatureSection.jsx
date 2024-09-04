import React, { useState } from "react";
import { Link } from "react-router-dom";
import { homeData } from "../../data/homeData";
import TitleSection from "../section/TitleSection";
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { bgcolor } from "@mui/system";

const OurFeatureSection = () => {
    const { mainTitle, features } = homeData.ourFeaturesSection;
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Box component="section" sx={sectionStyles}>
            <Box sx={{ width: "100%" }}>
                <TitleSection
                    title={mainTitle.title}
                    description={mainTitle.description}
                />

                <Box sx={featureBoxStyles}>
                    <Card
                        sx={{
                            borderRadius: "16px",
                        }}
                    >
                        <Box sx={tabsContainerStyles}>
                            {features.map((feature, index) => (
                                <Button
                                    key={index}
                                    variant={activeTab === index && "contained"}
                                    color="primary"
                                    onClick={() => setActiveTab(index)}
                                    sx={tabButtonStyles}
                                >
                                    {feature.title}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={contentContainerStyles}>
                            <img
                                src={features[activeTab].image}
                                alt={features[activeTab].title}
                                style={{
                                    width: "100%",
                                    height: "400px",
                                    objectFit: "cover",
                                }}
                            />
                            <Box sx={cardContentStyles}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    gutterBottom
                                >
                                    {features[activeTab].contents.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {features[activeTab].contents.description}
                                </Typography>
                                <Link to="/features">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 2 }}
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

// Styles
const sectionStyles = {
    width: "100%",
    py: { xs: "20px", md: "40px" },
};

const featureBoxStyles = {
    width: "100%",
    marginTop: "32px",
};

const tabsContainerStyles = {
    display: "flex",
    overflowX: "auto",
    borderBottom: 1,
    borderColor: "divider",
    padding: "14px",
    "&::-webkit-scrollbar": { display: "none" },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
};

const tabButtonStyles = {
    mx: 1,
    whiteSpace: "nowrap",
    flexShrink: 0,
};

const contentContainerStyles = {
    display: "flex",
    height: "auto",
    width: "100%",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "14px", sm: "24px" },
    padding: { xs: "14px", sm: "24px" },
};

const cardContentStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
};

export default OurFeatureSection;
