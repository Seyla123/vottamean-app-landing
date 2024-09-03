import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Box,
    useMediaQuery,
    useTheme,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { navbarData } from '../../data/navbarData';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <Box display='flex' alignItems='center' flexGrow={1}>
                    <img
                        src={navbarData.logo}
                        alt='Logo'
                        style={{ height: 40, marginRight: theme.spacing(2) }}
                    />
                    {!isMobile &&
                        navbarData.menuItems.slice(0, -2).map(item => (
                            <Button
                                key={item.title}
                                color='inherit'
                                component={Link}
                                to={item.link}
                            >
                                {item.title}
                            </Button>
                        ))}
                </Box>
                {isMobile ? (
                    <>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {navbarData.menuItems.map(item => (
                                <MenuItem
                                    key={item.title}
                                    onClick={handleClose}
                                    component={Link}
                                    to={item.link}
                                >
                                    {item.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <>
                        <Button color='inherit' component={Link} to='/signin'>
                            Sign In
                        </Button>
                        <Button
                            color='secondary'
                            variant='contained'
                            component={Link}
                            to='/signup'
                        >
                            Get Started
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
