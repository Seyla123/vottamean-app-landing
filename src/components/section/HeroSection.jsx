import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/features/mark Attendance.svg';
import { Typography } from '../common/Typography';
import { Check } from 'lucide-react';
import underline from '../../assets/icons/underline-1.svg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import CompanySection from './CompanySection';
import backgroundImage from '../../assets/images/light-gredient-3.avif';

const HeroSection = ({ id }) => {
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id={id} className='w-full relative h-auto overflow-hidden '>
      {/* BACKGROUND */}
      <img
        src={backgroundImage}
        alt='bg'
        className='absolute -z-1 left-0  w-full h-full inset-0  object-cover md:object-cover md:opacity-60 opacity-70'
      />
      <motion.div
        className='innerWidth py-16 relative z-[100] h-full  grid lg:grid-cols-2 grid-cols-1 gap-4 items-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* CONTENT */}
        <div className='flex flex-col items-start gap-12 w-full '>
          <motion.div variants={itemVariants}>
            <Typography variant='h1'>
              Effortlessly Track and Manage{' '}
              <span className='relative w-fit inline-block'>
                <motion.img
                  src={underline}
                  alt='underline'
                  className='absolute -bottom-2 left-0'
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                />
                Student
              </span>{' '}
              Attendance
            </Typography>
          </motion.div>

          <motion.ul className='flex flex-col gap-2' variants={itemVariants}>
            {[
              'Seamless Attendance Tracking',
              'Automated Reports and Insights',
              'Effortless Integration and Accessibility',
            ].map((item, index) => (
              <motion.li
                key={index}
                className='flex items-center gap-2'
                variants={itemVariants}
              >
                <motion.div
                  className='grid flex-shrink-0 place-items-center bg-primary text-white rounded-full size-6'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Check size={20} />
                </motion.div>
                <Typography key={index} variant='p'>
                  {item}
                </Typography>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Button asChild className='shadow-lg'>
              <Link to='/'>Get Started</Link>
            </Button>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='relative mt-16 lg:mt-0 lg:h-[800px] flex items-center justify-center lg:w-[1000px]'
        >
          <img
            src={heroImage}
            alt='hero'
            className='lg:absolute w-full h-full object-contain'
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='relative w-full'
      >
        <CompanySection />
      </motion.div>
    </section>
  );
};

export default HeroSection;
