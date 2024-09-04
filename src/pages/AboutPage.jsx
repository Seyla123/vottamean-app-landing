import React from "react";
import { aboutData, ourVision, whyChooseWaveTrack } from "../data/aboutData";
import { Box, Container, Typography } from "@mui/material";
import TitleSection from "../components/section/TitleSection";
import ContactSection from "../components/section/ContactSection";
import FaqSection from "../components/section/FaqSection";

const AboutPage = () => {
  return (
    <Container >
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
                xs: "100%", 
                sm: "600px",
                md:"660px"
              },
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Container>
        <Box
          sx={{
            maxWidth: {
              xs:"330px",
              sm:"660px"
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
                  fontSize: {
                    xs: "medium", 
                    sm: "large",
                  }
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  mt: "8px",
                  fontSize: {
                    xs: "small", 
                    sm: "medium", 
                  }
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
                  }
                }}
              >
                {data.title}
              </Typography>
              {data.subTitle && (
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    fontSize: {
                      xs: "small", 
                      sm: "medium",
                    }
                  }}
                >
                  {data.subTitle}
                </Typography>
              )}
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.content.map((item, index) => (
                  <li key={index} style={{ margin: "8px 0" }}>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{
                        fontSize: {
                          xs: "small", 
                          sm: "medium",
                        }
                      }}
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
                  }
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
                      sx={{
                        fontSize: {
                          xs: "small", 
                          sm: "medium",
                        }
                      }}
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
            sx={{
              marginY: "16px",
              fontSize: {
                xs: "small", 
                sm: "medium",
              }
            }}
          >
            {aboutData.aboutSection.description}
          </Typography>
      </Container>
      {/* FAQs Section component */}
      <FaqSection />
      {/* Contact Us Section calling the Contact Section component */}
      <ContactSection />
    </Container>
  );
};

export default AboutPage;
