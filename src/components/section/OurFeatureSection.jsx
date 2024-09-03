import React, { useState } from 'react';
import { homeData } from '../../data/homeData';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    CardMedia,
    Button,
    Container,
    Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import TitleSection from '../section/TitleSection';

const OurFeatureSection = () => {
    const { mainTitle, features } = homeData.ourFeaturesSection;
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box
            component='section'
            sx={{
                py: { xs: '20px', md: '40px' },
                bgcolor: 'background.default',
            }}
        >
            <Container sx={{ width: '100%' }}>
                <TitleSection
                    title={mainTitle.title}
                    description={mainTitle.description}
                />

                <Grid
                    container
                    spacing={4}
                    direction='column'
                    sx={{ width: '100%', marginTop: '32px' }}
                >
                    <Card>
                        <Box
                            sx={{
                                display: 'flex',
                                overflowX: 'auto',
                                borderBottom: 1,
                                borderColor: 'divider',
                                padding: '14px',
                            }}
                        >
                            {features.map((feature, index) => (
                                <Button
                                    key={index}
                                    variant={activeTab === index && 'contained'}
                                    color='primary'
                                    onClick={event =>
                                        handleTabChange(event, index)
                                    }
                                    sx={{ mx: 1 }}
                                >
                                    {feature.title}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                padding: { xs: '14px', sm: '24px' },
                            }}
                        >
                            <CardMedia
                                component='img'
                                height='300'
                                image={features[activeTab].image}
                                alt={features[activeTab].title}
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'start',
                                }}
                            >
                                <Typography
                                    variant='h5'
                                    component='h3'
                                    gutterBottom
                                >
                                    {features[activeTab].contents.title}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {features[activeTab].contents.description}
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    sx={{ mt: 2 }}
                                    component={Link}
                                    to='/features'
                                >
                                    Learn More
                                </Button>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurFeatureSection;
