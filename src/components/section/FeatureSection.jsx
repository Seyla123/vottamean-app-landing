import React from "react";
import { features } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import SectionHeader from "../common/SectionHeader";

const FeatureSection = () => {
  return (
    <section>
      <SectionHeader
        subtitle={"Features"}
        title={"Discover Powerful Features That Simplify Attendance Management"}
        underline={"Powerful"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <Card className="bg-primary/10">
      <CardHeader>
        <CardTitle>
          <img src={feature.icon} alt={feature.title} className="w-2/3 mb-8" />
        </CardTitle>
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{feature.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureSection;
