import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import TitleSection from "./TitleSection";
import { contactData } from "../../data/contactData";

function ContactSection() {
    return (
        <Container
            sx={{
                paddingTop: "40px",
                paddingBottom: "80px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
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
                    gap: "16px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: 1,
                    maxWidth: "690px",
                }}
            >
                <TextField
                    size="large"
                    id="outlined-basic"
                    label="Enter your email address"
                    variant="outlined"
                    sx={{
                        width: "100%",
                        maxWidth: "full",
                    }}
                />
                <Button
                    variant="contained"
                    size="large"
                    sx={{ height: "54px" }}
                >
                    Send
                </Button>
            </Box>
        </Container>
    );
}

export default ContactSection;
