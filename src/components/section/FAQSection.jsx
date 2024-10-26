import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Typography } from '../common/Typography';
import { tabs } from '@/lib/data';

function FAQSection({ id }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(tabs[0]);

  const handleClick = async index => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <section id={id} className='innerWidth'>
      <div className='text-center max-w-lg mt-16 md:mt-32 px-6 mx-auto'>
        <Typography variant={'h2'}>FAQs</Typography>
        <Typography variant={'p'}>
          All details about the item and its function can be found here. Can't
          locate the solution you desire? Reach out to our crew!
        </Typography>
      </div>
      <div className='h-fit border border-dashed rounded-lg mt-16'>
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${
              index !== tabs.length - 1 ? 'border-b border-dashed' : ''
            }`}
            onClick={() => handleClick(index)}
          >
            <button
              className={`flex items-center justify-between md:text-xl text-lg p-4 md:p-6 w-full text-start  transition-all gap-2 
               `}
            >
              {tab.title}
              <Plus
                size={24}
                className={`flex-shrink-0 ${
                  activeIndex === index ? 'rotate-45' : 'rotate-0'
                } transition-transform ease-in-out`}
              />
            </button>
            <AnimatePresence mode='sync'>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.14,
                  }}
                >
                  <Typography variant={'p'} className={`p-6 pt-0 w-[90%]`}>
                    {tab.description}
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
