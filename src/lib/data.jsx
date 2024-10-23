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
    image: realTime,
    title: "Real-Time Attendance Marking",
    description:
      "Easily track students' attendance and automate attendance recording for accuracy",
  },
  {
    image: report,
    title: "Comprehensive Reports",
    description:
      "Generate detailed attendance reports to analyze student engagement and performance.",
  },
  {
    image: integration,
    title: "Seamless Integration",
    description:
      "Easily track students' attendance and automate attendance recording for accuracy",
  },
  {
    image: userInterface,
    title: "User-Friendly Interface",
    description:
      "Teachers and staff can quickly access and update attendance records with minimal effort.",
  },
];
