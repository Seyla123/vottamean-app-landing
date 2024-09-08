import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

const styles = {
    buttonGroup: {
        display: "flex",
        width: 1,
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap: "1rem",
        marginTop: "24px",
    },
};

const ButtonGroup = ({ buttons }) => (
    <Box sx={styles.buttonGroup}>
        {buttons.map((button, index) => (
            <Link to={button.link} key={index}>
                <Button
                    size="large"
                    variant={index === 0 ? "outlined" : "contained"}
                    sx={{ width: 1 }}
                >
                    {button.text}
                </Button>
            </Link>
        ))}
    </Box>
);

export default ButtonGroup;
