import React from "react";
import SectionHeader from "../common/SectionHeader";
import ImageTabs from "../common/ImageTabs";
import { benefits } from "@/lib/data";

const BenefitSection = () => {
  return (
    <div>
      <SectionHeader
        title={
          "Show how the platform will make the lives of teachers, students, and admins easier."
        }
        subtitle={"Benefits"}
      />
      <ImageTabs tabs={benefits} className={"flex-row-reverse"} />
    </div>
  );
};

export default BenefitSection;
