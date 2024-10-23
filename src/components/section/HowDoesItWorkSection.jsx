import React from "react";
import SectionHeader from "../common/SectionHeader";
import ImageTabs from "../common/ImageTabs";
import { howDoesItWork } from "@/lib/data";

const HowDoesItWorkSection = () => {
  return (
    <section className="w-full py-16">
      <SectionHeader
        subtitle={"How does it work?"}
        title={"Invest in income-generating real estate, easily."}
      />

      <ImageTabs tabs={howDoesItWork} />
    </section>
  );
};

export default HowDoesItWorkSection;
