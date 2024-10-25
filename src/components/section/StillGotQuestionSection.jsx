import React from 'react';
import { Typography } from '../common/Typography';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const StillGotQuestionSection = () => {
  return (
    <section className='innerWidth'>
      <div className='lg:p-16 p-8 rounded-lg flex justify-between gap-4 items-center md:flex-row flex-col  bg-gradient-to-l from-indigo-100 to-indigo-50'>
        <div className=''>
          <Typography variant={'h3'}>Still Got Questions?</Typography>

          <Typography variant={'p'} className={'max-w-xl mt-4'}>
            If you don't find an answer to your question, contact us, and our
            team will get in touch with you.
          </Typography>
        </div>
        <Button asChild>
          <Link to={'/contact'}>Get in touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default StillGotQuestionSection;
