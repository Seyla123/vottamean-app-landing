import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TitleSection = ({ title, description }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "800px",
                margin: "auto",
                pt: { xs: "64px", sm: "128px" },
                pb: { xs: "32px", sm: "64px" },
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    fontSize: {
                        xs: "48px",
                        sm: "64px",
                    },
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                    mt: "18px",
                    fontSize: {
                        xs: "14px",
                        sm: "18px",
                    },
                }}
            >
                {description}
            </Typography>
        </Box>
    );
};

export default TitleSection;
