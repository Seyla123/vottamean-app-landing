import React from 'react';
import { Typography } from '../common/Typography';
import Marquee from '../ui/marguee';
import { cn } from '@/lib/utils';
import logo1 from '@/assets/images/logo-1.png';
import logo2 from '@/assets/images/logo-2.png';
import logo3 from '@/assets/icons/ratifyme-logo.png';
import logo4 from '@/assets/icons/agteach-logo.png';

const logos = [
  {
    name: 'Microsoft',
    img: logo1,
  },
  {
    name: 'Apple',
    img: logo2,
  },
  {
    name: 'Microsoft',
    img: logo1,
  },
  {
    name: 'Apple',
    img: logo2,
  },
  {
    name: 'AgTeach',
    img: logo4,
  },
  {
    name: 'Ratifyme',
    img: logo3,
  },
];

const CompanySection = () => {
  return (
    <section className='w-full innerWidth'>
      <Typography className={'lg:text-start text-center'} variant={'h4'}>
        As Seen On
      </Typography>
      <div className='relative  flex h-full w-full rounded-lg flex-col items-center justify-center gap-4 overflow-hidden p-8'>
        <Marquee className='[--gap:3rem]'>
          {logos.map((logo, idx) => (
            <Logo key={idx} {...logo} />
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-2/3 '></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3'></div>
      </div>
    </section>
  );
};

const Logo = ({ name, img }) => {
  return (
    <div className={cn('h-16 w-36 rounded-md overflow-hidden')}>
      <img
        src={img}
        alt={name}
        className='w-full h-full object-contain rounded-lg'
      />
    </div>
  );
};

export default CompanySection;
