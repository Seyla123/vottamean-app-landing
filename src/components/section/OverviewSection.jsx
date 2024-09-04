import React from "react";
import { Box, Card, Typography } from "@mui/material";
import TitleSection from "./TitleSection";
import { featureData } from "../../data/featureData";

const OverviewSection = () => {
    const { ourFeaturesSection } = featureData;

    return (
        <Box>
            <TitleSection
                title={ourFeaturesSection.mainTitle.title}
                description={ourFeaturesSection.mainTitle.description}
            />
            <Box>
                {ourFeaturesSection.features
                    .slice(0, 1)
                    .map((feature, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: 1,
                                display: "flex",
                                gap: "16px",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                                borderRadius: "16px",
                                padding: "16px",
                            }}
                        >
                            <img
                                src={ourFeaturesSection.features[0].image}
                                alt={feature.title}
                                style={{ width: "50%" }}
                            />
                            <Box
                                sx={{
                                    p: "16px",
                                    textAlign: "start",
                                    height: 1,
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: "10px" }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2">
                                    {feature.contents.description}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    mt: 2,
                    gap: 2,
                }}
            >
                {ourFeaturesSection.features
                    .slice(1, 3)
                    .map((feature, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: 1,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                borderRadius: "16px",
                                padding: "16px",
                                gap: "16px",
                            }}
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                style={{ width: "100%" }}
                            />
                            <Box
                                sx={{
                                    p: "16px",
                                    textAlign: "start",
                                    height: 1,
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: "10px" }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2">
                                    {feature.contents.description}
                                </Typography>
                            </Box>
                        </Card>
                    ))}
            </Box>
        </Box>
    );
};

export default OverviewSection;
