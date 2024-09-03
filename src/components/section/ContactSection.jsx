import { Button, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import TitleSection from './TitleSection';
import { contactData } from '../../data/contactData';

function ContactSection() {
  return (
    <Container
        sx={{
          paddingTop: "40px",
          paddingBottom: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <TitleSection
          title={contactData.contactSection2.mainTitle.title}
          description={contactData.contactSection2.mainTitle.description}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            justifyContent: "space-between",
            alignItems: "start",
            width: "100%",
            maxWidth: "690px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Enter your email address"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "full",
              height: {
                xs: "32px",
                sm: "64px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              height: "56px",
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
              bgcolor: "#2196F3",
            }}
          >
            Send
          </Button>
        </Box>
      </Container>
  )
}

export default ContactSection;
