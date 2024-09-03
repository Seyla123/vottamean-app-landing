import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

export default function PricingSection() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="medium">
          Medium
        </Button>
      </CardActions>
    </Card>
  );
}
