import React from "react";
import { Typography } from "./Typography";
import { Badge } from "../ui/badge";
import underline2 from "@/assets/icons/Underline_2.svg";
import underline1 from "@/assets/icons/underline-1.svg";

const SectionHeader = ({ subtitle, title, underline }) => {
  // Function to wrap the underlined word with a span
  const renderTitle = (title, underline) => {
    if (!underline) return title;

    const parts = title.split(new RegExp(`(${underline})`, "i"));

    return (
      <>
        {parts.map((part, index) => {
          if (part.toLowerCase() === underline.toLowerCase()) {
            return (
              <span key={index} className="relative inline-block">
                {part}
                <img
                  src={underline1}
                  alt="underline"
                  className="w-full absolute bottom-[-6px] left-0 right-0"
                />
              </span>
            );
          }
          return part;
        })}
      </>
    );
  };

  return (
    <header className="text-center w-full md:max-w-2xl mx-auto md:pb-16 pb-8 md:pt-32 pt-16 md:px-4">
      <Badge>{subtitle}</Badge>
      <Typography variant={"h2"}>{renderTitle(title, underline)}</Typography>
    </header>
  );
};

export default SectionHeader;
