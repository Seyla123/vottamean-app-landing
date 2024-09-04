import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const TestimonialCard = ({ logo, title, description, profile }) => {
    return (
        <Card>
            <CardContent>
                <img
                    src={logo}
                    alt={`${title} logo`}
                    style={{ width: 50, height: 50 }}
                />
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Avatar src={profile.image} alt={profile.name} />
                <Typography variant="subtitle2">{profile.name}</Typography>
                <Typography variant="caption">{profile.role}</Typography>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;
