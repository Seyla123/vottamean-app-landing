import React from 'react';
import { Typography } from './Typography';
import { Badge } from '../ui/badge';

const SectionHeader = ({ subtitle, title }) => {
  return (
    <header className='text-center w-full max-w-xl mx-auto'>
      <Badge>How Does It Works</Badge>
      <Typography variant={'h2'}>{title}</Typography>
    </header>
  );
};

export default SectionHeader;
