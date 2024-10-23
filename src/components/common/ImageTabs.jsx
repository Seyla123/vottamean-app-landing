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
import { UserRound, ListChecks, FileSearch2, ChartPie } from "lucide-react";

const tabs = [
  {
    title: "Log In Easily",
    id: "improve",
    icon: <UserRound size={24} />,
    description:
      "Teachers and administrators log in through a secure, user-friendly interface. With just a few clicks, they can access the dashboard where they can view classes, students, and daily schedules.",
    imageUrl:
      "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  },
  {
    title: "Real-Time Attendance Marking",
    id: "important",
    icon: <ListChecks size={24} />,
    description:
      "Teachers can mark attendance in real-time directly from their devices. Whether it’s for one student or the entire class, attendance is recorded instantly, reducing errors and time spent on manual logging.",
    imageUrl:
      "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  },
  {
    title: "View Attendance History",
    id: "same",
    icon: <FileSearch2 size={24} />,
    description:
      "Administrators and teachers can quickly access attendance history for each student. The system maintains a comprehensive record of all sessions, allowing users to monitor trends, spot absences, and provide support when necessary.",
    imageUrl:
      "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  },
  {
    title: "Generate and Download Reports",
    id: "work",
    icon: <ChartPie size={24} />,
    description:
      "The platform generates detailed attendance reports that can be downloaded in various formats (PDF, Excel). These reports provide insights into class attendance patterns and student participation, helping schools make data-driven decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  },
];

const ImageTabs = () => {
  return (
    <>
      <div className="w-full h-full">
        <TabsProvider
          defaultValue="improve"
          className="md:grid md:grid-cols-12 items-center gap-8 justify-center"
        >
          <TabImageContainer className="md:col-span-6 h-full">
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
          <TabList className="md:col-span-6">
            {tabs.map((tab, index) => (
              <TabItem key={index} value={tab.id}>
                <TabHeader value={tab.id}>
                  <span className="flex items-center gap-4">
                    {tab.icon}
                    {tab.title}
                  </span>
                </TabHeader>
                <TabDes value={tab.id}>
                  <p className={`bg-background text-muted-foreground  p-3`}>
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
    </>
  );
};

export default ImageTabs;
