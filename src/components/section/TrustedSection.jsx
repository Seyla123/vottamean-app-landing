import React from 'react';
import { Box, Typography } from '@mui/material';
import { homeData } from '../../data/homeData';
const TrustedSection = () => {
    const { trustedSection } = homeData;
    return (
        <Box component='section' sx={styles.section}>
            <Typography variant='h5' textAlign='center' fontWeight='bold'>
                Trusted by global companies
            </Typography>
            <Box sx={styles.container}>
                {trustedSection.map((item, index) => (
                    <Box key={index} sx={{ width: '100px', height: '50px' }}>
                        <img
                            src={item}
                            alt=''
                            key={index}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const styles = {
    section: {
        py: '40px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        maxWidth: '700px',
        margin: '0 auto',
        marginTop: '32px',
        gap: '20px',
    },
};

export default TrustedSection;
