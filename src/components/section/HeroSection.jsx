import React from 'react';
import {
    Box,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import ButtonGroup from '../common/ButtonGroup';

const HeroSection = () => {
    return (
        <Box sx={styles.section}>
            <HeroContent />
            <HeroImage />
        </Box>
    );
};

const HeroContent = () => {
    const { mainTitle } = homeData.heroSection;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={styles.contentWrapper}>
            <Typography
                variant={isMobile ? 'h3' : 'h2'}
                fontWeight='bold'
                textAlign='center'
            >
                {mainTitle.title}
            </Typography>
            <Typography
                variant='body1'
                textAlign='center'
                sx={styles.description}
            >
                {mainTitle.description}
            </Typography>
            <ButtonGroup buttons={mainTitle.buttons} />
        </Box>
    );
};

const HeroImage = () => {
    return (
        <Box sx={styles.imageWrapper}>
            <img
                src={homeData.heroSection.image}
                alt='hero'
                width='100%'
                height='100%'
                style={{
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                    objectPosition: 'top',
                }}
            />
        </Box>
    );
};

const styles = {
    section: {
        py: '100px',
    },
    contentWrapper: {
        width: '100%',
        display: 'flex',
        maxWidth: '800px',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        mt: '14px',
        fontSize: { xs: '14px', sm: '16px' },
    },
    imageWrapper: {
        marginTop: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '500px',
    },
};

export default HeroSection;
