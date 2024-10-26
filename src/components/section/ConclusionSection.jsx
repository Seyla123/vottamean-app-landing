import React from 'react';
import { Typography } from '../common/Typography';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import macbookPro from '@/assets/images/macbook-pro.svg';
import iphoneMark from '@/assets/images/iPhone-mark.svg';
import iphoneAttendance from '@/assets/images/iphone-attendance.png';
import { Folder, Highlighter } from 'lucide-react';

const ConclusionSection = () => {
  return (
    <section className='innerWidth pb-44'>
      <div className='relative h-auto rounded-lg bg-black text-white grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden justify-between'>
        <div className='relative flex flex-col justify-center items-start p-8 md:p-16'>
          <Typography variant={'h2'} className={'capitalize'}>
            Just One Click to Mark Your Attendance
          </Typography>
          <Button asChild variant={'secondary'} className={'mt-8'}>
            <Link to={'https://web.vottamean.com/auth/signup'}>Get Started</Link>
          </Button>
        </div>
        <img
          src={iphoneAttendance}
          alt='iphone mockup'
          className='w-full md:w-1/2 lg:w-full mx-auto h-full object-cover'
        />
      </div>
    </section>
  );
};

export default ConclusionSection;
{
  /* <div className="absolute right-4">
  <div className="bg-background absolute right-0 top-[32%] w-fit flex items-center gap-2 py-1 pl-1 pr-4 rounded-full border border-dashed shadow-lg">
    <Folder className="w-8 h-8 p-1 rounded-full bg-primary" />
    <p className="text-black">Easy to use and manage</p>
  </div>
  <img src={iphoneMark} alt="macbook mockup" className="h-full w-4/5 mt-14" />
  <div className="bg-background absolute left-[-20%] top-[48%] w-fit flex items-center gap-2 py-1 pl-1 pr-4 rounded-full border border-dashed shadow-lg">
    <Highlighter className="w-8 h-8 p-1 rounded-full bg-primary" />
    <p className="text-black">Mark your attendance</p>
  </div>
</div> */
}
