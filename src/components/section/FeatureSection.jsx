import React from "react";
import { features } from "@/lib/data";

import SectionHeader from "../common/SectionHeader";
import CustomCard from "../common/CustomCard";

const FeatureSection = () => {
  return (
    <section className="innerWidth">
      <SectionHeader
        subtitle={"Features"}
        title={"Discover Powerful Features That Simplify Attendance Management"}
        underline={"Powerful"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <CustomCard key={index} data={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
