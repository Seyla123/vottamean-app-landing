import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { footerData } from "../../data/footerData";
import { Link } from "react-router-dom";

const footer = {
  marginTop: {
    xs : "40px",
    sm : "80px"
  },
  marginBottom: "20px",
  marginLeft: "10px",
  marginRight: "10px",
}

const footerContainer = {
  display: "flex",
  bgcolor: "#F3F3F5",
  justifyContent: "space-between",
  alignItems: "start",
  paddingRight: {
    xs:"14px",
    sm: "80px",
  },
  paddingLeft: {
    xs:"14px",
    sm: "80px",
  },
  paddingTop:{
    xs:"14px",
    sm: "80px",
  },
  paddingBottom: {
    xs:"40px",
    sm: "120px",
  },
  borderRadius: "16px",
  flexDirection: {
    xs: "column",
    sm: "row",    
  },
  gap: {
    xs: "48px",   
    sm: "0px",  
  },
};


const Footer = () => {
  return (
    <Box sx={footer}>
      <Container maxWidth="lg" disableGutters sx={footerContainer }>
        <Box sx={{ maxWidth: "400px" }}>
          <img src={footerData.logo} alt="logo" />
          <Typography variant="body1" sx={{ mt: '16px' }}>
            {footerData.description}
          </Typography>
        </Box>
        <Box>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {footerData.menuItems.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography variant="body1" sx={{ mt: "16px" }}>
                    {menu.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Box>
    </Container>
    </Box>
  );
};

export default Footer;
