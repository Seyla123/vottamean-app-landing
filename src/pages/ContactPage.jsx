import React from "react";
import Footer from "../components/layout/Footer";
import { contactData } from "../data/contactData";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { display } from "@mui/system";
import TitleSection from "../components/section/TitleSection";

function ContactPage() {
  return (
    <div>
      {/* Input Section */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingY: "40px",
        }}
      >
        <TitleSection
          title={contactData.contactSection1.mainTitle.title}
          description={contactData.contactSection1.mainTitle.description}
        />

        <Box sx={{ width: "100%", maxWidth: "690px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              mb: "32px",
            }}
          >
            <Box sx={{ display: "flex", gap: "24px" }}>
              <TextField
                id="outlined-basic"
                size="small"
                label="Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
              />
            </Box>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={8}
              variant="outlined"
              size="large"
            />
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              width: "100%",
              bgcolor: "#2196F3",
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>

      {/* Contact Us Section */}
      <Container sx={{ paddingTop: "40px", PaddingBottom: "80px" }}>
        <TitleSection
          title={contactData.contactSection2.mainTitle.title}
          description={contactData.contactSection2.mainTitle.description}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: "100%", maxWidth: "333px" }}
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#2196F3",
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ContactPage;
