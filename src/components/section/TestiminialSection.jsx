import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marguee";
import { reviews } from "@/lib/data";

import { Typography } from "../common/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SectionHeader from "../common/SectionHeader";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, role, body }) => {
  return (
    <figure
      className={cn(
        "relative md:w-[440px] w-[300px] overflow-hidden rounded-lg bg-background flex flex-col justify-between border border-dashed p-4 md:p-6"
      )}
    >
      <Typography variant={"p"} className={"text-black"}>
        "{body}"
      </Typography>

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

const TestiminialSection = ({id}) => {
  return (
    <section id={id} className="innerWidth relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <SectionHeader
        subtitle={"Testimonial"}
        title={"Build Trust Through User Feedback"}
      />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background "></div>
    </section>
  );
};

export default TestiminialSection;
