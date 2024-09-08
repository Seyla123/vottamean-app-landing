import { createTheme } from "@mui/material/styles";

// Define custom shadows
const customShadows = [
    "none", // 0
    "0px 1px 2px rgba(0, 0, 0, 0.1)", // 1
    "0px 2px 4px rgba(0, 0, 0, 0.2)", // 2
    "0px 3px 6px rgba(0, 0, 0, 0.3)", // 3
    "0px 4px 8px rgba(0, 0, 0, 0.4)", // 4
    "0px 5px 10px rgba(0, 0, 0, 0.5)", // 5
];

const theme = createTheme({
    shadows: customShadows,
});

export default theme;
