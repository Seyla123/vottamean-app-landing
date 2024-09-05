import React from "react";
import { contactData } from "../../data/contactData";
import TitleSection from "./TitleSection";
import { Box, TextField, Button } from "@mui/material";

const LongContactSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 0,
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
                        gap: "16px",
                        mb: "32px",
                    }}
                >
                    <Box sx={{ display: "flex", gap: "16px" }}>
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
        </Box>
    );
};

export default LongContactSection;
