import React from "react";
import SectionHeader from "../common/SectionHeader";
import ImageTabs from "../common/ImageTabs";
import { benefits } from "@/lib/data";

const BenefitSection = () => {
  return (
    <section>
      <SectionHeader
        title={"Elevate Your Attendance Management"}
        subtitle={"Benefits"}
        underline={"Elevate"}
      />
      <ImageTabs tabs={benefits} className={"flex-row-reverse"} />
    </section>
  );
};

export default BenefitSection;
