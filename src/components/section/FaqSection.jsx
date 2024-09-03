import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { homeData } from "../../data/homeData";
import TitleSection from "./TitleSection";

export default function FaqSection() {
  return (
    <Box>
      <TitleSection title={homeData.faqSection.mainTitle.title} description={homeData.faqSection.mainTitle.description}/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          borderRadius: "16px",
          marginTop: "10px",
        }}
      >
        {homeData.faqSection.faqs.map((item, index) => {
          return (
            <Accordion
              key={index}
              disableGutters
              sx={{
                paddingX: "24px",
                bgcolor: "#eeeeee",
                borderRadius: "4px",
                boxShadow: "none",
                border: "none",
                margin: 0,
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  border: "none",
                  margin: 0,
                  padding: 0,
                  "&.Mui-expanded": {
                    borderBottom: "none",
                  },
                }}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ paddingX: 0 }}>
                <Typography sx={{ fontWeight: "24" }}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
