import { pricingData } from "../../data/pricingData";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    CardActions,
    Button,
} from "@mui/material";
import TitleSection from "./TitleSection";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const PricingSection = () => {
    return (
        <Box>
            <TitleSection
                title={pricingData.pricingSection.mainTitle.title}
                description={pricingData.pricingSection.mainTitle.description}
            />
            <Grid container spacing={2}>
                {pricingData.pricingSection.plans.map((plan, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ height: 1 }}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: " flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        textAlign: {
                                            xs: "center",
                                            sm: "start",
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Typography variant="h4">
                                        {plan.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {plan.description}
                                    </Typography>
                                    <Typography variant="h3">
                                        {plan.price}
                                    </Typography>
                                </Box>
                                <ul
                                    style={{
                                        marginTop: "32px",
                                    }}
                                >
                                    {plan.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            style={{ listStyle: "none" }}
                                        >
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    mt: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                                gap={1}
                                            >
                                                <TaskAltIcon />
                                                {feature}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{ width: 1 }}
                                >
                                    Subscribe Now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingSection;
