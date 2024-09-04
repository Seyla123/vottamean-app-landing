import icon1 from "../assets/icons/admin-dashboard-icon.svg";
import icon2 from "../assets/icons/manage-attendance-icon.svg";
import icon3 from "../assets/icons/teacher-management-icon.svg";
import icon4 from "../assets/icons/advance-reporting-icon.svg";
import OurFeatureImage1 from "../assets/images/our-feature-1.png";
import OurFeatureImage2 from "../assets/images/our-feature-2.png";
import OurFeatureImage3 from "../assets/images/our-feature-3.png";

export const featureData = {
    //  OUR FEATURES SECTION
    ourFeaturesSection: {
        mainTitle: {
            title: "Our Features",
            description:
                "Discover how our attendance management system can transform your workflow.",
        },
        features: [
            {
                title: "Admin Dashboard",
                image: OurFeatureImage1,
                contents: {
                    title: "Admin Dashboard",
                    description:
                        "Adminstrators dashboard provides a centralized and intuitive interface for managing all aspects of your application. With a clean and modern design, you can easily access key metrics, monitor user activity, and make data-driven decisions.",
                },
            },

            {
                title: "Teacher Managements",
                image: OurFeatureImage2,
                contents: {
                    title: "Teacher Managements",
                    description:
                        "Administrators can easily create detailed profiles for each teacher, including personal information, qualifications, teaching experience, and contact details.",
                },
            },

            {
                title: "Attendance Reports",
                image: OurFeatureImage3,
                contents: {
                    title: "Attendance Reports",
                    description:
                        "Attendance Reporting feature empowers administrators to generate comprehensive reports on class attendance, providing valuable insights into student participation and engagement.",
                },
            },
        ],
    },

    // HIGHLIGHTS SECTION
    highlightsSection: {
        mainTitle: {
            title: "Highlights",
            description:
                "Discover how our attendance management system can transform your workflow.",
        },

        highlights: [
            {
                icon: icon1,
                title: "Easy to use",
                description:
                    "Our time tracking solution is designed to be intuitive and user-friendly. You can track your time, track your attendance, and manage your students easily.",
            },
            {
                icon: icon2,
                title: "Secure",
                description:
                    "Our time tracking solution is designed to be secure. You can protect your data and ensure that your data is safe and secure.",
            },
            {
                icon: icon3,
                title: "Cost-effective",
                description:
                    "Our time tracking solution is designed to be cost-effective. You can save money by using WaveTrack.",
            },
            {
                icon: icon4,
                title: "Scalable",
                description:
                    "Our time tracking solution is designed to be scalable.",
            },
        ],
    },

    //  CONTACT SECTION
    contactSection: {
        mainTitle: {
            title: "Contact Us",
            description:
                "Contact us with any questions or concerns. We will get back to you as soon as possible.",
        },
    },
};
