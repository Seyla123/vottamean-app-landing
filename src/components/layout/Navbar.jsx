import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navbarData } from "../../data/navbarData";
import { Link } from "react-router-dom";

const FullScreenDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
    },
}));

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const mobileMenu = (
        <FullScreenDrawer
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
        >
            <IconButton
                onClick={handleDrawerToggle}
                sx={{ position: "absolute", top: 10, right: 10 }}
            >
                <CloseIcon />
            </IconButton>
            <List sx={{ textAlign: "center", width: "100%" }}>
                {navbarData.menuItems.slice(0, -2).map((item) => (
                    <ListItem
                        key={item.title}
                        component={Link}
                        to={item.link}
                        onClick={handleDrawerToggle}
                    >
                        <ListItemText
                            primary={item.title}
                            sx={{
                                color: "#000",
                                textAlign: "center",
                                "&:hover": {
                                    color: "text.secondary",
                                },
                            }}
                        />
                    </ListItem>
                ))}
                <Box sx={{ display: "flex", gap: 2, width: "100%", mt: 4 }}>
                    <Button
                        sx={{ width: "100%" }}
                        variant="outlined"
                        component={Link}
                        to="/signin"
                        fullWidth
                    >
                        Sign In
                    </Button>
                    <Button
                        sx={{ width: "100%" }}
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/signup"
                        fullWidth
                    >
                        Get Started
                    </Button>
                </Box>
            </List>
        </FullScreenDrawer>
    );

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "#fff", boxShadow: 1 }}
        >
            <Toolbar>
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <img
                            src={navbarData.logo}
                            alt="Logo"
                            style={{
                                height: 40,
                                marginRight: theme.spacing(2),
                            }}
                        />
                    </Link>
                    {!isMobile &&
                        navbarData.menuItems.slice(0, -2).map((item) => (
                            <Button
                                key={item.title}
                                component={Link}
                                to={item.link}
                                sx={{ color: "black", margin: "0 8px" }}
                            >
                                {item.title}
                            </Button>
                        ))}
                </Box>
                {isMobile ? (
                    <IconButton
                        edge="start"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "black",
                                border: "1px solid black",
                            }}
                            component={Link}
                            to="/signin"
                        >
                            Sign In
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            component={Link}
                            to="/signup"
                        >
                            Get Started
                        </Button>
                    </Box>
                )}
            </Toolbar>
            {mobileMenu}
        </AppBar>
    );
};

export default Navbar;
