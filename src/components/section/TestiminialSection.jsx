import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marguee";
import { reviews } from "@/lib/data";

import { Typography } from "../common/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SectionHeader from "../common/SectionHeader";

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ img, name, role, body }) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] cursor-pointer overflow-hidden rounded-lg bg-background border p-4",
        // light styles
        " hover:bg-gray-950/[.05]"
      )}
    >
      <Typography variant={"p"}>"{body}"</Typography>

      <div className="mt-4 flex items-center space-x-4">
        <Avatar>
          <AvatarImage
            src={img}
            alt={name}
            className="object-top object-cover"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <span>
          <p className="text-md">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </span>
      </div>
    </figure>
  );
};

const TestiminialSection = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <SectionHeader
        subtitle={"Testimonial"}
        title={"Build Trust Through User Feedback"}
      />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background "></div>
    </section>
  );
};

export default TestiminialSection;
