import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { features } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { Typography } from './Typography';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import gredientBg from '../../assets/images/light-gredient-bg.png';

import stackingcardBg from '@/assets/images/stacking-card-bg.webp';

export default function StackingCard() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <section className='relative w-full bg-secondary'>
      <img
        src={gredientBg}
        alt=''
        className='absolute w-full h-full object-cover pointer-events-none -z-1 inset-0'
      />
      <main className='innerWidth relative z-10' ref={container}>
        <SectionHeader
          subtitle={'Features'}
          title={'Discover our Powerful Features'}
          underline={'Powerful'}
        />

        <section className='md:mt-0 w-full relative'>
          {features.map((feature, i) => {
            const targetScale = 1 - (features.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={feature?.link}
                src={feature?.src}
                title={feature?.title}
                color={feature?.color}
                description={feature?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </section>
  );
}

export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen w-full flex items-center justify-center sticky top-10 '
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative ${color} -top-[25%] h-[auto] w-[100%] rounded-xl md:p-16 p-8 origin-top`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center h-full  gap-8`}
        >
          <div
            className={`relative order-2 md:order-1 z-10 space-y-8 text-white`}
          >
            <h2 className='text-3xl md:text-6xl'>{title}</h2>
            <Typography variant={'p'} className={'text-muted'}>
              {description}
            </Typography>
            {/* button cta */}
            <Button asChild variant={'secondary'}>
              <Link to={'https://web.vottamean.com/auth/signup'}>
                Get Started
              </Link>
            </Button>
          </div>

          <div
            className={`relative w-full  bg-gradient-to-b from-indigo-100 to-indigo-50 h-full rounded-lg overflow-hidden order-1  md:order-2`}
          >
            {/* <img src={stackingcardBg} alt="bg" className="absolute top-0 z-1" /> */}
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt='image'
                className='object-contain h-full w-full'
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
