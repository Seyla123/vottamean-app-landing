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
    color: "bg-card",
  },
  {
    link: report,
    src: "report",
    title: "Comprehensive Insights and Reporting",
    description:
      "Access detailed reports and analytics at your fingertips. Our platform provides valuable insights into attendance trends, helping educators identify students who may need additional support and ensuring timely interventions to enhance student engagement.",
    color: "bg-card",
  },
  {
    link: integration,
    src: "integration",
    title: "Seamless Integration with Existing Systems",
    description:
      "Easily integrate our attendance management solution with your current school systems and software. Our platform works well with popular tools and platforms, ensuring a smooth transition and minimal disruption to your existing processes.",
    color: "bg-card",
  },
  {
    link: userInterface,
    src: "user interface",
    title: "Enhanced Accuracy and Reliability",
    description:
      "Eliminate manual errors with our automated attendance tracking system. Our platform ensures that attendance data is recorded accurately in real-time, reducing discrepancies and providing reliable records for teachers and administrators.",
    color: "bg-card",
  },
];

export const savings = [
  {
    title: "99.9% Accuracy Rate",
    description:
      "Say goodbye to manual errors and the inefficiencies of paper-based tracking.",
  },
  {
    title: "50% Time Saved",
    description:
      "Cut administrative tasks in half by automating attendance, freeing up time for educators to focus on improving student outcomes.",
  },
  {
    title: "30% Cheaper",
    description:
      "Get the same premium features at a lower cost, offering powerful attendance management tools while saving your budget.",
  },
];

export const reviews = [
  {
    name: "Samantha Lee",
    role: "High School Principal",
    body: "This attendance software has revolutionized the way we track student attendance. It's easy to use and has saved us countless hours. I can't imagine going back to manual processes.",
    img: "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Johnson",
    role: "Math Teacher",
    body: "With real-time reporting and automated tracking, I spend less time on paperwork and more time engaging with my students. It's a game-changer for our school.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emma Rodriguez",
    role: "School Administrator",
    body: "The accuracy of the system is phenomenal. We no longer have to worry about errors in attendance records, and the real-time data helps us stay on top of everything.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Jessica Brown",
    role: "English Teacher",
    body: "The time saved is incredible. What used to take hours now takes minutes, and the automated system makes it so much easier to manage attendance efficiently.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lucas Nguyen",
    role: "IT Coordinator",
    body: "Implementing this system was seamless. The interface is intuitive, and the support from the team has been outstanding. We couldn't be happier with the switch.",
    img: "https://plus.unsplash.com/premium_photo-1681248156422-c01a2c803588?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olivia Davis",
    role: "Primary School Teacher",
    body: "The real-time reporting feature is fantastic! I can track my class attendance instantly, which allows me to address any attendance issues right away.",
    img: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "John Miller",
    role: "Education Consultant",
    body: "Compared to other systems, this is by far the most cost-effective solution we've used. It delivers top-notch performance without breaking the bank.",
    img: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
