import React from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import { featureData } from "../../data/featureData";
import TitleSection from "./TitleSection";

const HighlightSection = () => {
    const { highlights } = featureData.highlightsSection;

    return (
        <Box sx={{ margin: "20px 0px" }}>
            <TitleSection
                title={featureData.highlightsSection.mainTitle.title}
                description={
                    featureData.highlightsSection.mainTitle.description
                }
            />

            <Grid container spacing={2}>
                {highlights.map((highlight, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card
                            sx={{
                                padding: { xs: "8px", sm: "16px" },
                                borderRadius: "16px",
                                height: 1,
                            }}
                        >
                            <CardContent
                                sx={{
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "16px",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "60px",
                                        height: "60px",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <img
                                        src={highlight.icon}
                                        alt={highlight.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                                <Typography variant="h4">
                                    {highlight.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {highlight.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HighlightSection;
