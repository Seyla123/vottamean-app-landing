import React from "react";
import { contactData } from "../data/contactData";
import { Box, Container, TextField, Button } from "@mui/material";
import TitleSection from "../components/section/TitleSection";
import ContactSection from "../components/section/ContactSection";
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
                label="Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Email"
                fullWidth
                variant="outlined"
              />
            </Box>
            <TextField
              id="outlined-multiline-static"
              fullWidth
              label="Message"
              multiline
              rows={8}
              variant="outlined"
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
              bgcolor: "#2196F3",
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>

      {/* Contact Us Section */}
      <ContactSection />
    </div>
  );
}

export default ContactPage;
