import React from "react";
import { Typography } from "./Typography";
import { Badge } from "../ui/badge";

const SectionHeader = ({ subtitle, title }) => {
  return (
    <header className="text-center w-full max-w-xl mx-auto pb-16">
      <Badge>{subtitle}</Badge>
      <Typography variant={"h2"}>{title}</Typography>
    </header>
  );
};

export default SectionHeader;
