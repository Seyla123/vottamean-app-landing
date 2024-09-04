import React from "react";
import { Card, Box, CardContent, Typography, Avatar } from "@mui/material";

const TestimonialCard = ({ logo, description, profile }) => {
    return (
        <Card
            sx={{
                padding: { xs: "4px", sm: "8px" },
                borderRadius: "16px",
                height: 1,
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        width: "100px",
                        height: "40px",
                    }}
                >
                    <img
                        src={logo}
                        alt={` logo`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                    />
                </Box>
                <Typography
                    variant="body1"
                    sx={{ my: 4 }}
                    color="text.secondary"
                >
                    {description}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Avatar src={profile.image} alt={profile.name} />
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                            {profile.name}
                        </Typography>
                        <Typography variant="caption">
                            {profile.role}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;
