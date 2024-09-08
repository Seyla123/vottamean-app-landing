import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { homeData } from "../../data/homeData";
import ButtonGroup from "../common/ButtonGroup";
import { borderRadius } from "@mui/system";

const HeroSection = () => {
    return (
        <Box sx={styles.section}>
            <HeroContent />
            <HeroImage />
        </Box>
    );
};

const HeroContent = () => {
    const { mainTitle } = homeData.heroSection;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={styles.contentWrapper}>
            <Typography
                variant={isMobile ? "h3" : "h2"}
                fontWeight="bold"
                textAlign="center"
            >
                {mainTitle.title}
            </Typography>
            <Typography
                variant="body1"
                textAlign="center"
                sx={styles.description}
            >
                {mainTitle.description}
            </Typography>
            <ButtonGroup buttons={mainTitle.buttons} />
        </Box>
    );
};

const HeroImage = () => {
    return (
        <Box sx={styles.imageWrapper}>
            <img
                src={homeData.heroSection.image}
                alt="hero"
                width="100%"
                height="100%"
                style={{
                    objectFit: "cover",
                    borderRadius: "16px",
                    objectPosition: "top",
                }}
            />
        </Box>
    );
};

const styles = {
    section: {
        paddingY: "100px",
    },
    contentWrapper: {
        width: "100%",
        display: "flex",
        maxWidth: "800px",
        margin: "0 auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    description: {
        mt: "14px",
        fontSize: { xs: "14px", sm: "16px" },
    },
    imageWrapper: {
        marginTop: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxShadow: 2,
        borderRadius: '16px',
        height: { xs: "400px", sm: "600px", md: "800px" },
    },
};

export default HeroSection;
