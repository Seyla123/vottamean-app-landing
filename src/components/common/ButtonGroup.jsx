import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        marginTop: '24px',
    },
};

const ButtonGroup = ({ buttons }) => (
    <Box sx={styles.buttonGroup}>
        {buttons.map((button, index) => (
            <Link to={button.link} key={index}>
                <Button variant={index === 0 ? 'outlined' : 'contained'}>
                    {button.text}
                </Button>
            </Link>
        ))}
    </Box>
);

export default ButtonGroup;
