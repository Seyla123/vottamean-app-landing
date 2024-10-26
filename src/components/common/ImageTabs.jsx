import React, { useState } from 'react';
import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from '../ui/tab';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Typography } from './Typography';
import gredient1 from '../../assets/images/light-gredient-4.avif';

const ImageTabs = ({ tabs, className }) => {
  // Check if className includes flex-row-reverse
  const isReversed = className?.includes('flex-row-reverse');

  return (
    <div className='w-full h-full'>
      <TabsProvider
        defaultValue='improve'
        className={cn(
          'grid lg:grid-cols-3 grid-cols-1 items-start gap-8 justify-center'
        )}
      >
        <TabImageContainer
          className={cn('lg:col-span-2 ', isReversed && 'lg:order-last')}
        >
          {tabs.map((tab, index) => (
            <TabImage key={index} value={tab.id}>
              <img
                src={tab.imageUrl}
                alt={tab.title}
                className={
                  (cn('w-full relative object-cover object-center '), className)
                }
              />
            </TabImage>
          ))}
        </TabImageContainer>
        <TabList
          className={cn('lg:col-span-1 ', isReversed && 'lg:order-first')}
        >
          {tabs.map((tab, index) => (
            <TabItem key={index} value={tab.id}>
              <TabHeader value={tab.id}>
                <span className='flex items-center gap-4'>
                  {tab.icon}
                  {tab.title}
                </span>
              </TabHeader>
              <TabDes value={tab.id}>
                <Typography variant={'p'} className={'p-4 md:p-6'}>
                  {tab.description}
                </Typography>
                <div className='relative px-4 py-16 md:py-0'>
                  {/* <img
                    src={gredient1}
                    alt='bg-gredient'
                    className='absolute md:hidden  opacity-60 inset-0 w-full h-full object-cover -z-1'
                  /> */}
                  <img
                    src={tab.imageUrl}
                    alt={tab.title}
                    className='md:hidden block rounded-lg relative'
                  />
                </div>
              </TabDes>
            </TabItem>
          ))}
          <Button asChild className='md:mt-8'>
            <Link to={'https://web.vottamean.com/auth/signin'}>Try it free</Link>
          </Button>
        </TabList>
      </TabsProvider>
    </div>
  );
};

export default ImageTabs;
