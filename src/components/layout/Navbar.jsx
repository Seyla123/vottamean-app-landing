import React, { useState } from "react";
import { Button } from "../ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import vottameanLogo from "../../assets/icons/LOGO_vottamean.svg";

const navLinks = [
  { title: "How it works", href: "#" },
  { title: "Benifits", href: "#" },
  { title: "Features", href: "#" },
  { title: "Testimonials", href: "#" },
  { title: "FAQs", href: "#" },
  { title: "Pricing", href: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full sticky top-0 z-[100] px-4 xl:px-8 flex items-center justify-between xl:py-4 py-2 border-b bg-background/90 backdrop-blur-lg"
    >
      {/* LOGO */}
      <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={vottameanLogo} alt="logo" className="xl:size-10 size-8" />
          <span className="font-bold xl:text-2xl text-xl text-primary">
            Vottamean
          </span>
        </Link>
      </motion.div>

      {/* NAV LINKS */}
      <ul className="xl:flex flex-1 items-center ml-8 hidden">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            variants={linkVariants}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant={"ghost"}
              asChild
              className="text-muted-foreground relative group"
            >
              <Link to={link.href}>
                {link.title}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </Button>
          </motion.li>
        ))}
      </ul>

      {/* NAVBAR DROPDOWN MENU */}
      <AnimatePresence>{isMenuOpen && <NavbarDropDown />}</AnimatePresence>

      {/* CTA */}
      <div className="xl:hidden block">
        <Hamburger
          rounded
          size={26}
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
        />
      </div>
      <motion.div className="xl:flex hidden gap-2" variants={linkVariants}>
        <motion.div transition={{ duration: 0.2 }}>
          <Button variant={"ghost"} asChild className="text-muted-foreground">
            <Link to={"/contact"}>Contact us</Link>
          </Button>
        </motion.div>
        <motion.div transition={{ duration: 0.2 }}>
          <Button asChild>
            <Link to={"https://web.vottamean.com/auth/signup"}>
              Get Started
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

const NavbarDropDown = () => {
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.ul
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full h-fit bg-background inset-0 z-[99] flex flex-col space-y-2 fixed backdrop-blur-lg top-14 border-b py-10 px-4 items-center"
    >
      {navLinks.map((link, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          <Button
            variant={"ghost"}
            asChild
            className="text-muted-foreground w-full"
          >
            <Link to={link.href}>{link.title}</Link>
          </Button>
        </motion.li>
      ))}
      <motion.li
        className="flex flex-col space-y-2 w-full"
        variants={itemVariants}
      >
        <motion.div transition={{ duration: 0.2 }} className="grid">
          <Button
            variant={"ghost"}
            asChild
            className="text-muted-foreground mt-6 w-full"
          >
            <Link to={"/contact"}>Contact us</Link>
          </Button>
          <Button asChild className="w-full mt-4">
            <Link to={"https://web.vottamean.com/auth/signup"}>
              Get Started
            </Link>
          </Button>
        </motion.div>
      </motion.li>
    </motion.ul>
  );
};

export default Navbar;
