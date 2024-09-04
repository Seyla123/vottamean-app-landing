import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/material";
import { homeData } from "../../data/homeData";
import TitleSection from "./TitleSection";

export default function PricingSection() {
    const Demo = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    const pricingCardData = homeData.pricingSection.plans;

    const getCardStyles = (index) => {
        return {
            ...(index === 1 && {
                backgroundColor: "#202842",
                color: "white",
            }),
        };
    };

    return (
        <Box>
            <TitleSection
                title={homeData.pricingSection.mainTitle.title}
                description={homeData.pricingSection.mainTitle.description}
            />
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {pricingCardData.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            maxWidth: 250,
                            ...getCardStyles(index),
                        }}
                    >
                        <CardActionArea sx={{ mx: 2 }}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    sx={{
                                        mb: 0,
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.title} Plan
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="subtitle2"
                                    sx={{
                                        m: 0,
                                        pr: 1,
                                        ...getCardStyles(index),
                                    }}
                                >
                                    {item.description}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    sx={{
                                        my: 1,
                                        fontWeight: 600,
                                        ...getCardStyles(index),
                                    }}
                                >
                                    ${item.price}
                                </Typography>
                                <Demo>
                                    <List sx={{ ...getCardStyles(index) }}>
                                        {item.features.map(
                                            (msg, listItemIndex) => (
                                                <ListItem
                                                    key={listItemIndex}
                                                    sx={{
                                                        p: 0,
                                                        mb: 1,
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: 1,
                                                        }}
                                                    >
                                                        <CheckCircle
                                                            sx={{
                                                                color:
                                                                    index === 1
                                                                        ? "white"
                                                                        : "black",
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={msg}
                                                        sx={{ m: 0 }}
                                                    />
                                                </ListItem>
                                            )
                                        )}
                                    </List>
                                </Demo>
                            </CardContent>
                        </CardActionArea>
                        <CardActions
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    px: 5,
                                    mb: 3,
                                    textTransform: "none",
                                    ...(index === 1 && {
                                        bgcolor: "white",
                                        color: "black",
                                    }),
                                }}
                            >
                                Subscribe Now
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
