import React from "react";
import SectionHeader from "../common/SectionHeader";
import ImageTabs from "../common/ImageTabs";
import { benefits, benefitCards } from "@/lib/data";
import CustomCard from "../common/CustomCard";

const BenefitSection = () => {
  return (
    <section>
      <SectionHeader
        title={"Elevate Your Attendance Management"}
        subtitle={"Benefits"}
        underline={"Elevate"}
      />
      <ImageTabs tabs={benefits} className={"flex-row-reverse"} />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefitCards.map((benefit, index) => (
          <CustomCard key={index} data={benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
