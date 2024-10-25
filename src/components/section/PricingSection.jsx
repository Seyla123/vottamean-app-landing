import React from "react";
import SectionHeader from "../common/SectionHeader";
import { pricingPlans } from "@/lib/data";
import PricingCard from "../common/PricingCard";

const PricingSection = () => {
  return (
    <section className="innerWidth">
      <SectionHeader
        subtitle={"Pricing"}
        title={"Choose the right plan for your needs"}
        underline={"needs"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingPlans.map((item, index) => (
          <PricingCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
