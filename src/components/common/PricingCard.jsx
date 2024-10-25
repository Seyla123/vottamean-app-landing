import React from "react";
import { Typography } from "./Typography";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

const PricingCard = ({ item }) => {
  return (
    <div
      className={`relative rounded-lg border grid grid-cols-1 border-dashed h-auto ${
        item.title === "Basic" ? "bg-indigo-50" : "bg-background"
      }`}
    >
      {/* CARD HEADER */}
      <div className="flex flex-col space-y-4 p-8 border-b border-dashed">
        <Typography variant={"h3"}>{item.title}</Typography>
        <span className="flex items-center gap-4">
          <Typography variant={"h2"}>{item.price}</Typography>
          <Typography variant={"h4"}>/ {item.duration}</Typography>
        </span>
      </div>
      {/* CARD FEATURES */}
      <div className="p-8 w-full h-full grid grid-cols-1 justify-between">
        <ul className="space-y-2">
          {item.features.map((feature, index) => (
            <li key={index}>
              <Typography variant={"p"} className={"flex gap-4 items-center"}>
                {feature.icon}
                {feature.title}
              </Typography>
            </li>
          ))}
        </ul>
        {/* CARD BUTTON */}
        <Button className="mt-8" asChild>
          <Link to={"https://web.vottamean.com/auth/signin"}>Start Now</Link>
        </Button>
      </div>
      {item.popular && (
        <Badge className={"absolute right-4 top-4"}>Popular</Badge>
      )}
    </div>
  );
};

export default PricingCard;