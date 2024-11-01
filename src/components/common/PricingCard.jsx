import React from 'react';
import { Typography } from './Typography';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '../ui/badge';

const PricingCard = ({ item }) => {
  return (
    <div
      className={`relative rounded-lg grid grid-cols-1  h-auto ${
        item.title === 'Basic'
          ? ' border-4 border-background shadow-[rgba(7,_65,_210,_0.1)_0px_9px_10px] bg-gradient-to-b from-purple-50 to-indigo-50'
          : 'bg-background border  border-dashed'
      }`}
    >
      {/* CARD HEADER */}
      <div className='flex flex-col space-y-4 p-8 border-b border-dashed'>
        <Typography variant={'h3'}>{item.title}</Typography>
        <span className='flex items-center gap-4'>
          <Typography variant={'h2'}>{item.price}</Typography>
          <Typography variant={'h4'}>/ {item.duration}</Typography>
        </span>
      </div>
      {/* CARD FEATURES */}
      <div className='p-8 w-full h-full grid grid-cols-1 justify-between'>
        <ul className='space-y-2'>
          {item.features.map((feature, index) => (
            <li key={index}>
              <Typography variant={'p'} className={'flex gap-4 items-center'}>
                {feature.icon}
                {feature.title}
              </Typography>
            </li>
          ))}
        </ul>
        {/* CARD BUTTON */}
        <Button className='mt-8' asChild>
          <Link to={'https://hexcode.anbschool.org/app/auth/signup'}>Start Now</Link>
        </Button>
      </div>
      {item.popular && (
        <Badge className={'absolute right-4 top-4'}>Popular</Badge>
      )}
    </div>
  );
};

export default PricingCard;
