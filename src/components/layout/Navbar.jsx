import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Squash as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import vottameanLogo from '../../assets/icons/logo-v4.svg';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@/hooks/use-media-query';

const navLinks = [
  { title: 'How it works', href: '#how-it-works' },
  { title: 'Benefits', href: '#benefits' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'FAQs', href: '#faqs' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Features', href: '#features' },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDesktop = useMediaQuery('(max-width: 1280px)');

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.nav
      initial='hidden'
      animate='visible'
      variants={navVariants}
      className='w-full sticky top-0 z-[999] px-4 xl:px-8 flex items-center justify-between xl:py-4 py-2 border-b bg-background'
    >
      {/* LOGO */}
      <motion.div whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
        <Link
          to={'/'}
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={vottameanLogo} alt='logo' className='w-full size-8' />
        </Link>
      </motion.div>

      {/* NAV LINKS */}
      {currentPath !== '/contact' && (
        <>
          <ul className='xl:flex flex-1 items-center ml-8 hidden'>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={'ghost'}
                  asChild
                  className='text-muted-foreground relative group'
                  onClick={e => handleScroll(e, link.href)}
                >
                  <Link to={link.href}>
                    {link.title}
                    <motion.span
                      className='absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left'
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </Button>
              </motion.li>
            ))}
          </ul>
        </>
      )}

      {/* NAVBAR DROPDOWN MENU */}
      {isDesktop && (
        <AnimatePresence>
          {isMenuOpen && (
            <NavbarDropDown
              currentPath={currentPath}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
        </AnimatePresence>
      )}

      {/* CTA */}
      <div className='xl:hidden block'>
        <Hamburger
          rounded
          size={26}
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
        />
      </div>
      <motion.div className='xl:flex hidden gap-2' variants={linkVariants}>
        <motion.div transition={{ duration: 0.2 }}>
          <Button variant={'ghost'} asChild className='text-muted-foreground'>
            <Link to={'/contact'}>Contact us</Link>
          </Button>
        </motion.div>
        <motion.div transition={{ duration: 0.2 }}>
          <Button asChild>
            <Link to={'https://hexcode.anbschool.org/auth/signup'}>
              Get Started
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

const NavbarDropDown = ({ setIsMenuOpen, currentPath }) => {
  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
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
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.ul
      variants={dropdownVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='w-full h-fit bg-background inset-0 z-[99] flex flex-col space-y-2 fixed backdrop-blur-lg top-14 border-b py-10 px-4 items-center'
    >
      {currentPath !== '/contact' && (
        <>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.2 }}
              className='w-full'
            >
              <Button
                variant={'ghost'}
                asChild
                className='text-muted-foreground relative group w-full'
                onClick={e => handleScroll(e, link.href)}
              >
                <Link to={link.href}>
                  {link.title}
                  <motion.span
                    className='absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-center'
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </Button>
            </motion.li>
          ))}
        </>
      )}

      <motion.li
        className='flex flex-col space-y-2 w-full'
        variants={itemVariants}
      >
        <motion.div transition={{ duration: 0.2 }} className='grid'>
          <Button
            variant={'ghost'}
            asChild
            className='text-muted-foreground mt-6 w-full'
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Link to={'/contact'}>Contact us</Link>
          </Button>
          <Button asChild className='w-full mt-4'>
            <Link to={'https://hexcode.anbschool.org/auth/signup'}>
              Get Started
            </Link>
          </Button>
        </motion.div>
      </motion.li>
    </motion.ul>
  );
};

export default Navbar;
