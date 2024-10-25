import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/time-39-491b4.png";
import { Typography } from "../common/Typography";
import { Check } from "lucide-react";
import underline from "../../assets/icons/underline-1.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import CompanySection from "./CompanySection";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-secondary">
      <motion.div
        className="innerWidth md:py-16 py-8 grid lg:grid-cols-2 grid-cols-1 gap-4 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* CONTENT */}
        <div className="flex flex-col items-start gap-12 w-full">
          <motion.div variants={itemVariants}>
            <Typography variant="h1">
              Effortlessly Track and Manage{" "}
              <span className="relative w-fit inline-block">
                <motion.img
                  src={underline}
                  alt="underline"
                  className="absolute -bottom-2 left-0"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
                Student
              </span>{" "}
              Attendance
            </Typography>
          </motion.div>

          <motion.ul className="flex flex-col gap-2" variants={itemVariants}>
            {[
              "Seamless Attendance Tracking",
              "Automated Reports and Insights",
              "Effortless Integration and Accessibility",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <motion.div
                  className="grid flex-shrink-0 place-items-center bg-primary text-white rounded-full size-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Check size={20} />
                </motion.div>
                <Typography key={index} variant="p">
                  {item}
                </Typography>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Button asChild>
              <Link to="https://web.vottamean.com/auth/signup">
                Get Started
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={heroImage} alt="hero" className="w-full object-contain" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <CompanySection />
      </motion.div>
    </section>
  );
};

export default HeroSection;
