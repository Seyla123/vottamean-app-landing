import React, { useState } from "react";
import { Button } from "../ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import vottameanLogo from "../../assets/icons/LOGO_vottamean.svg";

const navLinks = [
  { title: "How it works", href: "#" },
  { title: "Simulator", href: "#" },
  { title: "Benifits", href: "#" },
  { title: "Features", href: "#" },
  { title: "FAQs", href: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full sticky top-0 z-[100] px-4 lg:px-8 flex items-center justify-between xl:py-4 py-2 border-b bg-background">
      {/* LOGO */}
      <Link to={"/"} className="flex items-center gap-2">
        <img src={vottameanLogo} alt="logo" className="xl:size-10 size-8" />
        <span className="font-bold xl:text-2xl text-xl text-primary">
          Vottamean
        </span>
      </Link>

      {/* NAV LINKS */}
      <ul className="xl:flex flex-1 items-center ml-8 hidden ">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Button variant={"ghost"} asChild className="text-muted-foreground">
              <Link to={link.href}>{link.title}</Link>
            </Button>
          </li>
        ))}
      </ul>

      {/* NAVBAR DROPDOWN MENU */}
      {isMenuOpen && (
        <AnimatePresence>
          <NavbarDropDown />
        </AnimatePresence>
      )}

      {/* CTA */}
      <div className="xl:hidden block">
        <Hamburger rounded size={26} onToggle={handleToggleMenu} />
      </div>
      <div className="xl:flex hidden gap-2">
        <Button variant={"ghost"} asChild className="text-muted-foreground">
          <Link to={"/contact"}>Contact us</Link>
        </Button>
        <Button asChild>
          <Link to={"/auth/signin"}>Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

const NavbarDropDown = () => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full inset-0 z-[99] flex flex-col space-y-2 fixed bg-background top-14 border-b  py-10 px-4"
    >
      {navLinks.map((link, index) => (
        <li key={index}>
          <Button
            variant={"ghost"}
            asChild
            className="text-muted-foreground w-full"
          >
            <Link to={link.href}>{link.title}</Link>
          </Button>
        </li>
      ))}
      <li className="flex flex-col space-y-2">
        <Button
          variant={"ghost"}
          asChild
          className="text-muted-foreground mt-6"
        >
          <Link to={"/contact"}>Contact us</Link>
        </Button>
        <Button asChild>
          <Link to={"/auth/signin"}>Get Started</Link>
        </Button>
      </li>
    </motion.ul>
  );
};

export default Navbar;
