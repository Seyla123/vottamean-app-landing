import MainImage from "../assets/images/hero-section-image.png";
import GoogleLogo from "../assets/images/Google_logo.svg.webp";
import MetaLogo from "../assets/images/Meta-Logo.png";
import OpenAiLogo from "../assets/images/open-ai-logo.webp";
import MicrosoftLogo from "../assets/images/microsoft-logo.png";
import SamsungLogo from "../assets/images/Samsung_Logo.svg.png";
import HarvardLogo from "../assets/images/harvard.png";
import OurFeatureImage1 from "../assets/images/our-feature-1.png";
import OurFeatureImage2 from "../assets/images/our-feature-2.png";
import OurFeatureImage3 from "../assets/images/our-feature-3.png";
import CEOGoogleImage from "../assets/images/ceo-google-profile.png";
import CEOOpenaiImage from "../assets/images/ceo-openai-profile.png";
import CEOMicrosoftImage from "../assets/images/ceo-microsoft-profile.png";
import CEOHarvardImage from "../assets/images/ceo-harvard.jpg";

export const homeData = {
    // HERO SECTION
    heroSection: {
        mainTitle: {
            title: "Powerful Time Tracking Made Easy",
            description:
                "Streamline your workforce management with our intuitive time tracking solution.",
            buttons: [
                {
                    text: "Learn more",
                    link: "/features",
                },
                {
                    text: "Get Started",
                    link: "/signin",
                },
            ],
        },
        image: MainImage,
    },

    //  TRUSTED SECTION
    trustedSection: [GoogleLogo, MetaLogo, MicrosoftLogo, SamsungLogo],

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

    // TESTIMONIAL SECTION
    testimonialSection: {
        mainTitle: {
            title: "What Our Clients Say",
            description: "See what our satisfied clients have to say about us.",
        },

        testimonials: [
            {
                logo: GoogleLogo,

                description:
                    "WaveTrack's attendance management system has significantly enhanced our operational efficiency and employee accountability. It's a game-changer! The system's user-friendly interface and real-time tracking capabilities have streamlined our attendance management process, allowing us to focus on more strategic initiatives. We've seen a significant reduction in errors and an increase in productivity since implementing WaveTrack.",
                profile: {
                    name: "Sundar Pichai",
                    role: "CEO, Google",
                    image: CEOGoogleImage,
                },
            },
            {
                logo: HarvardLogo,

                description:
                    "WaveTrack has transformed the way we manage our workforce. Highly recommended! The system's advanced analytics and reporting features have provided us with valuable insights into our workforce's attendance patterns, enabling us to make data-driven decisions. The implementation process was seamless, and the customer support has been exceptional.",
                profile: {
                    name: "Claudine Gay",
                    role: "President, Harvard University",
                    image: CEOHarvardImage,
                },
            },

            {
                logo: MicrosoftLogo,
                description:
                    "The best attendance management system we've used. It simplifies everything. WaveTrack's automation capabilities have eliminated manual errors and reduced the administrative burden on our HR team. The system's scalability and flexibility have also allowed us to adapt to changing business needs.",
                profile: {
                    name: "Bill Gates",
                    role: "CEO, Microsoft",
                    image: CEOMicrosoftImage,
                },
            },

            {
                logo: OpenAiLogo,
                description:
                    "WaveTrack has transformed the way we manage our workforce. Highly recommended! The system's AI-powered analytics have provided us with actionable insights into our workforce's attendance patterns, enabling us to optimize our staffing levels and improve productivity. The system's user interface is also highly intuitive, making it easy for our team to use.",
                profile: {
                    name: "ChatGPT",
                    role: "OpenAI",
                    image: CEOOpenaiImage,
                },
            },
        ],
    },

    //  PRICING SECTION
    pricingSection: {
        mainTitle: {
            title: "Pricing",
            description:
                "Choose the plan that fits your needs. You can also upgrade or downgrade at any time.",
        },

        plans: [
            {
                title: "Free",
                description: "For individuals who are just getting started.",
                price: "Free",
                features: ["1 users", "10GB storage", "Basic analytics"],
            },

            {
                title: "Pro",
                description:
                    "For individuals who want to maximize their productivity.",
                price: "29",
                features: ["10 users", "100GB storage", "Advanced analytics"],
            },

            {
                title: "Enterprise",
                description: "For large-scale organizations and businesses.",
                price: "49",
                features: [
                    "Unlimited users",
                    "Unlimited storage",
                    "Advanced analytics",
                ],
            },
        ],
    },

    //  FAQs SECTION
    faqSection: {
        mainTitle: {
            title: "Frequently Asked Questions",
            description:
                "Have questions? We have answers. Check out our frequently asked questions below.",
        },

        faqs: [
            {
                question: "What is WaveTrack?",
                answer: "WaveTrack is a cloud-based time tracking and attendance management system.",
            },

            {
                question: "How do I use WaveTrack?",
                answer: "WaveTrack is a cloud-based time tracking and attendance management system. You can use it to track your time, track your attendance, and manage your students.",
            },

            {
                question: "Can I use WaveTrack for my business?",
                answer: "Yes, WaveTrack is a cloud-based time tracking and attendance management system. You can use it to track your time, track your attendance, and manage your students.",
            },

            {
                question: "Can I use WaveTrack for my students?",
                answer: "Yes, WaveTrack is a cloud-based time tracking and attendance management system. You can use it to track your time, track your attendance, and manage your students.",
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
