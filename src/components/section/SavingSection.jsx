import React from "react";
import { savings } from "@/lib/data";
import { Badge } from "../ui/badge";
import { Typography } from "../common/Typography";

const SavingSection = () => {
  return (
    <section className="innerWidth">
      <div className="w-full rounded-lg p-4 md:p-12 border border-dashed divide-y divide-dashed space-y-4 md:space-y-12">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
          <div className="md:col-span-2 space-y-4">
            <Badge>Savings</Badge>
            <Typography variant={"h2"} className={"md:max-w-[90%]"}>
              <span className="text-muted-foreground">
                Optimize Attendance Efficiency
              </span>{" "}
              and Maximize Time Savings
            </Typography>
          </div>
          <div className="md:col-span-1">
            <Typography variant={"p"}>
              Streamline Your Processes and Improve Accuracy with Our Solution
            </Typography>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {savings.map((saving, index) => (
            <div key={index} className="space-y-4 mt-8">
              <Typography variant={"h3"}>{saving.title}</Typography>
              <Typography variant={"p"}>{saving.description}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavingSection;
