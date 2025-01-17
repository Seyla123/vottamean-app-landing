import {
  UserRound,
  ListChecks,
  FileSearch2,
  Rocket,
  Hourglass,
  NotepadText,
  DoorOpen,
  Clock,
  Trophy,
  Sparkles,
  BriefcaseBusiness,
  ChartPie,
  DoorClosed,
  HandCoins,
  GraduationCap,
  MailCheck,
  MonitorSmartphone,
} from 'lucide-react';

import loginMac from '../assets/images/features/Macbook Pro.svg';
import markMac from '../assets/images/features/mark Attendance.svg';
import historyMac from '../assets/images/features/Mac History.svg';
import exportMac from '../assets/images/features/Macbook export.svg';

export const howDoesItWork = [
  {
    title: 'Log In Easily',
    id: 'improve',
    icon: <UserRound size={24} />,
    description:
      'Teachers and administrators log in through a secure, user-friendly interface. With just a few clicks, they can access the dashboard where they can view classes, students, and daily schedules.',
    imageUrl: loginMac,
  },
  {
    title: 'Real-Time Attendance Marking',
    id: 'important',
    icon: <ListChecks size={24} />,
    description:
      'Teachers can mark attendance in real-time directly from their devices. Whether it’s for one student or the entire class, attendance is recorded instantly, reducing errors and time spent on manual logging.',
    imageUrl: markMac,
  },
  {
    title: 'View Attendance History',
    id: 'same',
    icon: <FileSearch2 size={24} />,
    description:
      'Administrators and teachers can quickly access attendance history for each student. The system maintains a comprehensive record of all sessions, allowing users to monitor trends, spot absences, and provide support when necessary.',
    imageUrl: historyMac,
  },
  {
    title: 'Generate and Download Reports',
    id: 'work',
    icon: <ChartPie size={24} />,
    description:
      'The platform generates detailed attendance reports that can be downloaded in various formats (PDF, Excel). These reports provide insights into class attendance patterns and student participation, helping schools make data-driven decisions.',
    imageUrl: exportMac,
  },
];

export const benefits = [
  {
    title: "Comprehensive Operation",
    id: "improve",
    icon: <UserRound size={24} />,
    description:
      "Our all-in-one attendance system simplifies the management of student data, progress tracking, and class scheduling. With real-time attendance tracking and integrated communication features, lectures can streamline operations and boost productivity.",
    imageUrl:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Data Accuracy",
    id: "important",
    icon: <ListChecks size={24} />,
    description:
      "Designed for all levels of tech-savviness, our platform enables accurate, real-time data capture and secure storage. This integration not only reduces paperwork but also offers precise insights, enhancing overall efficiency and making daily operations smoother for lectures and administrators alike.",
    imageUrl:
      'https://images.unsplash.com/photo-1711606815631-38d32cdaec3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    title: "Efficient Time Saving",
    id: "same",
    icon: <FileSearch2 size={24} />,
    description:
      "Say goodbye to the complexities of juggling multiple tools! Our platform centralizes attendance management with just simple steps of uses. This flexibility saves time and allows lectures to focus more on teaching and less on administrative tasks.",
    imageUrl:
    "https://images.unsplash.com/photo-1713947504156-07e483f2246d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Reliable Safety Concerns",
    id: "work",
    icon: <ChartPie size={24} />,
    description:
    "Our web application prioritizes students safety by providing timely notifications to guardians about attendance. This transparency provide a better awareness which fosters trust for parents while supporting schools in creating a safer educational environment.",
    imageUrl:
      "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export const benefitCards = [
  {
    icon: <Rocket size={28} />,
    title: 'Boost Accuracy',
    description:
      'Automate attendance tracking to eliminate manual errors and ensure precise data.',
  },
  {
    icon: <Hourglass size={28} />,
    title: 'Save Time',
    description:
      'Streamline attendance processes, freeing up valuable time for teaching and student support.',
  },
  {
    icon: <NotepadText size={28} />,
    title: 'Instant Reporting',
    description:
      'Generate real-time attendance reports with just one click, giving you actionable insights.',
  },
];

import realTime from '@/assets/images/features/real-time.svg';
import integration from '@/assets/images/features/integration.svg';
import userInterface from '@/assets/images/features/user-interface.svg';
import report from '@/assets/images/features/report.svg';

export const features = [
  {
    link: realTime,
    src: 'real time',
    title: 'Time-Saving Automation',
    description:
      'Automate attendance marking and reporting, saving hours each week for educators to focus on teaching.',
    color: 'bg-background',
  },
  {
    link: report,
    src: 'report',
    title: 'Comprehensive Insights',
    description:
      'Access detailed reports and analytics to track attendance trends and support student engagement.',
    color: 'bg-background',
  },
  {
    link: integration,
    src: 'integration',
    title: 'Seamless Integration',
    description:
      'Integrate with your existing systems smoothly, ensuring minimal disruption to processes.',
    color: 'bg-background',
  },
  {
    link: userInterface,
    src: 'user interface',
    title: 'Enhanced Accuracy',
    description:
      'Automate real-time tracking to reduce errors and ensure reliable attendance records.',
    color: 'bg-background',
  },
];

export const savings = [
  {
    title: '99.9% Accuracy Rate',
    description:
      'Say goodbye to manual errors and the inefficiencies of paper-based tracking.',
  },
  {
    title: '50% Time Saved',
    description:
      'Cut administrative tasks in half by automating attendance, freeing up time for educators to focus on improving student outcomes.',
  },
  {
    title: '30% Cheaper',
    description:
      'Get the same premium features at a lower cost, offering powerful attendance management tools while saving your budget.',
  },
];

export const reviews = [
  {
    name: 'Samantha Lee',
    role: 'High School Principal',
    body: "This attendance software has revolutionized the way we track student attendance. It's easy to use and has saved us countless hours. I can't imagine going back to manual processes.",
    img: 'https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Michael Johnson',
    role: 'Math Teacher',
    body: "With real-time reporting and automated tracking, I spend less time on paperwork and more time engaging with my students. It's a game-changer for our school.",
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Emma Rodriguez',
    role: 'School Administrator',
    body: 'The accuracy of the system is phenomenal. We no longer have to worry about errors in attendance records, and the real-time data helps us stay on top of everything.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    name: 'Jessica Brown',
    role: 'English Teacher',
    body: 'The time saved is incredible. What used to take hours now takes minutes, and the automated system makes it so much easier to manage attendance efficiently.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Lucas Nguyen',
    role: 'IT Coordinator',
    body: "Implementing this system was seamless. The interface is intuitive, and the support from the team has been outstanding. We couldn't be happier with the switch.",
    img: 'https://plus.unsplash.com/premium_photo-1681248156422-c01a2c803588?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Olivia Davis',
    role: 'background School Teacher',
    body: 'The real-time reporting feature is fantastic! I can track my class attendance instantly, which allows me to address any attendance issues right away.',
    img: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'John Miller',
    role: 'Education Consultant',
    body: "Compared to other systems, this is by far the most cost-effective solution we've used. It delivers top-notch performance without breaking the bank.",
    img: 'https://images.unsplash.com/photo-1531256456869-ce942a665e80?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const tabs = [
  {
    title: 'How does the automated attendance tracking system work?',
    description:
      'The system uses an intuitive interface where teachers can easily mark attendance with just a few clicks. It automatically logs student attendance data in real-time, eliminating manual errors and providing instant access to accurate records.',
    imageUrl:
      'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Can I generate reports based on attendance data?',
    description:
      'Yes! Our system allows you to generate detailed reports on student attendance, including daily, weekly, and monthly summaries. The real-time reporting feature ensures you always have up-to-date information at your fingertips.',
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'How does the app help save time for teachers and staff?',
    description:
      'By automating the entire attendance process, the app reduces the time spent on manual data entry by up to 50%. Teachers can quickly mark attendance and focus more on teaching, while administrators get immediate access to comprehensive attendance records.',
    imageUrl:
      'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Is the attendance data secure and private?',
    description:
      'Absolutely! We take data security very seriously. All attendance data is securely stored and encrypted to ensure student privacy. Only authorized personnel have access to the records.',
    imageUrl:
      'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title:
      ' How affordable is your attendance management system compared to others?',
    description:
      'Our solution is up to 30% cheaper than most attendance management platforms, offering all the essential features at a significantly lower cost without compromising quality.',
    imageUrl:
      'https://images.unsplash.com/photo-1501889088093-90b27410d97e?q=80&w=800&auto=format&fit=crop',
  },
];

export const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    duration: 'month',
    features: [
      {
        icon: <BriefcaseBusiness size={24} />,
        title: 'Limited access to 10 teachers account',
      },
      {
        icon: <GraduationCap size={24} />,
        title: 'Limited access to 50 students',
      },
      {
        icon: <Sparkles size={24} />,
        title: 'Full access to all features',
      },
      {
        icon: <MonitorSmartphone size={24} />,
        title: 'All devices supported',
      },
      {
        icon: <MailCheck size={24} />,
        title: 'Recieve Email supports',
      },
    ],
  },
  {
    title: 'Basic',
    price: '$3.99',
    duration: 'month',
    popular: true,
    features: [
      {
        icon: <BriefcaseBusiness size={24} />,
        title: 'Access to 100 teachers account',
      },
      {
        icon: <GraduationCap size={24} />,
        title: 'Access to 1000 students',
      },
      {
        icon: <Sparkles size={24} />,
        title: 'Full access to all features',
      },
      {
        icon: <MonitorSmartphone size={24} />,
        title: 'All devices supported',
      },
      {
        icon: <MailCheck size={24} />,
        title: 'Recieve Email supports',
      },
    ],
  },
  {
    title: 'Premium',
    price: '$9.99',
    duration: 'month',
    features: [
      {
        icon: <BriefcaseBusiness size={24} />,
        title: 'Unlimited teachers account',
      },
      {
        icon: <GraduationCap size={24} />,
        title: 'Unlimited students account',
      },
      {
        icon: <Sparkles size={24} />,
        title: 'Full access to all features',
      },
      {
        icon: <MonitorSmartphone size={24} />,
        title: 'All devices supported',
      },
      {
        icon: <MailCheck size={24} />,
        title: 'Recieve Email supports',
      },
      {
        icon: <HandCoins size={24} />,
        title: 'Super Saving',
      },
    ],
  },
];
