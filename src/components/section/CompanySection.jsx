import React from "react";
import { Typography } from "../common/Typography";
import Marquee from "../ui/marguee";
import { cn } from "@/lib/utils";

const logos = [
  {
    name: "Microsoft",
    img: "https://cdn.simpleicons.org/microsoft/000/fff",
  },
  {
    name: "Apple",
    img: "https://cdn.simpleicons.org/apple/000/fff",
  },
  {
    name: "Google",
    img: "https://cdn.simpleicons.org/google/000/fff",
  },
  {
    name: "Facebook",
    img: "https://cdn.simpleicons.org/facebook/000/fff",
  },
  {
    name: "LinkedIn",
    img: "https://cdn.simpleicons.org/linkedin/000/fff",
  },
  {
    name: "Twitter",
    img: "https://cdn.simpleicons.org/twitter/000/fff",
  },
];

const CompanySection = () => {
  return (
    <section className="w-full">
      <Typography className={"text-center"} variant={"h4"}>
        Helping teams at the world's best companies
      </Typography>
      <div className="relative bg-primary/10 flex h-full w-full mt-4 rounded-lg flex-col items-center justify-center gap-4 overflow-hidden  py-28 ">
        <Marquee className="[--gap:3rem]">
          {logos.map((logo, idx) => (
            <Logo key={idx} {...logo} />
          ))}
        </Marquee>
        {/* <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10  dark:from-primary/10'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10  dark:from-primary/10 '></div> */}
      </div>
    </section>
  );
};

const Logo = ({ name, img }) => {
  return (
    <div className={cn("h-12 w-12 cursor-pointer")}>
      <img src={img} alt={name} />
    </div>
  );
};

export default CompanySection;
