import React, { useState } from "react";
import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from "../ui/tab";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const ImageTabs = ({ tabs, className }) => {
  // Check if className includes flex-row-reverse
  const isReversed = className?.includes("flex-row-reverse");

  return (
    <div className="w-full h-full">
      <TabsProvider
        defaultValue="improve"
        className={cn(
          "grid md:grid-cols-2 grid-cols-1 items-start gap-8 justify-center",
          className
        )}
      >
        <TabImageContainer
          className={cn("h-full", isReversed && "md:order-last")}
        >
          {tabs.map((tab, index) => (
            <TabImage key={index} value={tab.id}>
              <img
                src={tab.imageUrl}
                alt={tab.title}
                className="w-full h-full object-square object-cover rounded-md"
              />
            </TabImage>
          ))}
        </TabImageContainer>
        <TabList className={cn("", isReversed && "md:order-first")}>
          {tabs.map((tab, index) => (
            <TabItem key={index} value={tab.id}>
              <TabHeader value={tab.id}>
                <span className="flex items-center gap-4">
                  {tab.icon}
                  {tab.title}
                </span>
              </TabHeader>
              <TabDes value={tab.id}>
                <p className={`bg-background text-muted-foreground p-3`}>
                  {tab.description}
                </p>

                <img
                  src={tab.imageUrl}
                  alt={tab.title}
                  className="md:hidden block rounded-lg"
                />
              </TabDes>
            </TabItem>
          ))}
          <Button asChild className="mt-12">
            <Link to={"/auth/signin"}>Try It Now</Link>
          </Button>
        </TabList>
      </TabsProvider>
    </div>
  );
};

export default ImageTabs;
