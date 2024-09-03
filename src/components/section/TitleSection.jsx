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
        maxWidth: "100%",
        marginBottom: "32px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: {
            xs: "32px",
            sm: "48px",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
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
