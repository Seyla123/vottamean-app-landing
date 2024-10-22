import React from 'react';
import heroImage from '../../assets/images/time-39-491b4.png';
import { Typography } from '../common/Typography';

import { Check } from 'lucide-react';
import underline from '../../assets/icons/Underline.svg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className='w-full grid lg:grid-cols-2 grid-cols-1 gap-14 items-center'>
      {/* CONTENT */}
      <div className='flex flex-col items-start gap-12'>
        <Typography variant={'h1'}>
          Get Real Estate income , without{' '}
          <div className='relative w-fit inline-block'>
            <img
              src={underline}
              alt='underline'
              className='absolute md:-bottom-6 -bottom-4'
            />
            owning
          </div>{' '}
          a house
        </Typography>
        <ul className='flex flex-col gap-2'>
          {[
            'Average return on investment of 7%',
            'Withdraw your funds every 3 months',
            'Investment selection from qualified SGRs',
          ].map((item, index) => (
            <li className='flex items-center gap-2'>
              <div className='grid flex-shrink-0 place-items-center bg-primary text-white rounded-full size-6'>
                <Check size={20} />
              </div>
              <Typography key={index} variant={'p'}>
                {item}
              </Typography>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button asChild>
          <Link to={'/auth/signin'}>Get Started</Link>
        </Button>
      </div>
      {/* IMAGE */}
      <div>
        <img src={heroImage} alt='hero' className='w-full object-contain' />
      </div>
    </section>
  );
};

export default HeroSection;
