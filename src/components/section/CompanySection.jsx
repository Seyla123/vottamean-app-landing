import React from "react";
import { Typography } from "../common/Typography";
import Marquee from "../ui/marguee";
import { cn } from "@/lib/utils";
import logo1 from "@/assets/images/logo-1.png";
import logo2 from "@/assets/images/logo-2.png";

const logos = [
  {
    name: "Microsoft",
    img: logo1,
  },
  {
    name: "Apple",
    img: logo2,
  },
  {
    name: "Microsoft",
    img: logo1,
  },
  {
    name: "Apple",
    img: logo2,
  },
  {
    name: "Microsoft",
    img: logo1,
  },
  {
    name: "Apple",
    img: logo2,
  },
];

const CompanySection = () => {
  return (
    <section className="w-full innerWidth">
      <div className="relative flex h-full w-full rounded-lg flex-col items-center justify-center gap-4 overflow-hidden py-14">
        <span className="absolute z-10 left-0 bg-secondary h-full flex items-center">
          <Typography className={"text-start pr-4"} variant={"h4"}>
            As Seen On
          </Typography>
        </span>
        <Marquee className="[--gap:3rem]">
          {logos.map((logo, idx) => (
            <Logo key={idx} {...logo} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-secondary "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary"></div>
      </div>
    </section>
  );
};

const Logo = ({ name, img }) => {
  return (
    <div className={cn("h-16 w-36 rounded-md bg-background overflow-hidden")}>
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default CompanySection;
