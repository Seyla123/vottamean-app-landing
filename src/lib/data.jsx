import {
  UserRound,
  ListChecks,
  FileSearch2,
  ChartPie,
  Rocket,
  Hourglass,
  NotepadText,
} from "lucide-react";

export const howDoesItWork = [
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

export const benefits = [
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

export const benefitCards = [
  {
    icon: <Rocket size={28} />,
    title: "Boost Accuracy",
    description:
      "Automate attendance tracking to eliminate manual errors and ensure precise data.",
  },
  {
    icon: <Hourglass size={28} />,
    title: "Save Time",
    description:
      "Streamline attendance processes, freeing up valuable time for teaching and student support.",
  },
  {
    icon: <NotepadText size={28} />,
    title: "Instant Reporting",
    description:
      "Generate real-time attendance reports with just one click, giving you actionable insights.",
  },
];

import realTime from "@/assets/images/features/real-time.svg";
import integration from "@/assets/images/features/integration.svg";
import userInterface from "@/assets/images/features/user-interface.svg";
import report from "@/assets/images/features/report.svg";

export const features = [
  {
    link: realTime,
    src: "real time",
    title: "Time-Saving Automation",
    description:
      "Streamline your attendance process and save hours each week. By automating attendance marking and reporting, educators can focus more on teaching and less on administrative tasks, leading to a more productive classroom environment.",
    color: "bg-[#D2DAFF]",
  },
  {
    link: report,
    src: "report",
    title: "Comprehensive Insights and Reporting",
    description:
      "Access detailed reports and analytics at your fingertips. Our platform provides valuable insights into attendance trends, helping educators identify students who may need additional support and ensuring timely interventions to enhance student engagement.",
    color: "bg-[#D2DAFF]",
  },
  {
    link: integration,
    src: "integration",
    title: "Seamless Integration with Existing Systems",
    description:
      "Easily integrate our attendance management solution with your current school systems and software. Our platform works well with popular tools and platforms, ensuring a smooth transition and minimal disruption to your existing processes.",
    color: "bg-[#D2DAFF]",
  },
  {
    link: userInterface,
    src: "user interface",
    title: "Enhanced Accuracy and Reliability",
    description:
      "Eliminate manual errors with our automated attendance tracking system. Our platform ensures that attendance data is recorded accurately in real-time, reducing discrepancies and providing reliable records for teachers and administrators.",
    color: "bg-[#D2DAFF]",
  },
];
