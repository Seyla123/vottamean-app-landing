import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ImageTabs from '../common/ImageTabs';
import { howDoesItWork } from '@/lib/data';

const HowDoesItWorkSection = ({ id }) => {
  return (
    <section id={id} className='innerWidth'>
      <SectionHeader
        subtitle={'How does it work?'}
        title={'Effortless Attendance Tracking Made Simple'}
        underline={'Attendance'}
      />
      <ImageTabs tabs={howDoesItWork} className={''} />
    </section>
  );
};

export default HowDoesItWorkSection;
