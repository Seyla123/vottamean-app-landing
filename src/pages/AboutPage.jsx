import React from "react";
import { aboutData } from "../data/aboutData";
import { Box, Container, Typography } from "@mui/material";
import TitleSection from "../components/section/TitleSection";
import ContactPage from "./ContactPage";
const AboutPage = () => {
  return (
    <div>
      <Container
      sx={{
        mt: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <TitleSection
          title={aboutData.aboutSection.mainTitle.title}
          description={aboutData.aboutSection.mainTitle.description}
        />
        <Box
          component="img"
          src={aboutData.aboutSection.image}
          alt="meeting picture"
          sx={{
            width: {
              xs: "390px", 
              sm: "auto", 
            },
            maxWidth: "100%", 
            height: "auto", 
          }}
        />
      </Container>
      <Box
        sx={{
          maxWidth: "688px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          mt: "32px",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {aboutData.contents.map((data, index) => (
            <li key={index} style={{ marginY: "16px" }}>
              <Typography
                variant="body1"
                sx={{ mt: "16px", fontWeight: "bold", fontSize: "20px" }}
              >
                {data.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: "16px", fontSize: "16px" }}>
                {data.description}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Container>
    {/* Contact Us Section */}
    <ContactPage />
    </div>
    
  );
};

export default AboutPage;
