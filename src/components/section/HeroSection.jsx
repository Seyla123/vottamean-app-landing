import React from "react";
import heroImage from "../../assets/images/time-39-491b4.png";
import { Typography } from "../common/Typography";

import { Check } from "lucide-react";
import underline from "../../assets/icons/Underline.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 grid-cols-1 gap-14 items-center">
      {/* CONTENT */}
      <div className="flex flex-col items-start gap-12 w-full">
        <Typography variant={"h1"}>
          Effortlessly Track and Manage Student{" "}
          <div className="relative w-fit inline-block">
            <img
              src={underline}
              alt="underline"
              className="absolute md:-bottom-8 -bottom-4"
            />
            Attendance
          </div>{" "}
        </Typography>
        <ul className="flex flex-col gap-2">
          {[
            "Seamless Attendance Tracking",
            "Automated Reports and Insights",
            "Effortless Integration and Accessibility",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="grid flex-shrink-0 place-items-center bg-primary text-white rounded-full size-6">
                <Check size={20} />
              </div>
              <Typography key={index} variant={"p"}>
                {item}
              </Typography>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button asChild>
          <Link to={"/auth/signin"}>Get Started</Link>
        </Button>
      </div>
      {/* IMAGE */}
      <div>
        <img src={heroImage} alt="hero" className="w-full object-contain" />
      </div>
    </section>
  );
};

export default HeroSection;
